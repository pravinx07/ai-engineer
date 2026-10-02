# 🚀 100x AI Engineer Journey

> **Goal:** Become a job-ready **AI Engineer** by building, testing, evaluating and deploying real AI applications—not by collecting courses.
>
> **Primary stack:** TypeScript · JavaScript · Node.js · Express · React · PostgreSQL · Redis · AWS  
> **Learning method:** Learn → Build → Break → Debug → Evaluate → Improve → Deploy

![Progress](https://img.shields.io/badge/Current%20Phase-01%20LLM%20Fundamentals-blue)
![Focus](https://img.shields.io/badge/Focus-Applied%20AI%20Engineering-purple)
![Stack](https://img.shields.io/badge/Primary%20Language-TypeScript-3178C6)

## 🎯 Mission and scope

I am learning to design and ship **production AI systems**: LLM-powered apps, semantic search, RAG, tool calling, AI agents, agentic workflows, evaluations, guardrails, observability and scalable deployment.

This is an **AI Engineer** roadmap, not an ML-research or deep-learning-engineer curriculum. I will learn enough about models to use and evaluate them well, without making training neural networks or advanced mathematics prerequisites. **Python, fine-tuning and model serving are optional extensions**, not blockers.

## 📍 Current status

| Item | Status |
| --- | --- |
| Current phase | **01 — LLM Fundamentals** |
| Current lesson | **Lesson 3 — First real LLM API call** |
| Completed | Project setup, token explorer, context-window demo |
| Next milestone | Make a successful model call, then build a reusable AI service |
| Main project | AI Chat Application (incremental build) |

**Legend:** `[x]` completed · `[ ]` not yet completed. Check off a task only after you can explain it and demonstrate working code.

### 📝 Learning log

| Date | What I learned / built | Evidence (commit, PR or demo) | Next action |
| --- | --- | --- | --- |
| — | Initialized TypeScript project | Add commit link | Tokenization |
| — | Built Token Explorer | Add commit link | Context window |
| — | Ran context-window demo | Add commit link | First LLM API call |
| YYYY-MM-DD | _Add your next session_ | _Add link_ | _Next task_ |

> Update the **Current status** and **Learning log** after each session. Use actual dates and commit links as you go.

---

## 🗺️ Roadmap at a glance

| Phase | Focus | Main deliverable | Status |
| --- | --- | --- | --- |
| 01 | AI and LLM fundamentals | Token Explorer + first LLM call | 🚧 In progress |
| 02 | LLM application engineering | Production-style AI Chat | ⬜ Not started |
| 03 | Embeddings and vector search | Semantic Search Engine | ⬜ Not started |
| 04 | RAG fundamentals | Chat With Your Documents | ⬜ Not started |
| 05 | Advanced RAG | Evaluated, improved RAG | ⬜ Not started |
| 06 | Tool calling | Tool-using AI Assistant | ⬜ Not started |
| 07 | AI agents | Research Agent | ⬜ Not started |
| 08 | Agentic workflows and memory | Customer Support Agent | ⬜ Not started |
| 09 | AI evaluation | Evaluation suite and dashboard | ⬜ Not started |
| 10 | Guardrails and AI security | Hardened AI applications | ⬜ Not started |
| 11 | Observability and optimization | Traced, cost-aware AI system | ⬜ Not started |
| 12 | Production AI / LLMOps | Deployed AI platform | ⬜ Not started |
| 13 | AI system design | Architecture case studies | ⬜ Not started |
| 14 | Capstone and career readiness | Enterprise AI Platform + portfolio | ⬜ Not started |
| 15 | Optional specialization | MCP, multimodal, Python, local models | ⬜ Optional |

> **Sequence, not a deadline:** Progress by completing exit criteria. Build the next feature as soon as the required concepts are clear.

---

## 🟢 Phase 01 — AI and LLM fundamentals

**Outcome:** Understand what happens between a prompt and a model response; make a real API call from TypeScript.

### Concepts

- [x] Set up Node.js, TypeScript and `tsx`.
- [x] Understand the basic idea of tokens and tokenization.
- [x] Build and run a Token Explorer.
- [x] Understand context windows and conversation history.
- [x] Build and run a context-window demo.
- [ ] Explain AI vs ML vs deep learning vs generative AI.
- [ ] Explain LLMs, foundation models, training vs inference.
- [ ] Understand input/output tokens, context budgets and token-based cost.
- [ ] Understand system instructions, user messages and prompt structure.
- [ ] Make a successful LLM API call using an SDK.
- [ ] Compare different prompts on the same task.
- [ ] Inspect API responses and token usage.
- [ ] Handle missing API keys and failed requests.

### Mini-project: LLM Fundamentals Lab

- [x] `token-explorer.ts` — inspect text and token IDs.
- [x] `context-demo.ts` — construct a conversation payload.
- [ ] `first-llm.ts` — send a real prompt and print the response.
- [ ] `prompt-lab.ts` — compare prompts and outputs.
- [ ] `usage-tracker.ts` — record input/output token usage and estimated cost using the provider's published pricing.

**Exit criteria:** I can explain the difference between tokens, context and persistent memory, and make/debug a real LLM request without copying a tutorial.

## 🟢 Phase 02 — LLM application engineering

**Outcome:** Turn one API call into a maintainable AI chat product.

### Learn and implement

- [ ] Model selection, SDK setup and environment configuration.
- [ ] System prompts, prompt templates and few-shot examples.
- [ ] Structured JSON output and schema validation.
- [ ] Streaming responses to a React client.
- [ ] Multi-turn chat and conversation history.
- [ ] Context truncation and summarization.
- [ ] Service/controller separation in Express.
- [ ] Timeouts, retries with backoff and error handling.
- [ ] Provider rate limits and application rate limiting.
- [ ] Usage metering and per-request cost tracking.
- [ ] Model fallback and basic model routing.
- [ ] Unit tests and integration tests.

### Project 01: AI Chat Application

**Stack:** React + TypeScript, Express, PostgreSQL, an LLM SDK; Redis when needed.

- [ ] V1 — send a prompt and display the response.
- [ ] V2 — stream tokens to the UI.
- [ ] V3 — persist conversations and messages.
- [ ] V4 — add authentication and per-user history.
- [ ] V5 — add structured output and input validation.
- [ ] V6 — add token usage, cost and latency metrics.
- [ ] V7 — add rate limits, retries and error states.
- [ ] V8 — write tests, README and deployment instructions.

**Exit criteria:** I can explain every layer of the request path and demonstrate a working multi-turn chat app.

## 🟡 Phase 03 — Embeddings and vector search

**Outcome:** Retrieve information by meaning, not only by exact keywords.

- [ ] Understand embeddings and embedding models.
- [ ] Understand vectors, dimensions and cosine similarity conceptually.
- [ ] Generate and compare text embeddings.
- [ ] Understand similarity thresholds and top-k retrieval.
- [ ] Learn PostgreSQL + `pgvector`.
- [ ] Store embeddings with document metadata.
- [ ] Implement semantic search and metadata filters.
- [ ] Compare semantic search with keyword search.

### Project 02: Semantic Search Engine

- [ ] Ingest a small document collection.
- [ ] Generate embeddings and store them in `pgvector`.
- [ ] Build a `POST /search` endpoint.
- [ ] Return ranked results and source metadata.
- [ ] Test paraphrases, irrelevant queries and duplicates.

**Exit criteria:** I can explain how an embedding search works and measure whether its results are relevant.

## 🟡 Phase 04 — RAG fundamentals

**Outcome:** Build an assistant that answers from supplied documents and cites its sources.

- [ ] Understand retrieval-augmented generation (RAG).
- [ ] Parse PDF, DOCX, TXT and Markdown files.
- [ ] Implement document chunking and chunk overlap.
- [ ] Build ingestion, embedding and indexing pipelines.
- [ ] Retrieve relevant chunks for a question.
- [ ] Construct a grounded prompt using retrieved context.
- [ ] Generate answers with document citations.
- [ ] Return an explicit unknown/insufficient-evidence answer when appropriate.
- [ ] Handle document updates and deletion.

### Project 03: Chat With Your Documents

- [ ] V1 — upload, extract and chunk documents.
- [ ] V2 — embed and index documents.
- [ ] V3 — retrieve context and answer questions.
- [ ] V4 — display source citations.
- [ ] V5 — isolate each user's documents and enforce access control.
- [ ] V6 — test missing, contradictory and irrelevant information.

**Exit criteria:** Answers are grounded in accessible documents and can be traced back to their sources.

## 🟡 Phase 05 — Advanced RAG

**Outcome:** Improve retrieval quality through experiments rather than guesses.

- [ ] Compare fixed, recursive and document-aware chunking.
- [ ] Implement metadata filtering.
- [ ] Understand sparse vs dense retrieval.
- [ ] Implement hybrid search.
- [ ] Add reranking.
- [ ] Try query rewriting and multi-query retrieval.
- [ ] Explore parent-child retrieval and context compression.
- [ ] Evaluate retrieval quality on a fixed test set.
- [ ] Compare quality, latency and cost across versions.

### Project upgrade: Production RAG

- [ ] Save a baseline and test dataset.
- [ ] Improve chunking and retrieval.
- [ ] Add hybrid search and reranking where useful.
- [ ] Measure each change against the baseline.
- [ ] Document trade-offs and known failure cases.

**Exit criteria:** I can show measured evidence that an RAG change helped—or explain why it did not.

## 🟠 Phase 06 — Function calling and tools

**Outcome:** Allow the model to request actions while the application controls execution.

- [ ] Understand tool/function schemas.
- [ ] Validate model-generated arguments.
- [ ] Implement the model → tool → result → model loop.
- [ ] Build read-only tools for APIs and databases.
- [ ] Handle tool errors, timeouts and retries.
- [ ] Enforce permissions and allowlisted operations.
- [ ] Require confirmation before consequential actions.
- [ ] Understand tool calling vs plain text generation.

### Project 04: Tool-Using AI Assistant

- [ ] Add a calculator tool.
- [ ] Add a weather or search API tool.
- [ ] Add an authorized database lookup tool.
- [ ] Add a write action behind explicit approval.
- [ ] Log tool calls and test invalid arguments.

**Exit criteria:** I can build and secure a complete tool-call cycle without relying on an agent framework.

## 🟠 Phase 07 — AI agents

**Outcome:** Build a bounded agent that can choose tools and perform multi-step tasks.

- [ ] Understand agents vs fixed workflows.
- [ ] Implement an agent loop from scratch.
- [ ] Add state, step limits and stopping conditions.
- [ ] Implement tool selection and execution.
- [ ] Add retries and failure recovery.
- [ ] Add human approval where needed.
- [ ] Learn agent tracing and basic agent evaluation.
- [ ] Explore a TypeScript agent SDK or LangGraph.js after understanding the underlying loop.

### Project 05: AI Research Agent

- [ ] Accept a research question.
- [ ] Search and read sources through approved tools.
- [ ] Collect evidence and track source URLs.
- [ ] Produce a structured report with citations.
- [ ] Handle unavailable or conflicting sources.
- [ ] Limit steps, time and cost.

**Exit criteria:** The agent completes a bounded task, cites evidence and fails safely when tools or sources fail.

## 🟠 Phase 08 — Agentic workflows and memory

**Outcome:** Orchestrate predictable business processes with selective agent decisions.

- [ ] Build routing and conditional workflows.
- [ ] Understand sequential vs parallel tool execution.
- [ ] Learn state machines and graph-based orchestration.
- [ ] Distinguish conversation history, summaries and persistent memory.
- [ ] Implement memory storage, retrieval and deletion.
- [ ] Implement checkpoints and resumable tasks.
- [ ] Add human-in-the-loop review.
- [ ] Understand when multiple agents add value—and when they do not.

### Project 06: AI Customer Support Platform

- [ ] Route FAQ questions to RAG.
- [ ] Route account questions to authorized read-only tools.
- [ ] Build a controlled ticket/refund-request workflow.
- [ ] Require approval for consequential operations.
- [ ] Add human handoff and workflow audit logs.

**Exit criteria:** I can justify when to use a deterministic workflow, an agent or a human approval step.

## 🔴 Phase 09 — AI evaluation

**Outcome:** Detect regressions and measure quality before shipping.

- [ ] Create representative golden test datasets.
- [ ] Evaluate retrieval relevance and recall at k.
- [ ] Evaluate answer relevance, groundedness and citation quality.
- [ ] Understand LLM-as-judge and its limitations.
- [ ] Evaluate tool selection, tool success and agent completion.
- [ ] Add deterministic checks where possible.
- [ ] Compare versions against a fixed baseline.
- [ ] Run evaluations in CI for important changes.

### Project 07: AI Evaluation Suite

- [ ] Build a dataset of realistic and adversarial questions.
- [ ] Record outputs, retrieved sources and tool traces.
- [ ] Score predefined quality dimensions.
- [ ] Display quality, latency and cost comparisons.
- [ ] Fail a test when a critical regression occurs.

**Exit criteria:** I can explain what my metrics mean, their limitations and how I use them to make release decisions.

## 🔴 Phase 10 — Guardrails and AI security

**Outcome:** Reduce risks from untrusted input, excessive permissions and sensitive data exposure.

- [ ] Understand prompt injection and indirect prompt injection.
- [ ] Treat retrieved documents and tool outputs as untrusted.
- [ ] Validate inputs and structured outputs.
- [ ] Enforce authorization outside the model.
- [ ] Apply least-privilege tool permissions.
- [ ] Prevent cross-user document and memory access.
- [ ] Add secret management and sensitive-data handling.
- [ ] Add request limits, budgets and safe failure paths.
- [ ] Test malicious prompts, documents and tool arguments.

**Project upgrade:** Red-team the RAG and agent projects; record vulnerabilities, fixes and regression tests.

**Exit criteria:** Security does not depend on the model simply obeying a prompt.

## 🔴 Phase 11 — Observability and optimization

**Outcome:** Understand what happened, why it failed and what it cost.

- [ ] Trace requests across API, retrieval, model and tools.
- [ ] Track latency, errors, token usage and cost.
- [ ] Log prompt/model versions without exposing secrets.
- [ ] Record user feedback and evaluation results.
- [ ] Compare model quality, speed and price.
- [ ] Implement caching where safe and useful.
- [ ] Optimize context size and retrieval depth.
- [ ] Set alerts and per-user/per-task cost budgets.

**Project upgrade:** Add an observability dashboard to the AI Chat, RAG and agent systems.

**Exit criteria:** I can diagnose a slow, expensive or incorrect response from traces and metrics.

## 🔥 Phase 12 — Production AI / LLMOps

**Outcome:** Deploy and operate a reliable AI application.

- [ ] Containerize the API with Docker.
- [ ] Configure CI/CD and automated tests.
- [ ] Deploy to AWS or another suitable platform.
- [ ] Manage secrets and environment configuration.
- [ ] Add authentication, authorization and rate limiting.
- [ ] Use PostgreSQL and Redis appropriately.
- [ ] Add queues/workers for long-running tasks.
- [ ] Implement timeouts, retries, circuit breakers and fallbacks.
- [ ] Set up health checks, logs, metrics and alerts.
- [ ] Plan scaling, backups, migrations and recovery.
- [ ] Define service-level objectives and cost budgets.

**Project upgrade:** Deploy the customer-support or enterprise RAG system with documented operations and a reproducible setup.

**Exit criteria:** The application can be deployed, monitored, debugged and recovered without manual guesswork.

## 🔥 Phase 13 — Advanced AI system design

**Outcome:** Explain architecture and trade-offs for real AI products.

- [ ] Design a scalable AI chat service.
- [ ] Design a multi-tenant enterprise RAG platform.
- [ ] Design an AI search system.
- [ ] Design a tool-using customer-support agent.
- [ ] Design a coding assistant with sandboxed tools.
- [ ] Design an asynchronous research-agent service.
- [ ] Compare model routing, caching and fallback approaches.
- [ ] Discuss reliability, latency, cost, security and observability for each design.

**Deliverable:** Architecture diagrams and short design documents with explicit assumptions, bottlenecks and trade-offs.

## 🏆 Phase 14 — Capstone and career readiness

### Flagship project: Enterprise AI Platform

Build one cohesive product combining the skills above:

- [ ] React/TypeScript frontend and Express API.
- [ ] Authentication, organizations and role-based access.
- [ ] Document ingestion and multi-tenant RAG.
- [ ] Search, reranking and source citations.
- [ ] Tool calling and bounded agent workflows.
- [ ] Human approval for consequential actions.
- [ ] Conversation history and managed memory.
- [ ] Evaluation datasets and regression tests.
- [ ] Guardrails, audit logs and data isolation.
- [ ] Token/cost/latency tracing and dashboards.
- [ ] Docker, CI/CD and cloud deployment.
- [ ] Architecture diagram, API docs and demo video.
- [ ] Document measured results and known limitations.

### Portfolio and interviews

- [ ] Pin 3–4 polished repositories on GitHub.
- [ ] Write READMEs with architecture, setup and demos.
- [ ] Explain RAG vs long-context prompting vs fine-tuning.
- [ ] Explain tool calling vs agents vs workflows.
- [ ] Explain retrieval metrics and answer evaluation.
- [ ] Explain security, reliability, latency and cost trade-offs.
- [ ] Practice AI-system-design interviews.
- [ ] Write impact-focused resume bullets using **measured** results only.

**Exit criteria:** I can demo, defend and maintain my projects—not just describe the frameworks used.

## 🟣 Phase 15 — Optional specializations

Choose these based on the jobs and products I want to build:

- [ ] MCP and interoperable tool integrations.
- [ ] Multimodal AI: images, audio and video.
- [ ] Python for AI ecosystem interoperability.
- [ ] Hugging Face and open-source model usage.
- [ ] Local model inference and model serving.
- [ ] Quantization, batching and inference optimization.
- [ ] Fine-tuning fundamentals (LoRA/QLoRA) when justified.
- [ ] Advanced multi-agent orchestration when necessary.

**Not required to start:** Advanced calculus, training large neural networks, CUDA or deep-learning research.

---

## 🧰 Working tech stack

| Layer | Preferred tools | Notes |
| --- | --- | --- |
| Language | TypeScript / JavaScript | Primary learning and implementation language |
| Backend | Node.js + Express | Reuse existing backend skills |
| Frontend | React + TypeScript | UI for projects and demos |
| LLM integration | Provider SDKs | Learn APIs directly before adding orchestration |
| Database | PostgreSQL | Users, conversations, documents and metadata |
| Vector search | `pgvector` | Start here; evaluate alternatives when needed |
| Cache / queues | Redis | Introduce when a project needs it |
| Agents | TypeScript SDK / LangGraph.js | Learn the agent loop first |
| Testing / evaluation | TypeScript tests + evaluation datasets | Measure behavior, not just code coverage |
| Deployment | Docker + AWS + CI/CD | Build on existing cloud knowledge |
| Optional | Python | Learn later for tooling that requires it |

> Frameworks change. **Concepts, architecture, evaluation and security are the durable skills.**

## 📂 Suggested repository structure

```text
AI-Engineer/
├── README.md
├── 01_llm_fundamentals/
│   ├── src/
│   │   ├── token-explorer.ts
│   │   ├── context-demo.ts
│   │   ├── first-llm.ts
│   │   ├── prompt-lab.ts
│   │   └── usage-tracker.ts
│   ├── package.json
│   └── .env.example
├── 02_ai_chat/
├── 03_semantic_search/
├── 04_document_rag/
├── 05_advanced_rag/
├── 06_tool_calling/
├── 07_research_agent/
├── 08_agent_workflows/
├── 09_evaluation/
├── 10_security/
├── 11_observability/
├── 12_production_ai/
├── 13_system_design/
├── 14_enterprise_ai_platform/
└── notes/
```

Create future folders **only when you reach them**. Never commit `.env`, API keys, personal data or generated secrets. Keep `.env.example` with placeholder values.

## 📋 Reusable session checklist

Copy this checklist into a GitHub issue or learning note for each lesson:

- [ ] Explain the concept in my own words.
- [ ] Build a minimal working example.
- [ ] Test a normal case and an edge case.
- [ ] Intentionally break it and debug the failure.
- [ ] Add appropriate validation and error handling.
- [ ] Write down one design trade-off.
- [ ] Commit the code with a meaningful message.
- [ ] Update the learning log and next milestone.

### Session note template

```md
## Session: YYYY-MM-DD — Topic

**Goal:**
**Concepts learned:**
**What I built:**
**What broke and how I fixed it:**
**Tests / evaluation:**
**Commit / demo:**
**What I still don't understand:**
**Next task:**
```

## 📚 Official learning resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js documentation](https://nodejs.org/en/learn)
- [OpenAI API documentation](https://platform.openai.com/docs/overview)
- [OpenAI Cookbook](https://cookbook.openai.com/)
- [Anthropic documentation](https://docs.anthropic.com/)
- [LangChain JavaScript documentation](https://js.langchain.com/docs/introduction/)
- [LangGraph.js documentation](https://langchain-ai.github.io/langgraphjs/)
- [pgvector](https://github.com/pgvector/pgvector)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/)
- [Docker documentation](https://docs.docker.com/)
- [AWS documentation](https://docs.aws.amazon.com/)

---

## ▶️ Immediate next action

**Phase 01 → Lesson 3:** Configure a provider API key securely, make the first successful LLM request from `src/first-llm.ts`, inspect the returned output and token usage, then commit the working experiment.

**Long-term rule:** I am not trying to learn every AI framework. I am learning to **build reliable AI products, prove their quality and ship them**. 🚀