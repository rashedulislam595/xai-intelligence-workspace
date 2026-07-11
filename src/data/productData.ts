export type InsightStage = {
  id: "ingest" | "analyze" | "generate";
  label: string;
  title: string;
  description: string;
  metrics: string[];
};

export const insightStages: InsightStage[] = [
  {
    id: "ingest",
    label: "01 / Ingest Data",
    title: "Unify scattered operational signals",
    description: "Connect files, dashboards, APIs, and team workflows into one intelligence layer.",
    metrics: ["42 sources", "8.4M events", "99.2% parsed"],
  },
  {
    id: "analyze",
    label: "02 / Analyze with AI",
    title: "Detect patterns, gaps, and business risk",
    description: "Xai groups noisy data into entities, trends, anomalies, and decision-ready summaries.",
    metrics: ["18 anomalies", "6 risk clusters", "3 priority insights"],
  },
  {
    id: "generate",
    label: "03 / Generate Insight",
    title: "Turn intelligence into automation",
    description: "Launch workflows, notify teams, and create next actions from the insight graph.",
    metrics: ["12 actions", "4 automations", "2.8h saved"],
  },
];

export const dashboardMetrics = [
  { label: "Signals Processed", value: "8.4M", trend: "+18%" },
  { label: "Active Insights", value: "128", trend: "+24" },
  { label: "Risk Clusters", value: "06", trend: "-3" },
  { label: "Automations", value: "42", trend: "+9" },
];
