/**
 * /technology/rag — Phase 7 · 3 of 5
 *
 * Brand accent: cyan (#22D3EE). Same accent as Infera and the
 * Intelligence & Research solution — RAG is what powers Infera's
 * deep-research briefs, Meetrix's chat-with-the-meeting, DocuMind's
 * chat-with-your-documents.
 *
 * Voice rule (D-40): technical concepts (RAG, vector embeddings,
 * chunking, retrieval, reranking) allowed; specific vendor product
 * names NOT exposed.
 */

import {
  FileSearch,
  Database,
  Layers,
  Filter,
  Quote,
  Gauge,
  RefreshCw,
  ShieldCheck,
  ScanLine,
  GitMerge,
  Network,
  Search,
  AlertTriangle,
  HelpCircle,
  Lock,
  MessageCircleQuestion,
  ScrollText,
  Award,
  TrendingDown,
  Clock,
} from "lucide-react";
import type { TechnologyContent } from "./types";

export const ragContent: TechnologyContent = {
  slug: "rag",
  name: "RAG Systems",
  shortLabel: "Retrieval",
  accent: "cyan",

  tagline: "Answers grounded in your data — never hallucinated.",

  positioning:
    "Retrieval-augmented generation is how a language model talks intelligently about your documents, your tickets, your meeting transcripts — without making things up. Infizia's RAG practice covers the full pipeline from ingestion through cited responses, with freshness controls, multi-tenant isolation, and quality monitoring built in.",

  pain: {
    kicker: "Why teams stall here",
    title: "Naive RAG looks easy and breaks at scale.",
    lede: "The retrieval layer is where most pilots die — irrelevant chunks, stale data, no citations.",
    items: [
      {
        icon: AlertTriangle,
        title: "Top-K returns irrelevant chunks",
        body: "Naive cosine similarity over poorly chunked text returns the wrong passage 40% of the time. The model dutifully answers the wrong question.",
      },
      {
        icon: HelpCircle,
        title: "No citations, so users cannot verify",
        body: "The model produces a confident-sounding answer with no link to the source. Users cannot tell what is grounded vs. hallucinated.",
      },
      {
        icon: Clock,
        title: "Stale data, no refresh strategy",
        body: "The index was built on Monday. By Friday the policies have changed but the chatbot is still citing last week's PDF. Nobody knows the index is stale.",
      },
      {
        icon: Lock,
        title: "Tenant data leaks into other tenants' answers",
        body: "Without per-tenant filtering at the retrieval layer, one customer's vector neighborhood overlaps another's. Confidential data ends up in answers it should not.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "From raw documents to cited answers.",
    lede: "Six capabilities that make RAG production-ready, not demo-ready.",
    items: [
      {
        icon: ScanLine,
        title: "Ingestion + parsing",
        body: "PDFs, DOCX, web pages, transcripts, tables, code — parsed with structure preserved. Tables stay tables, headings stay headings, code stays code.",
      },
      {
        icon: Layers,
        title: "Smart chunking strategies",
        body: "Semantic chunking with overlap, structure-aware splits, parent-child indexing. The chunk you retrieve is large enough to answer and small enough to embed well.",
      },
      {
        icon: Database,
        title: "Vector index + hybrid search",
        body: "Vector embeddings for semantic similarity, BM25 for keyword matching, reranker on top. Best result wins — not just the closest cosine.",
      },
      {
        icon: Filter,
        title: "Per-tenant isolation + filters",
        body: "Metadata filters at retrieval time — tenant, role, date range, source — so an Acme user never sees a NimbusCo chunk. Filtered before the model sees it.",
      },
      {
        icon: Quote,
        title: "Citations + grounding",
        body: "Every answer carries source pointers — page number, chunk ID, original document. Users can verify every claim with one click.",
      },
      {
        icon: Gauge,
        title: "Quality monitoring + freshness",
        body: "Per-query relevance scoring, faithfulness checks against retrieved context, drift detection on the index. You know when retrieval quality slips.",
      },
    ],
  },

  patterns: {
    kicker: "How we engage",
    title: "Four retrieval patterns we apply to RAG builds.",
    lede: "Each pattern fits a different content + question shape — choose one or combine them.",
    items: [
      {
        icon: Search,
        label: "Hybrid retrieval",
        tag: "Vector + keyword",
        body: "Cosine similarity over dense embeddings PLUS BM25 keyword search, with a reranker fusing both. Catches both semantic neighbors and exact-phrase matches.",
      },
      {
        icon: GitMerge,
        label: "Parent-child chunking",
        tag: "Index small, return big",
        body: "Embed small chunks for retrieval precision, return their larger parent passages for context. Best of both worlds.",
      },
      {
        icon: Network,
        label: "Multi-hop retrieval",
        tag: "Reason then retrieve",
        body: "For complex questions, the agent decomposes into sub-questions, retrieves for each, then composes the final answer. Beats single-shot retrieval on multi-document questions.",
      },
      {
        icon: RefreshCw,
        label: "Streaming refresh",
        tag: "Live index",
        body: "New documents land in the index within minutes of being added. Old documents auto-expire. Drift detection flags when retrieval quality starts slipping.",
      },
    ],
  },

  useCases: {
    kicker: "Where it ships",
    title: "Inside the products that answer questions from your data.",
    lede: "Three places where RAG is the difference between a generic chatbot and a useful tool.",
    items: [
      {
        icon: MessageCircleQuestion,
        title: "Chat with your meeting",
        body: "After an hour-long meeting, ask plain-English questions and get answers with timestamp citations from the transcript itself — never invented, always traceable.",
        poweredProducts: ["Meetrix", "EyeCON"],
      },
      {
        icon: FileSearch,
        title: "Research-archive chat",
        body: "Ask questions across all your past prospect briefs in plain English. Answers cite specific reports and page numbers from your team's own intelligence work.",
        poweredProducts: ["Infera"],
      },
      {
        icon: ScrollText,
        title: "Document-pile Q&A",
        body: "Invoices, contracts, prescriptions, lab reports indexed with structure-aware chunks. Compliance teams ask 'show me every contract with auto-renewal' and get exact passages.",
        poweredProducts: ["DocuMind", "Intellix"],
      },
    ],
  },

  outcomes: {
    kicker: "What changes when this works",
    title: "Confident answers. Auditable sources.",
    lede: "Outcomes Infizia teams have measured across RAG rollouts.",
    items: [
      {
        icon: Award,
        metric: "94%",
        body: "Faithfulness — answers grounded in retrieved chunks vs. invented. Measured on customer eval sets, not generic benchmarks.",
      },
      {
        icon: Quote,
        metric: "100%",
        body: "Of answers carry source citations users can click through to the original document, page, or transcript timestamp.",
      },
      {
        icon: TrendingDown,
        metric: "−62%",
        body: "Reduction in support escalations when chat-with-your-data replaces a generic chatbot — backed by per-query relevance.",
      },
      {
        icon: ShieldCheck,
        metric: "0 leaks",
        body: "Cross-tenant data leakage across audited deployments — every retrieval filtered by tenant, role, and date.",
      },
    ],
  },
};
