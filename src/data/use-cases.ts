export interface UseCase {
  title: string;
  industry: string;
  summary: string;
  detail: string;
  outcomes: string[];
}

export const useCases: UseCase[] = [
  {
    title: "AI Automation for Regulated Industries",
    industry: "Financial Services / Healthcare / Legal",
    summary:
      "Deploy AI agents that review communications, flag compliance issues, and draft regulatory filings — on data that never leaves your network.",
    detail:
      "Your AI models run inside your own environment. Every document stays behind your firewall. Every action is logged and auditable. No data touches a third-party server at any point in the process.",
    outcomes: [
      "Zero data leak — all AI inference runs inside your own infrastructure",
      "Full audit trail of every agent action for regulatory review",
      "Compliant with GDPR, HIPAA, and SOC 2 data residency requirements",
    ],
  },
  {
    title: "AI Developer Tools That Keep Your Code Private",
    industry: "Platform Engineering / Software Development",
    summary:
      "Give your engineers AI-powered code review, documentation generation, and incident response — without proprietary source code ever leaving your network.",
    detail:
      "Your AI tooling connects directly to your internal repos, monitoring systems, and ticketing tools. Engineers use the tools they already know — Slack, their IDE, the CLI — with AI assistance built in. Your source code never leaves your network.",
    outcomes: [
      "Proprietary source code stays entirely inside your infrastructure",
      "Engineers use familiar tools with AI augmentation, no workflow disruption",
      "Swap AI models without changing any application code",
    ],
  },
  {
    title: "Isolated AI Environments Per Client",
    industry: "Consulting / Professional Services / MSPs",
    summary:
      "Give every client their own dedicated AI environment — with strict data isolation — all running on your hardware.",
    detail:
      "Each client's data, workflows, and AI models are completely isolated from every other client. One infrastructure pool, zero cross-tenant exposure. Clients get dedicated interfaces and access controls without separate infrastructure costs.",
    outcomes: [
      "Strict client isolation — no cross-tenant data exposure, ever",
      "Single infrastructure pool serving multiple clients efficiently",
      "Clients get dedicated interfaces and access controls at no extra cost",
    ],
  },
];
