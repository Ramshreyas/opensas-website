export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What are the minimum deployment requirements?",
    answer:
      "For a production deployment, you need a Kubernetes cluster (3+ nodes), at least one NVIDIA GPU (A10G or better — vLLM requirement), and sufficient storage for your model weights and vector database. We'll assess your specific workload during the discovery call and right-size the infrastructure. A single-node setup is possible for development/evaluation.",
  },
  {
    question: "Can I deploy OpenSAS in an air-gapped environment?",
    answer:
      "Yes. The entire stack can operate without any internet connectivity. WireGuard handles mesh networking, container images are pre-loaded via a local registry, and model weights are transferred via physical media if needed. Teleport can operate in proxy mode or direct mode depending on your network topology.",
  },
  {
    question: "Which models does OpenSAS support?",
    answer:
      "Any open-weight model supported by vLLM — Llama 2/3, Mistral, Mixtral, Qwen, DeepSeek, Phi, Gemma, and hundreds more from Hugging Face. LiteLLM adds a compatibility layer so you can swap models without changing your application code. Fine-tuned models are supported via the same pipeline.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "The initial engagement is 6-8 weeks. Week 1-2: architecture assessment and security review. Week 3-4: infrastructure provisioning and stack deployment in your environment. Week 5-6: workflow development, integration testing, and team handover. Week 7-8: documentation, training, and go-live support.",
  },
  {
    question: "What happens after handover? Can your team support us?",
    answer:
      "Your team owns and operates the stack independently post-handover. We provide comprehensive documentation and hands-on training during the engagement. Optional retainers are available for workflow development, performance optimization, and version upgrades — but there's no forced subscription.",
  },
  {
    question: "What's the pricing model?",
    answer:
      "You pay for the consulting engagement (architecture, deployment, training). There are no per-seat, per-token, or per-model license fees — every component is open-source or open-core. Your only ongoing costs are your infrastructure (VPS, GPU, storage) which you already budget for. Schedule a discovery call for a quote tailored to your environment.",
  },
  {
    question: "How does OpenSAS handle high availability and disaster recovery?",
    answer:
      "The stack is designed for K8s-native HA. vLLM supports multi-GPU and multi-node serving with automatic failover. Qdrant and PostgreSQL support replication. MinIO uses erasure coding. Teleport provides HA control plane. Your SRE team manages backup/restore through standard K8s tooling (Velero, etc.) — we provide the configuration templates.",
  },
  {
    question: "Can I use OpenSAS with cloud-managed K8s (EKS, AKS, GKE)?",
    answer:
      "Absolutely. The Helm charts and deployment scripts work on any CNCF-compliant Kubernetes — including EKS, AKS, GKE, OpenShift, and on-prem distributions. The stack has no cloud-specific dependencies. We recommend bare-metal or VPS for GPU cost efficiency, but managed K8s works if your team prefers it.",
  },
];
