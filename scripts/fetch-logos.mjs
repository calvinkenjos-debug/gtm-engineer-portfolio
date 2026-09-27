// One-off build-time asset fetcher. Not part of the app runtime and never
// shipped to the client: it shells out to `curl` (Node's own TLS stack
// can't validate certs on this machine) to pull each tool's logo from the
// Brandfetch Brand API and cache it locally under public/logos/. Run with:
//
//   node --env-file=.env.local scripts/fetch-logos.mjs
//
// BRANDFETCH_API_KEY must be set in .env.local (gitignored), never committed
// or referenced from client-side code.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";

const API_KEY = process.env.BRANDFETCH_API_KEY;
if (!API_KEY) {
  console.error("Missing BRANDFETCH_API_KEY. Run with --env-file=.env.local");
  process.exit(1);
}

// slug -> domain Brandfetch should resolve. Tools with no reasonable
// standalone domain (e.g. Claygent, a Clay feature) are omitted on purpose
// and stay as text labels in the UI.
const TOOLS = {
  hubspot: "hubspot.com",
  salesforce: "salesforce.com",
  attio: "attio.com",
  clay: "clay.com",
  apollo: "apollo.io",
  zoominfo: "zoominfo.com",
  clearbit: "clearbit.com",
  hunter: "hunter.io",
  smartlead: "smartlead.ai",
  instantly: "instantly.ai",
  outreach: "outreach.io",
  salesloft: "salesloft.com",
  heyreach: "heyreach.io",
  n8n: "n8n.io",
  make: "make.com",
  zapier: "zapier.com",
  workato: "workato.com",
  linkedin: "linkedin.com",
  rb2b: "rb2b.com",
  crunchbase: "crunchbase.com",
  bombora: "bombora.com",
  claude: "anthropic.com",
  openai: "openai.com",
  cursor: "cursor.com",
  replit: "replit.com",
  bigquery: "cloud.google.com",
  snowflake: "snowflake.com",
  databricks: "databricks.com",
  supabase: "supabase.com",
};

const OUT_DIR = path.join(process.cwd(), "public", "logos");
const MARK_DIR = path.join(OUT_DIR, "mark");
const WORDMARK_DIR = path.join(OUT_DIR, "wordmark");
mkdirSync(MARK_DIR, { recursive: true });
mkdirSync(WORDMARK_DIR, { recursive: true });

function curlJson(url) {
  const out = execFileSync("curl", ["-s", url, "-H", `Authorization: Bearer ${API_KEY}`], {
    maxBuffer: 1024 * 1024 * 10,
  });
  return JSON.parse(out.toString("utf8"));
}

function curlBinary(url, destPath) {
  execFileSync("curl", ["-sL", url, "-o", destPath]);
}

function pickAsset(logos, type) {
  const candidates = logos.filter((l) => l.type === type);
  const byTheme = (theme) => candidates.find((l) => l.theme === theme);
  // Brandfetch's "dark" theme is the full-color/dark-ink mark meant for
  // light surfaces; "light" theme is a white mark meant for dark surfaces.
  // Our canvas is light, so "dark" is the one we want.
  const chosen = byTheme("dark") ?? byTheme("light") ?? candidates[0];
  if (!chosen) return null;
  const formats = chosen.formats ?? [];
  const svg = formats.find((f) => f.format === "svg");
  const png = formats.find((f) => f.format === "png");
  const any = formats[0];
  return svg ?? png ?? any ?? null;
}

const MANIFEST_PATH = path.join(process.cwd(), "src", "content", "logo-manifest.json");

// Incremental by default: keep whatever already resolved (protects a
// limited API quota) and only fetch slugs missing from the manifest.
// Pass --force to re-fetch every tool regardless.
const force = process.argv.includes("--force");
const manifest = !force && existsSync(MANIFEST_PATH) ? JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) : {};

const todo = Object.entries(TOOLS).filter(([slug]) => force || !manifest[slug]);
console.log(`${todo.length}/${Object.keys(TOOLS).length} tools need fetching (${Object.keys(manifest).length} already cached).`);

for (const [slug, domain] of todo) {
  try {
    const data = curlJson(`https://api.brandfetch.io/v2/brands/${domain}`);
    if (!data || !Array.isArray(data.logos)) {
      console.warn(`[skip] ${slug}: no logos in response (${JSON.stringify(data).slice(0, 120)})`);
      continue;
    }

    // "icon" assets are sometimes a mis-crawled marketing image rather than
    // the actual brand mark (observed for Clay), so prefer the curated
    // "symbol" asset and only fall back to "icon" if no symbol exists.
    const mark = pickAsset(data.logos, "symbol") ?? pickAsset(data.logos, "icon");
    const wordmark = pickAsset(data.logos, "logo");

    const entry = {};

    if (mark) {
      const ext = mark.format === "jpeg" ? "jpg" : mark.format;
      const file = `${slug}.${ext}`;
      curlBinary(mark.src, path.join(MARK_DIR, file));
      entry.mark = `/logos/mark/${file}`;
    }

    if (wordmark) {
      const ext = wordmark.format === "jpeg" ? "jpg" : wordmark.format;
      const file = `${slug}.${ext}`;
      curlBinary(wordmark.src, path.join(WORDMARK_DIR, file));
      entry.wordmark = `/logos/wordmark/${file}`;
    }

    if (Object.keys(entry).length > 0) {
      manifest[slug] = entry;
      console.log(`[ok] ${slug}`, entry);
    } else {
      console.warn(`[skip] ${slug}: no usable symbol/icon/logo asset`);
    }
  } catch (err) {
    console.warn(`[error] ${slug}:`, err.message);
  }

  // Be polite to the API's rate limit (synchronous sleep, cross-platform).
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 300);
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

console.log(`\nDone. ${Object.keys(manifest).length}/${Object.keys(TOOLS).length} tools resolved.`);
console.log("Manifest written to src/content/logo-manifest.json");