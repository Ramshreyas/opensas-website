export interface StackLayer {
  id: number;
  name: string;
  description: string;
  color: string;
  gradient: string;
  tools: string[];
  details: string[];
}

export const stackLayers: StackLayer[] = [
  {
    id: 4,
    name: "Interfaces",
    description: "User-facing entry points — chat UIs, Slack bots, Streamlit apps.",
    color: "var(--color-layer-4)",
    gradient: "from-cyan-500 to-cyan-600",
    tools: ["LibreChat", "Slack bots", "Streamlit"],
    details: [
      "Multi-channel UI: LibreChat provides a ChatGPT-compatible interface your team already knows how to use.",
      "Slack / Mattermost bots for in-channel agent interactions.",
      "Streamlit dashboards for custom internal tools and data apps.",
      "All traffic stays within your network — no external API calls.",
    ],
  },
  {
    id: 3,
    name: "App & Orchestration",
    description: "Logic layer — visual workflows, MCP tool servers, and custom agents.",
    color: "var(--color-layer-3)",
    gradient: "from-amber-500 to-amber-600",
    tools: ["n8n", "MCP Servers", "FastAPI agents"],
    details: [
      "n8n provides visual workflow automation with 400+ connectors — all self-hosted.",
      "MCP (Model Context Protocol) servers give agents access to internal APIs, databases, and git repos.",
      "FastAPI microservices for custom agent logic that can't be expressed visually.",
      "Every workflow execution is logged and traceable via OpenTelemetry.",
    ],
  },
  {
    id: 2,
    name: "Data & Privacy",
    description: "Memory, storage, and access control — the data never leaves.",
    color: "var(--color-layer-2)",
    gradient: "from-violet-500 to-violet-600",
    tools: ["MinIO", "Qdrant", "pgvector", "IAM"],
    details: [
      "MinIO provides S3-compatible object storage for documents, embeddings, and model artifacts.",
      "Qdrant handles vector search for RAG (retrieval-augmented generation) workloads.",
      "pgvector on PostgreSQL for relational data with semantic search capabilities.",
      "Fine-grained IAM policies map to your existing identity provider (OIDC / LDAP).",
    ],
  },
  {
    id: 1,
    name: "Infrastructure & Day-2",
    description: "Model serving, cost tracking, observability, and secrets management.",
    color: "var(--color-layer-1)",
    gradient: "from-blue-500 to-blue-600",
    tools: ["vLLM", "LiteLLM", "OpenBao", "Grafana"],
    details: [
      "vLLM serves open-weight models (Llama, Mistral, Qwen, DeepSeek) on your GPUs with PagedAttention for high throughput.",
      "LiteLLM provides a unified API gateway — swap models without changing application code.",
      "OpenBao (Vault fork) manages secrets, API keys, and encryption for all stack components.",
      "Grafana + Prometheus for unified observability: GPU utilization, token spend, latency, and cost per user.",
    ],
  },
  {
    id: 0,
    name: "Mesh & Connectivity",
    description: "The fabric that binds it all — secure overlay network and access control.",
    color: "var(--color-layer-0)",
    gradient: "from-teal-500 to-teal-600",
    tools: ["Teleport", "WireGuard"],
    details: [
      "Teleport provides identity-aware SSH/Kubernetes access with session recording and audit trails.",
      "WireGuard encrypts all inter-node traffic with a minimal, auditable codebase.",
      "Works in air-gapped environments — no internet dependency for cluster communication.",
      "Single sign-on integration with your existing IdP (Okta, Azure AD, Keycloak).",
    ],
  },
];
