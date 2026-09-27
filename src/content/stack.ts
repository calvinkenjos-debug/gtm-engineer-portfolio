export interface Tool {
  name: string;
  slug: string;
}

export interface StackLayer {
  layer: string;
  role: string;
  tools: Tool[];
}

export const stackLayers: StackLayer[] = [
  {
    layer: "System of record",
    role: "Where the data has to be right",
    tools: [
      { name: "HubSpot", slug: "hubspot" },
      { name: "Salesforce", slug: "salesforce" },
      { name: "Attio", slug: "attio" },
    ],
  },
  {
    layer: "Data & enrichment",
    role: "Waterfall enrichment, not one vendor's guess",
    tools: [
      { name: "Clay", slug: "clay" },
      { name: "Apollo", slug: "apollo" },
      { name: "ZoomInfo", slug: "zoominfo" },
      { name: "Clearbit", slug: "clearbit" },
      { name: "Hunter", slug: "hunter" },
    ],
  },
  {
    layer: "Outreach execution",
    role: "The system of action",
    tools: [
      { name: "Smartlead", slug: "smartlead" },
      { name: "Instantly", slug: "instantly" },
      { name: "Outreach", slug: "outreach" },
      { name: "Salesloft", slug: "salesloft" },
      { name: "HeyReach", slug: "heyreach" },
    ],
  },
  {
    layer: "Automation & orchestration",
    role: "The connective tissue between every other layer",
    tools: [
      { name: "n8n", slug: "n8n" },
      { name: "Make", slug: "make" },
      { name: "Zapier", slug: "zapier" },
      { name: "Workato", slug: "workato" },
    ],
  },
  {
    layer: "Signals & intent",
    role: "Timing outbound to something real",
    tools: [
      { name: "LinkedIn Sales Navigator", slug: "linkedin" },
      { name: "RB2B", slug: "rb2b" },
      { name: "Crunchbase", slug: "crunchbase" },
      { name: "Bombora", slug: "bombora" },
    ],
  },
  {
    layer: "AI & code",
    role: "Where logic gets too specific for a no-code tool",
    tools: [
      { name: "Claude", slug: "claude" },
      { name: "OpenAI", slug: "openai" },
      { name: "Cursor", slug: "cursor" },
      { name: "Replit", slug: "replit" },
    ],
  },
  {
    layer: "Analytics & storage",
    role: "Attribution that survives a board meeting",
    tools: [
      { name: "BigQuery", slug: "bigquery" },
      { name: "Snowflake", slug: "snowflake" },
      { name: "Databricks", slug: "databricks" },
      { name: "Supabase", slug: "supabase" },
    ],
  },
];