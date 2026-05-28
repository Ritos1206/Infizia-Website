/**
 * Blockchain Development & ICO Listing service — content brief.
 *
 * Source of truth: corporate deck page 4 description —
 * "Powerful blockchain development solutions with secure, decentralized
 * technologies along with ICO listing."
 *
 * Brand accent: amber (gold, value, tokens). Bespoke hero idiom: Chain
 * Ledger Sequence — a horizontal sequence of cryptographic blocks with
 * hashes linking them, the newest block being mined live on the right.
 */

import {
  Activity,
  Banknote,
  Blocks,
  BookCheck,
  Building2,
  Cog,
  Coins,
  Compass,
  FileCode,
  FileSignature,
  Gauge,
  GitMerge,
  Globe,
  Hammer,
  HelpingHand,
  KeyRound,
  Layers,
  LineChart,
  Link2,
  Lock,
  Network,
  Package,
  Rocket,
  Scale,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Telescope,
  TrendingUp,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

import type { ServiceContent } from "./types";

export const blockchainContent: ServiceContent = {
  slug: "blockchain",
  name: "Blockchain Development & ICO Listing",
  shortLabel: "Blockchain",
  accent: "amber",

  tagline: "Decentralized infrastructure. Trusted execution. Listed on day one.",

  positioning:
    "Building on blockchain isn't about hype — it's about engineering trust into the data layer. Smart contracts that execute exactly as written, decentralized applications that don't depend on a single vendor's good behaviour, and tokens that represent value transparently across networks. Infizia delivers production-grade blockchain solutions — from custom dApps to smart-contract suites to ICO listing on major exchanges — with security audits, KYC/AML controls, and the regulatory diligence the modern token economy demands.",

  pain: {
    kicker: "What's slowing you down",
    title: "Token projects fail at the unglamorous parts.",
    lede: "The contract works in testnet. The whitepaper looks good. Then comes the audit, the listing process, the regulatory review — and most projects stall there.",
    items: [
      {
        icon: Lock,
        title: "Audits are an afterthought",
        body: "Smart contract bugs are permanent — once deployed, exploits drain wallets in minutes. Most teams plan the audit at the end, when fixes are expensive and listings are already promised.",
      },
      {
        icon: Scale,
        title: "Compliance is treated as paperwork",
        body: "KYC, AML, securities classification, jurisdictional rules — these aren't checklist items. Without them done correctly upfront, the listing application gets rejected and the launch slips by a quarter.",
      },
      {
        icon: GitMerge,
        title: "Off-chain integration is brittle",
        body: "The contract is just one piece. Wallet flows, oracle feeds, fiat on-ramps, custody integration — these break the dApp in production if they're stitched together by junior teams.",
      },
      {
        icon: ScrollText,
        title: "Tokenomics get drafted, not designed",
        body: "Vesting schedules, allocation breakdowns, utility design — most projects copy a template. The result: misaligned incentives, dump risk, and a token that nobody actually wants to hold.",
      },
    ],
  },

  capabilities: {
    kicker: "What we deliver",
    title: "Whitepaper to wallet to exchange.",
    lede: "End-to-end blockchain development — design, build, audit, deploy, list, and operate. We cover the full lifecycle, not just the engineering slice.",
    items: [
      {
        icon: FileCode,
        title: "Smart contract development",
        body: "Production-grade Solidity, Rust, and Move contracts — gas-optimised, upgradeable where needed, tested to industrial standards before a single dollar of TVL touches them.",
      },
      {
        icon: Blocks,
        title: "dApp & Web3 frontend",
        body: "Wallet-aware applications with full transaction lifecycle handling — connecting, signing, broadcasting, confirming, retry logic — built for users who don't care about the chain underneath.",
      },
      {
        icon: Coins,
        title: "Tokenomics & token design",
        body: "Allocation models, vesting schedules, utility design, and economic simulation — so the token you launch has actual demand mechanics rather than a copy-paste curve.",
      },
      {
        icon: ShieldCheck,
        title: "Security audits & remediation",
        body: "Static analysis, formal verification, manual review, and pre-deployment audits with detailed remediation. Every finding triaged and fixed before mainnet.",
      },
      {
        icon: Rocket,
        title: "ICO / IDO / IEO listing",
        body: "Listing-ready packaging — whitepaper, technical documentation, legal review, KYC/AML stack, and direct relationships with major centralized and decentralized exchanges.",
      },
      {
        icon: Workflow,
        title: "On-chain operations",
        body: "Post-launch — node operations, oracle uptime, multi-sig governance, treasury management, and incident response when the unexpected happens.",
      },
    ],
  },

  engagement: {
    kicker: "How we work together",
    title: "Four ways to start the engagement.",
    lede: "From a tokenomics review to a full launch — right shape for the right stage.",
    items: [
      {
        icon: Telescope,
        label: "Token & Project Audit",
        duration: "2–3 weeks",
        body: "Independent review of your tokenomics, smart contract design, and listing readiness — with a prioritised roadmap to get from current state to launch-ready.",
      },
      {
        icon: Hammer,
        label: "Build & Audit Project",
        duration: "Fixed scope",
        body: "End-to-end build of the smart contract suite, dApp, and supporting infrastructure — including third-party security audit and remediation cycle before deployment.",
      },
      {
        icon: Rocket,
        label: "ICO / IDO Launch",
        duration: "8–16 weeks",
        body: "Whitepaper, legal review, KYC/AML stack, exchange listings, marketing kit, and the full launch operations support up to and beyond TGE.",
      },
      {
        icon: HelpingHand,
        label: "On-Chain Retainer",
        duration: "Monthly",
        body: "Ongoing operations — node monitoring, oracle uptime, contract governance, treasury moves, incident response, and protocol upgrades.",
      },
    ],
  },

  useCases: {
    kicker: "Where we deliver",
    title: "Where decentralized actually unlocks something.",
    lede: "Blockchain works when trust, transparency, or decentralization is the actual product — not when it's a buzzword bolted onto a centralised app.",
    items: [
      {
        icon: Coins,
        title: "Token launches & ICO projects",
        body: "Utility tokens, governance tokens, security tokens — designed, audited, deployed, and listed across major centralized and decentralized exchanges.",
      },
      {
        icon: Globe,
        title: "Decentralized applications (dApps)",
        body: "DeFi protocols, NFT marketplaces, DAO tooling, on-chain games — full-stack Web3 applications with the user experience to match Web2 expectations.",
      },
      {
        icon: Building2,
        title: "Enterprise blockchain & supply chain",
        body: "Permissioned chains for supply-chain provenance, document notarisation, and inter-organisation settlement — where transparency between parties is the win.",
      },
    ],
  },

  outcomes: {
    kicker: "What changes",
    title: "Trustless execution. Listed on time. Audited end to end.",
    lede: "The numbers that matter on a Web3 launch aren't \"impressions\" — they're audit findings closed, time-to-listing, and TVL retained six months in.",
    items: [
      {
        icon: ShieldCheck,
        metric: "0 critical findings",
        body: "Pre-deployment audits target zero critical and zero high findings. Anything else gets remediated, re-tested, and re-audited until it does.",
      },
      {
        icon: Rocket,
        metric: "Listing on schedule",
        body: "Whitepaper, KYC/AML, legal review, and exchange relationships handled in parallel — so the listing date you announced is the listing date you hit.",
      },
      {
        icon: Lock,
        metric: "Audited treasury",
        body: "Multi-sig governance, role-based wallet access, and on-chain treasury operations with a clean audit trail — no surprise drains.",
      },
      {
        icon: TrendingUp,
        metric: "Sustained TVL",
        body: "Token design that holds — vesting schedules calibrated to reduce sell pressure, utility mechanics that drive actual demand past the launch hype window.",
      },
    ],
  },
};

/**
 * Sample chain blocks rendered in the bespoke ChainLedgerSequence hero.
 * Each block: number, hash preview, tx count, status. The newest block
 * is the right-most; one is "mining" (animated).
 */
export const BLOCKCHAIN_LEDGER_BLOCKS = [
  {
    n: "812,449",
    hashPreview: "0x4f2a…b1d7",
    txs: 184,
    status: "confirmed" as const,
  },
  {
    n: "812,450",
    hashPreview: "0x91c8…3e02",
    txs: 226,
    status: "confirmed" as const,
  },
  {
    n: "812,451",
    hashPreview: "0xa3f1…7e94",
    txs: 312,
    status: "confirmed" as const,
  },
  {
    n: "812,452",
    hashPreview: "0xc6b9…5d18",
    txs: 247,
    status: "mining" as const,
  },
] as const;

export const BLOCKCHAIN_BADGES = [
  { icon: Sparkles, label: "Smart contracts · audited" },
  { icon: KeyRound, label: "Multi-sig governance" },
  { icon: Wallet, label: "Wallet-grade UX" },
  { icon: Compass, label: "ICO · IDO · IEO listing" },
  { icon: FileSignature, label: "KYC · AML · legal review" },
  { icon: Layers, label: "Multi-chain · L1 + L2" },
  { icon: Link2, label: "Oracle · cross-chain bridges" },
  { icon: Banknote, label: "Treasury operations · clean trail" },
  { icon: Activity, label: "Mainnet · 24x7 monitored" },
  { icon: BookCheck, label: "Pre-deploy audit · 0 criticals" },
  { icon: Cog, label: "Upgradeable · proxy patterns" },
  { icon: Zap, label: "Gas-optimised · batched ops" },
  { icon: Gauge, label: "TVL retained past launch hype" },
  { icon: LineChart, label: "Token economics simulated" },
  { icon: Network, label: "Cross-chain interop" },
  { icon: Package, label: "Listing-ready package" },
] as const;
