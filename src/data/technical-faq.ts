export interface FAQItem {
  question: string;
  answer: string;
}

export const technicalFaqItems: FAQItem[] = [
  {
    question: "What are the minimum deployment requirements?",
    answer:
      "For a production deployment: a Kubernetes cluster (3+ nodes), at least one NVIDIA GPU (A10G or better — vLLM requirement for LLM serving), sufficient NVMe storage for model weights and vector indices, and a private network accessible to all nodes. We'll assess your specific workload during the discovery call and right-size the infrastructure. A single-node setup is possible for development and evaluation purposes.",
  },
  {
    question: "Can I deploy OpenSAS in an air-gapped environment?",
    answer:
      "Yes. The entire stack operates without any internet connectivity. WireGuard handles encrypted inter-node mesh networking. Container images are pre-loaded to a local registry (Harbor or your existing registry). Model weights are transferred via physical media or internal file transfer if needed. Teleport can operate in direct-access mode (no proxy required). We've deployed in environments with strict no-internet policies including government and financial sector air-gapped clusters.",
  },
  {
    question: "Which LLM models does OpenSAS support?",
    answer:
      "Any open-weight model supported by vLLM — this includes Llama 2/3, Mistral, Mixtral (MoE), Qwen 2.5, DeepSeek V3/R1, Phi-3/4, Gemma 2, and hundreds more from Hugging Face. LiteLLM provides a unified OpenAI-compatible API gateway, so you can swap underlying models without changing any application code. Fine-tuned models (LoRA adapters or full fine-tunes) are supported through the same vLLM serving pipeline.",
  },
  {
    question: "How does vLLM compare to other model servers?",
    answer:
      "vLLM uses PagedAttention for GPU memory management, enabling significantly higher throughput than naive Transformers serving — typically 2–10x depending on workload. It supports continuous batching, tensor parallelism across multiple GPUs, and speculative decoding. For most enterprise inference workloads (documents, code, chat), a single A100/H100 GPU handles tens to hundreds of concurrent requests. We benchmark your specific workload during the engagement and tune serving parameters accordingly.",
  },
  {
    question: "What's the secrets management approach?",
    answer:
      "OpenBao (a community fork of HashiCorp Vault, Apache 2.0 licensed) manages all secrets, API keys, certificates, and encryption material. Dynamic secrets are generated per-service with TTLs, so a compromised container never exposes long-lived credentials. Transit encryption is available for encrypting data at rest. OpenBao integrates with Kubernetes service accounts for automatic secret injection — applications never see secrets in environment variables or config files.",
  },
  {
    question: "How does the vector search / RAG pipeline work?",
    answer:
      "Qdrant handles dense vector search for retrieval-augmented generation workloads. Documents are chunked, embedded using a locally-hosted embedding model (no external API calls), and stored with their vectors in Qdrant collections. At query time, the agent embeds the user query, retrieves the top-k most relevant chunks, and passes them as context to the LLM. pgvector on PostgreSQL is available as an alternative for teams that prefer keeping vectors alongside relational data. Both support metadata filtering for access-control-aware retrieval.",
  },
  {
    question: "What does the Teleport setup look like?",
    answer:
      "Teleport provides identity-aware access to all cluster resources: SSH to nodes, Kubernetes API, databases, and internal web applications — all through a single access plane with MFA enforcement. Every session is recorded and auditable. Integration with your existing identity provider (Okta, Azure AD, Keycloak, or any OIDC/SAML provider) means engineers use their existing credentials. Teleport can run in high-availability mode with a replicated auth server. The audit log integrates with your existing SIEM.",
  },
  {
    question: "How does observability work across the stack?",
    answer:
      "OpenTelemetry instrumentation is built into every layer. Traces, metrics, and logs flow into a Grafana stack (Grafana + Prometheus + Loki + Tempo). Pre-built dashboards cover: GPU utilization and memory pressure, token throughput and latency per model, per-user token spend, workflow execution traces, and infrastructure health. Langfuse provides LLM-specific observability — prompt/response logging, latency tracking, and eval integrations — for debugging and cost attribution.",
  },
  {
    question: "How does high availability and disaster recovery work?",
    answer:
      "The stack is designed for Kubernetes-native HA. vLLM supports multi-GPU and multi-node serving with automatic failover. Qdrant supports distributed mode with replication factor ≥ 2. PostgreSQL runs with streaming replication (Patroni for automatic failover). MinIO uses erasure coding across nodes for data durability. Teleport has an HA auth server configuration. We provide Velero backup configuration templates and runbooks for recovery procedures. RPO/RTO targets depend on your storage tier — we set these during the architecture assessment.",
  },
  {
    question: "What's the IaC and deployment approach?",
    answer:
      "The stack is deployed via Helm charts, with a top-level umbrella chart for coordinated upgrades. Kustomize overlays handle environment-specific configuration. Terraform/OpenTofu modules are available for the underlying infrastructure provisioning (VMs, networking, GPU allocation). All Helm values, secret references, and cluster configurations are committed to a GitOps repo (Argo CD or Flux — your choice) so every deployment is declarative and auditable. We leave the GitOps pipeline configured and running — your team manages it going forward.",
  },
  {
    question: "Can I use OpenSAS with cloud-managed Kubernetes (EKS, AKS, GKE)?",
    answer:
      "Yes. The Helm charts and deployment scripts are tested on EKS, AKS, GKE, OpenShift, and on-premises distributions (k3s, RKE2, Talos). There are no cloud-specific dependencies. GPU node pools work with managed node groups on all major providers. We recommend bare-metal or GPU-dedicated VPS instances for cost efficiency on inference workloads, but managed Kubernetes is fully supported if your team prefers it.",
  },
  {
    question: "How does multi-tenancy work for MSPs or consulting firms?",
    answer:
      "Tenant isolation is enforced at multiple layers: Kubernetes namespaces provide resource quota isolation; Qdrant collections are per-tenant with namespace-scoped access controls; Teleport roles map to per-client access boundaries; MinIO buckets are per-tenant with IAM policies enforced at the object store level. Clients get dedicated UI endpoints (LibreChat instances) with their own auth. The overhead per tenant is low — a single cluster can serve 20–50 isolated tenants depending on workload.",
  },
  {
    question: "What's the n8n setup and how does workflow automation integrate with the LLM layer?",
    answer:
      "n8n runs self-hosted in your cluster with a PostgreSQL backend for workflow state. It connects to the LLM layer via the LiteLLM gateway (OpenAI-compatible endpoint), so any n8n AI node works out of the box. MCP (Model Context Protocol) servers extend the LLM's reach to internal systems — git repos, databases, ticketing systems, observability stacks — without custom code. For complex agent logic that outgrows n8n, FastAPI microservices integrate with the same LiteLLM endpoint. All n8n executions produce OpenTelemetry traces.",
  },
];
