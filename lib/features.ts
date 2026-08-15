export type Feature = {
  title: string;
  description: string;
  points: string[];
  icon: string;
};

export const featureCategories: Feature[] = [
  {
    icon: "grid",
    title: "AI Inventory & Lifecycle",
    description:
      "One registry for every model, agent, and use case — from first prototype to retirement.",
    points: [
      "Central registry of internal, vendor, and open-source AI systems",
      "Lifecycle tracking: build → validate → deploy → monitor → retire",
      "Use-case intake with owner, business justification, and ROI tracking",
      "Automatic discovery of shadow AI usage across the org",
    ],
  },
  {
    icon: "layers",
    title: "Data Foundation",
    description:
      "Governance is only as strong as the data underneath every model.",
    points: [
      "Data catalog covering every source feeding an AI system",
      "Automated lineage from raw data through training and inference",
      "Data quality monitoring and anomaly detection on model inputs",
      "Shared semantic layer so humans and models agree on meaning",
    ],
  },
  {
    icon: "shield",
    title: "Risk & Compliance",
    description:
      "Turn regulatory obligations into automated, continuously enforced controls.",
    points: [
      "Automated risk scoring per model, agent, and use case",
      "Regulatory mapping (EU AI Act, GDPR, HIPAA, FINRA, and more)",
      "Policy-as-code enforcement across every deployment surface",
      "Continuous monitoring, not just point-in-time assessment",
    ],
  },
  {
    icon: "lock",
    title: "Privacy & Data Protection",
    description: "Know what sensitive data flows where, and control it.",
    points: [
      "Automated PII and sensitivity detection across structured and unstructured data",
      "Privacy risk workflows tied directly to remediation owners",
      "Fine-grained masking and access control by sensitivity level",
      "Support for privacy-preserving techniques in model training",
    ],
  },
  {
    icon: "scale",
    title: "Ethics, Fairness & Explainability",
    description: "Make every model decision defensible, not just accurate.",
    points: [
      "Bias detection and mitigation tooling across protected attributes",
      "Configurable ethical-use guidelines enforced at deployment",
      "Human-readable explanations for individual model decisions",
      "Full audit trail from input to output for every inference",
    ],
  },
  {
    icon: "users",
    title: "Access & Accountability",
    description:
      "Every model and dataset has a named owner and a clear approval path.",
    points: [
      "RACI-based stewardship for models, data, and policies",
      "Role-based access control across the AI stack",
      "Human-in-the-loop approval gates before agents act or deploy",
      "Federated governance — central policy, distributed ownership",
    ],
  },
  {
    icon: "activity",
    title: "Monitoring & Operations",
    description: "See how AI systems behave in production, in real time.",
    points: [
      "Live dashboards for agent and model behavior",
      "Drift detection and automated alerting on policy violations",
      "Usage and adoption analytics across teams",
      "Trust-score style rollups for executive reporting",
    ],
  },
  {
    icon: "share",
    title: "Collaboration & Enablement",
    description: "Governance that teams actually use, not a compliance tax.",
    points: [
      "No-code workflow builder for governance and review processes",
      "Marketplace to discover and request certified, trusted data products",
      "Governed self-service notebooks for analysts and data scientists",
      "In-context governance surfaced directly inside everyday tools",
    ],
  },
  {
    icon: "plug",
    title: "Platform & Integrations",
    description: "Fits the stack you already run, not the one you'd have to rebuild.",
    points: [
      "Native connectors for Snowflake, Databricks, BigQuery, and major clouds",
      "Open APIs and a full developer portal for custom integrations",
      "Extensible architecture for new model providers and agent frameworks",
      "SSO, audit logging, and enterprise-grade deployment options",
    ],
  },
];
