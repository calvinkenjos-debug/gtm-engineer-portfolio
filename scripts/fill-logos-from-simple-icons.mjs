// Fills gaps the Brandfetch quota couldn't cover, using the local
// simple-icons package (offline, no API, no quota). Only touches slugs
// missing from the manifest; never overwrites a Brandfetch-sourced asset.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const iconData = JSON.parse(
  readFileSync(path.join(process.cwd(), "node_modules", "simple-icons", "data", "simple-icons.json"), "utf8")
);

// project slug -> simple-icons file slug (in node_modules/simple-icons/icons)
const SIMPLE_ICON_SLUG = {
  make: "make",
  zapier: "zapier",
  crunchbase: "crunchbase",
  claude: "claude",
  cursor: "cursor",
  bigquery: "googlebigquery",
  snowflake: "snowflake",
  databricks: "databricks",
};

const MANIFEST_PATH = path.join(process.cwd(), "src", "content", "logo-manifest.json");
const MARK_DIR = path.join(process.cwd(), "public", "logos", "mark");
mkdirSync(MARK_DIR, { recursive: true });

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));

for (const [projectSlug, iconSlug] of Object.entries(SIMPLE_ICON_SLUG)) {
  if (manifest[projectSlug]?.mark) {
    console.log(`[skip] ${projectSlug}: already has a mark`);
    continue;
  }
  const src = path.join(process.cwd(), "node_modules", "simple-icons", "icons", `${iconSlug}.svg`);
  if (!existsSync(src)) {
    console.warn(`[miss] ${projectSlug}: no simple-icons asset for "${iconSlug}"`);
    continue;
  }

  // simple-icons ships paths with no fill (defaults to black); inject the
  // real brand hex on the root <svg> so it's inherited, matching the
  // full-color marks Brandfetch already gave us for the rest of the grid.
  const entry = iconData.find((i) => i.slug === iconSlug);
  let svg = readFileSync(src, "utf8");
  if (entry?.hex) {
    svg = svg.replace("<svg ", `<svg fill="#${entry.hex}" `);
  }

  const dest = path.join(MARK_DIR, `${projectSlug}.svg`);
  writeFileSync(dest, svg);
  manifest[projectSlug] = { ...manifest[projectSlug], mark: `/logos/mark/${projectSlug}.svg` };
  console.log(`[ok] ${projectSlug} <- simple-icons:${iconSlug} (#${entry?.hex ?? "default"})`);
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nManifest now has ${Object.keys(manifest).length} entries.`);