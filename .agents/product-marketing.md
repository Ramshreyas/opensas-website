# Product Marketing Context

*Last updated: 2026-06-28*

## Product Overview
**One-liner:** OpenSAS deploys a complete, self-hosted AI automation stack on your own infrastructure in 6–8 weeks.
**What it does:** OpenSAS is a consulting and deployment service that installs, configures, and hands over a full private AI stack on your hardware. After the engagement, your team owns and operates every component — no ongoing subscription to OpenSAS required.
**Product category:** Private / self-hosted AI infrastructure deployment
**Product type:** Consulting-led deployment service (not SaaS)
**Business model:** Fixed-fee consulting engagement (architecture + deployment + training). No per-seat, per-token, or license fees. Optional retainer post-handover.

## Target Audience
**Target companies:** Mid-market companies, 50–500 employees, in regulated industries or with strong data security requirements. Common verticals: financial services, healthcare, legal, consulting/professional services, platform engineering.
**Decision-makers:** CTO, VP of Engineering, Head of Platform/Infrastructure, IT Director. Compliance and legal teams are influencers (often the source of the blocking constraint).
**Primary use case:** Companies that want to use AI automation for internal workflows but cannot send proprietary data, customer PII, or regulated information to third-party AI APIs (OpenAI, Anthropic, Cohere, etc.).
**Jobs to be done:**
- Get AI automation running on sensitive/regulated data without compliance risk
- Break free from vendor dependency and unpredictable API pricing
- Compress what would be a 6–12 month internal build into 6–8 weeks

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| CTO / VP Eng | Delivering AI capabilities to the business; data security; team bandwidth | Legal/compliance blocking AI adoption; no in-house infrastructure expertise | Ship private AI in 6 weeks — team owns it outright |
| Compliance / Legal Influencer | Data residency; regulatory compliance; audit trails | Public AI APIs violate data handling policies | Zero data leaves the network; full audit logs |
| Senior Infrastructure Engineer | Technical soundness; ops burden; vendor lock-in | Would need months to build this from scratch | Full docs, runbooks, and templates handed over |

## Problems & Pain Points
**Core problem:** Companies want the productivity gains of AI but face a compliance blocker — their legal or compliance team won't allow sensitive data to be sent to third-party AI APIs. Alternatively, they're locked into a single provider and exposed to pricing/deprecation risk.
**Why alternatives fall short:**
- Public AI APIs (OpenAI, Anthropic): Data leaves the network, fails compliance
- Build in-house: 6–12 months of engineering time, requires specialized expertise most teams don't have
- Other self-hosted tools: Complex, no deployment support, no turnkey path to production
**What it costs them:** Delayed AI rollout while competitors accelerate; compliance violations risking fines and client trust; months of engineering time wasted on plumbing instead of product
**Emotional tension:** CTOs feel caught between pressure to "do AI" from leadership and blockers from legal/compliance. Frustration at watching peers ship AI while being held back.

## Competitive Landscape
**Direct:** No well-known competitor does exactly this (turnkey private AI stack deployment). Closest: boutique AI infrastructure consultancies — falls short on completeness of stack and documented handover.
**Secondary:** DIY self-hosting (build it yourself using open-source tools) — falls short due to time, expertise required, and lack of ongoing support.
**Indirect:** Continuing to use public APIs with "privacy agreements" — falls short because data still leaves the network, and compliance teams increasingly reject this.

## Differentiation
**Key differentiators:**
- Turnkey engagement — not a toolkit you assemble yourself
- Full handover — client owns the stack at the end, no subscription dependency
- 6–8 week deployment — compressed timeline vs. 6–12 months DIY
- Any open-source AI model — no vendor lock-in on models
- Runs in fully air-gapped environments
**How we do it differently:** We deploy, configure, and document everything ourselves, then train your team and hand over the keys — rather than selling you software and leaving you to figure it out.
**Why customers choose us:** Speed (6 weeks vs months), completeness (full stack not just components), and true ownership (no ongoing subscription, full source access).

## Objections

| Objection | Response |
|-----------|----------|
| "We can build this ourselves" | You could — in 6–12 months, if you have the right expertise. We compress it to 6 weeks because we've done it many times before. |
| "This sounds expensive" | One-time consulting fee, then zero recurring costs. Compare to 12 months of API fees plus engineering time to build. |
| "What if something breaks after you leave?" | We provide full docs, runbooks, and hands-on training. Optional retainer available, but most teams operate independently. |
| "We're not sure our infrastructure qualifies" | That's what the discovery call is for — we assess fit in the first session at no commitment. |

**Anti-persona:** Companies that are happy sending data to public AI APIs with no compliance constraints, or very small teams (<20 people) without a dedicated infrastructure person.

## Switching Dynamics
**Push:** Compliance team rejection of existing AI tools; fear of a public API data incident; frustration at OpenAI/Anthropic pricing increases.
**Pull:** 6-week timeline is fast enough to justify vs. DIY; full ownership with no subscription dependency; proven stack not experimental.
**Habit:** Team is already using public APIs and "it works for now"; switching feels risky and disruptive.
**Anxiety:** "What if the self-hosted stack is slower or less capable than GPT-4?"; "Will our team actually be able to maintain this?"

## Customer Language
**How they describe the problem:**
- "Our legal team won't let us put customer data into ChatGPT"
- "We're worried about data leaving our network"
- "We got a compliance audit and our AI usage didn't pass"
- "We're spending a fortune on API fees and have no control"
- "We want AI but we can't use the public cloud services"

**How they describe the solution:**
- "Private AI" or "self-hosted AI"
- "Running AI on our own servers"
- "AI that stays inside our network"
- "Our own ChatGPT" (informal shorthand)

**Words to use:** private, self-hosted, your infrastructure, your network, your team owns it, no data leaves, open-source, full audit trail, compliance-ready, turnkey
**Words to avoid:** sovereign (too political/confusing), agentic (jargon), vLLM / Qdrant / n8n / Teleport / LiteLLM / Langfuse / Helm / IaC / K8s (in hero/problem sections — OK in technical docs and FAQ), "open-weight" (use "open-source")

## Brand Voice
**Tone:** Direct, technical, confident. Not corporate-speak. Not startup-hype.
**Style:** Engineering-minded. Short sentences. Concrete over abstract. Show the outcome, then explain the mechanism.
**Personality:** Precise, trustworthy, no-nonsense. Like a senior engineer who's done this before and tells you exactly what to expect.

## Proof Points
**Metrics:**
- 6–8 weeks to production
- 0 bytes sent to third-party servers
- 100% open-source stack
- No per-token fees
**Customers:** (to be added as engagements complete)
**Value themes:**
| Theme | Proof |
|-------|-------|
| Speed | 6–8 weeks vs. 6–12 months DIY |
| Ownership | No subscription lock-in; full source handover |
| Compliance | Zero data leaves network; full audit trail |
| Cost | One-time fee + your own infra; no ongoing API costs |

## Goals
**Business goal:** Generate discovery call bookings from qualified engineering leads at mid-market regulated-industry companies.
**Conversion action:** "Schedule a discovery call" — the primary CTA on every page.
**Current metrics:** (to be established)
