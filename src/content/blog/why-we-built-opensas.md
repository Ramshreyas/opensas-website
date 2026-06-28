---
title: "Why we built a private AI stack"
description: "Every production AI deployment we've seen forces a compromise between security, flexibility, and time-to-market. We built OpenSAS to eliminate the trade-off."
pubDate: 2026-06-28
author: "OpenSAS Team"
tags: ["philosophy", "architecture", "privacy"]
---

Every production AI deployment we've seen in the last two years forces a compromise.

You can use a managed API (OpenAI, Anthropic, Cohere) and get to market fast, but your data leaves your network. Every prompt, every document, every piece of proprietary code gets processed on someone else's servers. The compliance and legal teams have to sign off on data processing agreements, Business Associate Agreements, and a dozen other documents. Some organizations simply can't do it — regulated industries, defense contractors, healthcare providers.

Or you can build your own infrastructure. You pick vLLM for inference, Qdrant for vectors, n8n for workflows, Teleport for access. You spend a month integrating them, another month debugging edge cases, and another month writing runbooks. By the time you're production-ready, the business has already found a SaaS workaround.

We've been on both sides of this equation. We've been the engineers asked to "just make it work" with a third-party API. We've been the architects asked to integrate five open-source projects that weren't designed to work together.

OpenSAS is our answer to that compromise.

## The insight

The problem isn't that open-source AI components are immature — they're excellent. vLLM serves models faster than most managed APIs. Qdrant's vector search is best-in-class. n8n has 400+ connectors. Teleport is the gold standard for infrastructure access.

The problem is integration. These tools weren't designed as a platform. They were designed as individual tools. Making them work together as a cohesive stack requires deep expertise in each one — and most teams don't have that luxury.

OpenSAS provides the integration layer. The deployment scripts. The IAM mappings. The observability defaults. The security baselines. The runbooks. Your team gets a production-grade stack, not a collection of GitHub READMEs.

## The architecture, in one sentence

Five layers: a WireGuard/Teleport mesh at the bottom, infrastructure and model serving above it, data and privacy in the middle, application logic and orchestration above that, and user interfaces at the top.

Every layer is independently deployable. Don't need a chat UI? Skip Layer 4. Only need vector search for an existing application? Start with Layer 2. The stack composes, but it doesn't force you to adopt everything.

## What we're not

We're not a SaaS platform. We don't host anything. We don't see your data. We deliver a blueprint and deploy it in your environment — VPC, on-prem, air-gapped, bare metal, or cloud. At the end of the engagement, your team owns the stack entirely.

We're not a model provider. You choose the models — Llama, Mistral, Qwen, DeepSeek, fine-tuned variants, or any open-weight model vLLM supports. Swap them any time without changing application code.

We're not a consulting firm that hands you a PDF. We deliver runnable code. Helm charts, automated scripts, IaC templates, and workflow definitions. You don't get a slide deck — you get a production deployment.

## What's next

This post is the first of a series. Follow along for:

- Technical walkthrough of a Layer 0 → Layer 4 deployment
- Benchmark comparison: vLLM on your GPUs vs. managed API pricing
- Security audit walkthrough: what a CISO should look for in an AI stack
- Case study: deploying OpenSAS in an air-gapped environment

If you're evaluating infrastructure options for production AI workloads, [let's talk](/contact). We'll share our architecture assessment framework in the first conversation — no commitment required.
