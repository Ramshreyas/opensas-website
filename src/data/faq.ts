export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Who is OpenSAS for?",
    answer:
      "OpenSAS is built for engineering teams at mid-sized companies — typically 50 to 500 people — who need to run AI automation on data they can't send to a third-party service. Our most common clients are in financial services, healthcare, legal, and professional services, or are platform engineering teams building internal AI tooling. If your compliance team has raised concerns about AI data exposure, or you're tired of being subject to unpredictable API pricing changes, we're probably a good fit.",
  },
  {
    question: "What does it cost?",
    answer:
      "You pay a fixed fee for the consulting engagement — architecture design, deployment, and training. There are no per-seat, per-token, or model license fees. Every component in the stack is open-source. Your only ongoing costs are your own servers, GPUs, and storage — infrastructure you already budget for. Schedule a discovery call and we'll scope a quote based on your specific environment.",
  },
  {
    question: "What infrastructure do I need to get started?",
    answer:
      "For a production deployment you need a Kubernetes cluster (3 or more servers), at least one NVIDIA GPU (A10G or better) to run AI models locally, and sufficient storage for model files and your document database. We assess your specific workload during the discovery call and right-size everything. A single-server setup is possible for evaluation and proof-of-concept work.",
  },
  {
    question: "Can I deploy OpenSAS in a fully offline environment?",
    answer:
      "Yes. The entire stack can run with zero internet connectivity. All networking is handled by an open-source mesh layer, container images are pre-loaded to a local registry, and model files can be transferred via physical media if your environment requires it. We've deployed in air-gapped environments with strict no-internet policies.",
  },
  {
    question: "Which AI models does OpenSAS support?",
    answer:
      "Any open-source AI model — including Llama 3, Mistral, Mixtral, Qwen, DeepSeek, Phi, Gemma, and hundreds more. A compatibility layer lets you swap models without changing your application code. Fine-tuned models work through the same pipeline.",
  },
  {
    question: "How long does the deployment take?",
    answer:
      "The standard engagement runs 6–8 weeks. Weeks 1–2: architecture design and security review. Weeks 3–4: full stack deployment in your environment. Weeks 5–6: AI workflow development, integration testing, and team handover. Weeks 7–8: documentation, hands-on training, and production go-live support.",
  },
  {
    question: "What happens after handover? Do we have to stay on retainer?",
    answer:
      "No forced subscription. Your team owns and operates the stack independently after handover. We provide comprehensive documentation and hands-on training so your engineers can manage it themselves. Optional retainers are available for new workflow development, performance tuning, and version upgrades — entirely your choice.",
  },
  {
    question: "Does OpenSAS work with our existing cloud infrastructure?",
    answer:
      "Yes. The deployment scripts work on any standard Kubernetes cluster — including Amazon EKS, Azure AKS, Google GKE, and on-premises distributions. There are no cloud-specific dependencies. We recommend bare-metal or dedicated servers for GPU cost efficiency, but managed Kubernetes works if your team prefers it.",
  },
];
