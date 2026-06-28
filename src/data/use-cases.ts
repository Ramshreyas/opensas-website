export interface UseCase {
  title: string;
  industry: string;
  summary: string;
  detail: string;
  outcomes: string[];
}

export const useCases: UseCase[] = [
  {
    title: "Private Agentic Workflows for Regulated Industries",
    industry: "Financial Services / Healthcare / Legal",
    summary:
      "Deploy LLM-powered compliance agents that review communications, flag policy violations, and draft regulatory filings — on data that cannot leave your VPC.",
    detail:
      "vLLM runs on your GPUs. MinIO stores internal documents. n8n orchestrates the review pipeline. Teleport provides audit-grade SSH access. Zero bytes touch the public internet.",
    outcomes: [
      "Zero data leak — no third-party API calls for inference or storage",
      "Full audit trail of every agent action (Teleport + OpenBao)",
      "Compliant with GDPR, HIPAA, SOC2 data residency requirements",
    ],
  },
  {
    title: "Internal Developer Platform with AI-Augmented Tooling",
    industry: "Platform Engineering / Software Development",
    summary:
      "Give your engineers AI-powered code review, documentation generation, and incident response bots — without sending proprietary source code to a third-party API.",
    detail:
      "MCP servers connect to internal git repos and observability stacks. LiteLLM routes requests across locally-hosted models. Langfuse traces every prompt for debugging.",
    outcomes: [
      "Proprietary source code never leaves your network",
      "Engineers use familiar tools (Slack, IDE, CLI) with AI augmentation",
      "Swap models (Llama → Mistral → Qwen) without changing application code",
    ],
  },
  {
    title: "Multi-Tenant AI Sandbox for Consulting & Services",
    industry: "Consulting / Professional Services / MSPs",
    summary:
      "Isolated AI environments per client — each client's data, models, and workflows strictly partitioned, all running on your own hardware.",
    detail:
      "Layer 3 IAM maps to per-tenant isolation. Teleport mesh provides per-client access controls. Kubernetes namespaces + Qdrant collections handle data partitioning.",
    outcomes: [
      "Strict tenant isolation — no cross-client data leakage",
      "Single infrastructure pool serving multiple clients",
      "Clients get dedicated UIs and access controls without shared infrastructure",
    ],
  },
];
