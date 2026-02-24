import type { NavLink, ValueProp, FAQItem, RoleBenefit, Pillar, ResilienceDomain, ContactItem } from "@/types";

// ─── Shared / Global ─────────────────────────────────────────────────────────

export const SITE_NAME = "CyberEscape";

/** URL of the live SaaS application — update this when the app is deployed */
export const APP_URL = "https://app.cyberescape.io";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Benefits", href: "/benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

/** Appears at the bottom of every page */
export const CTA_BANNER = {
  heading: "Ready to Transform Your Security Training?",
  subtext:
    "Join organizations that have turned compliance into culture with gamified security awareness training.",
  primaryCta: "Start Free Trial",
  secondaryCta: "Contact Sales",
};

// ─── Home ─────────────────────────────────────────────────────────────────────

export const HERO = {
  badge: "CyberEscape",
  heading: "Level up your defense.",
  headingAccent: "One game at a time.",
  subheading:
    "A fresh approach that transforms security awareness into a fun, competitive experience your team actually wants to play.",
  ctaLabel: "Start your first mission free",
  trialNote: "14-day free trial",
};

export const LEADERBOARD_SECTION = {
  badge: "What We Do",
  title: "Turn security awareness into your team's favourite competition",
  body: "Forget the annual compliance slideshow. CyberEscape drops your team into hands-on security scenarios — competing, collaborating, and levelling up skills that will keep your company safe.",
  bullets: [
    { icon: "Zap",      text: "3–5 minute escape-room missions, not hour-long modules" },
    { icon: "Trophy",   text: "Live leaderboards that make security training genuinely competitive" },
    { icon: "BarChart3", text: "Real-time analytics that prove security ROI to leadership" },
  ],
};

export const VALUE_PROPS_SECTION = {
  badge: "Why CyberEscape",
  title: "Everything your security training is missing.",
  subtitle: "Built from the ground up for real engagement, measurable behaviour change, and results your board will actually care about.",
};

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "Gamepad2",
    title: "Engagement Over Compliance",
    description:
      "Escape-room gameplay replaces click-through slideshows. Employees actually want to play.",
  },
  {
    icon: "BarChart3",
    title: "Measurable Resilience Score",
    description:
      "6-domain security resilience score per employee, team, and org. Track improvement over time.",
    href: "/benefits#resilience-score",
  },
  {
    icon: "Users",
    title: "Real-Time Collaboration",
    description:
      "Built-in voice, chat, and live telemetry. Teams solve challenges together, facilitators observe in real time.",
  },
  {
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description:
      "Tenant-isolated data, RBAC, audit logs with 7-year retention, and GDPR compliance — built for regulated industries.",
  },
  {
    icon: "Target",
    title: "Actionable Analytics",
    description:
      "Risk heatmaps, watchlists, and per-user remediation recommendations turn training data into security decisions.",
  },
  {
    icon: "Route",
    title: "Campaign-Based Learning",
    description:
      "Multi-step campaigns unlock progressively, building skills sequentially across training scenarios.",
  },
];

export const CASE_STUDY = {
  label: "Case Study",
  titleSuffix: "Turning Compliance into Culture",
  company: "TechBridge Solutions",
  description:
    "How a financial services firm turned compliance dread into measurable security culture in 12 months.",
  problem:
    "TechBridge's annual cybersecurity compliance training was dreaded, clicked through, and forgotten. Phishing click rates sat at 34%, well above industry benchmarks.",
  solution:
    "They replaced their legacy LMS with short 3-5 minute scenario-based challenges, leaderboards, team competitions, and a points system with real incentives, delivered monthly instead of annually.",
  results:
    "After 12 months, phishing click rates fell to 8%, completion jumped from 55% to 94%, and incident reporting increased by 60% as employees engaged voluntarily rather than just meeting a deadline.",
  stats: [
    { label: "Phishing Click Rate", before: "34%", after: "8%", description: "reduction" },
    { label: "Incident Reporting", value: "60%", description: "increase" },
    { label: "Training Completion", before: "55%", after: "94%", description: "improvement" },
  ],
  closing:
    "The CISO was able to demonstrate measurable cultural change to the board, which helped secure budget for broader security investment the following year.",
};

// ─── Benefits (/benefits) ─────────────────────────────────────────────────────

export const BENEFITS_PAGE = {
  header: {
    badge: "Benefits",
    title: "Built for Every Role",
    subtitle: "From the CISO setting strategy to the employee playing their first game.",
  },
  resilienceScore: {
    badge: "Resilience Score",
    title: "What is Resilience Score?",
    subtitle:
      "A single, trackable number that reflects how well each employee, team, and organisation understands and applies cybersecurity principles.",
    explanation:
      "After every training challenge, CyberEscape analyses performance across six security domains and updates each participant's resilience score. Scores roll up to team and org level, giving leaders an accurate, real-time picture of security posture — not just completion rates.",
  },
};

export const RESILIENCE_DOMAINS: ResilienceDomain[] = [
  {
    icon: "Shield",
    name: "Identity Security",
    description: "Password hygiene, MFA usage, and account protection habits.",
  },
  {
    icon: "Brain",
    name: "Social Engineering",
    description: "Phishing recognition, pretexting awareness, and manipulation resistance.",
  },
  {
    icon: "Lock",
    name: "Data Protection",
    description: "Handling sensitive data, classification, and safe sharing practices.",
  },
  {
    icon: "Wifi",
    name: "Network Defense",
    description: "Safe browsing, VPN usage, and recognising network-based threats.",
  },
  {
    icon: "Search",
    name: "Threat Hunting",
    description: "Spotting indicators of compromise and reporting suspicious activity.",
  },
  {
    icon: "AlertCircle",
    name: "Incident Response",
    description: "Knowing when and how to escalate, contain, and report security incidents.",
  },
];

export const ROLE_BENEFITS: RoleBenefit[] = [
  {
    id: "ciso",
    title: "CISO",
    icon: "Shield",
    bullets: [
      "Org-wide resilience scores across 6 security domains",
      "Identify high-risk employees before incidents happen",
      "Report measurable security culture change to the board",
    ],
    headline: "Strategic visibility into your organisation's security posture",
    description:
      "Give security leadership the data needed to make decisions, justify budget, and demonstrate progress over time.",
    items: [
      "Resilience Score Dashboard aggregated across 6 domains: Identity, Social Engineering, Data Protection, Network Defense, Threat Hunting, and Incident Response",
      "Risk heatmap showing group-by-domain breakdowns at a glance",
      "Watchlist automatically flags high-risk employees and surfaces remediation recommendations",
      "Engagement analytics proving training ROI for board and budget presentations",
      "Compliance-ready audit logs with 7-year retention",
      "On-demand CSV and PDF reports covering sessions, campaigns, and resilience score trends",
    ],
    image: {
      src: "/images/seca-resilience-analytics.png",
      alt: "CyberEscape Resilience Analytics dashboard showing org health and domain averages",
    },
  },
  {
    id: "grc-manager",
    title: "GRC Manager",
    icon: "ClipboardCheck",
    bullets: [
      "Audit-ready logs with 7-year retention",
      "GDPR data export and right-to-erasure built in",
      "Track compliance coverage across every team",
    ],
    headline: "Compliance coverage you can prove, not just claim",
    description:
      "Built for regulated industries from day one, with the audit trail and controls to back it up.",
    items: [
      "Immutable append-only audit logs covering all user and admin activity",
      "7-year log retention to meet regulatory requirements",
      "GDPR Article 15 data export and right-to-erasure support",
      "Role-based access control for secure admin delegation",
      "Audit Extract and GDPR Export reports generated on demand",
      "Training completion tracking per user, team, and campaign for compliance reporting",
    ],
    image: {
      src: "/images/seca-user-management.png",
      alt: "CyberEscape user management interface showing roles, status, and admin controls",
    },
  },
  {
    id: "training-manager",
    title: "HR / Training Manager",
    icon: "Users",
    bullets: [
      "Replace annual slideshows with short monthly challenges",
      "Build progressive campaigns that unlock automatically",
      "Monitor live sessions and export results on demand",
    ],
    headline: "Training programmes that actually get completed",
    description:
      "Tools to design, schedule, and track security training at scale, without chasing employees to finish.",
    items: [
      "Campaign builder for multi-step training paths that unlock automatically on completion",
      "Create facilitated team sessions, solo practice, or peer group sessions from one dashboard",
      "Real-time monitoring with live telemetry during active sessions",
      "Visual content editor with a draft-to-publish workflow for managing training content",
      "One-click email invitations with delivery tracking per session",
      "Exportable session summaries and campaign progress reports",
    ],
    image: {
      src: "/images/seca-gamemodes.png",
      alt: "CyberEscape games browser showing available training scenarios",
    },
  },
  {
    id: "employee",
    title: "Employee",
    icon: "Gamepad2",
    bullets: [
      "Short escape-room challenges instead of hour-long slideshows",
      "Compete with teammates and climb the leaderboard",
      "Practice anytime with solo gamemodes",
    ],
    headline: "Security training that feels nothing like training",
    description: "Escape-room challenges that make security knowledge second nature.",
    items: [
      "Access a wide variety of themed, hands-on game modes",
      "Earn points, build streaks, and compete on leaderboards",
      "Built-in voice and chat for team coordination during gameplay",
      "Progressive campaigns that build skills from fundamentals to advanced scenarios",
      "Educational debriefs after every challenge explaining real-world security principles",
      "Solo practice mode available anytime without a facilitator",
    ],
    image: {
      src: "/images/data-lockdown-triple-alert-2.png",
      alt: "CyberEscape Data Lockdown game showing three active question panels and a timer",
    },
  },
];

// ─── Pricing (/pricing) ───────────────────────────────────────────────────────

export const PRICING_SECTION = {
  title: "Simple, Transparent Pricing",
  subtitle: "Free to start, transparent as you grow.",
  faqHeading: "Pricing Questions",
};

export const PRICING = {
  currency: "$",
  annualDiscount: 0.2,
  free: {
    maxUsers: 5,
    trialDays: 14,
  },
  pro: {
    monthly: 2,
  },
} as const;

export const PRICING_FEATURES = {
  free: [
    "Up to 5 users",
    "All training scenarios",
    "Team collaboration",
    "Basic analytics"
  ],
  pro: [
    "Unlimited users",
    "All training scenarios",
    "Advanced analytics & reporting",
    "Campaign builder",
    "RBAC & audit logs",
    "GDPR compliance tools",
  ],
  enterprise: [
    "Everything in Pro",
    "Custom SSO / SAML integration",
    "Dedicated customer success manager",
    "Custom training content",
    "Volume pricing",
  ],
} as const;

export const PRICING_FAQ: { question: string; answer: string }[] = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or switch between monthly and annual billing at any time. Annual discounts apply immediately when you switch.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "Your trial data is preserved for 30 days. You can upgrade to a paid plan anytime to continue where you left off.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes — for enterprise deployments with large user counts, contact our sales team to discuss custom pricing.",
  },
];

// ─── About (/about) ───────────────────────────────────────────────────────────

export const ABOUT_VISION = {
  badge: "Our Vision",
  title: "People Are the First Line of Defence",
  paragraph1:
    "Firewalls, endpoint tools, and SIEMs form the technical backbone of any security programme. But behind every phishing click, misconfigured file share, or accidental data leak is a person making a decision. Technology cannot fully compensate for uninformed or unprepared people. The most scalable investment an organisation can make is turning its workforce into a knowledgeable, alert, and resilient first line of defence.",
  paragraph2: `${SITE_NAME} is not a replacement for compliance training or your existing security stack. It is the behavioural layer that sits alongside them. Whether your team already uses a phishing simulator, an LMS, or a SIEM, ${SITE_NAME} adds what those tools cannot: hands-on practice, measurable resilience, and a training experience employees actually engage with.`,
};

export const ABOUT_APPROACH_HEADING = "Our Approach";

export const ABOUT_PILLARS: Pillar[] = [
  {
    icon: "Gamepad2",
    title: "Engagement First",
    description:
      "We believe security training should compete with the best games for attention — not the worst compliance checkboxes. Escape-room mechanics create genuine engagement that drives voluntary participation.",
  },
  {
    icon: "BarChart3",
    title: "Measurable Outcomes",
    description:
      "Every interaction generates data. Our 6-domain resilience score gives security leaders the metrics they need to prove ROI, identify risks, and drive continuous improvement.",
    link: { text: "6-domain resilience score", href: "/benefits#resilience-score" },
  },
  {
    icon: "Building2",
    title: "Enterprise Ready",
    description:
      "Built from day one for regulated industries. Multi-tenant isolation, RBAC, audit logs, and GDPR compliance aren't afterthoughts — they're foundational architecture decisions.",
  },
];

export const ABOUT_ADVISORY = {
  title: "Advisory Board",
  subtitle: "Experienced voices guiding our product, strategy, and growth.",
  advisors: [
    { name: "Advisor Name", role: "Cybersecurity Advisor" },
    { name: "Advisor Name", role: "Enterprise Strategy Advisor" },
    { name: "Advisor Name", role: "Compliance & Regulatory Advisor" },
    { name: "Advisor Name", role: "Learning & Development Advisor" },
    { name: "Advisor Name", role: "Go-to-Market Advisor" },
    { name: "Advisor Name", role: "Product Advisor" },
  ],
};

// ─── FAQ (/faq) ───────────────────────────────────────────────────────────────

export const FAQ_PAGE = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about CyberEscape.",
  categories: [
    { key: "general" as const, label: "General" },
    { key: "pricing" as const, label: "Pricing" },
    { key: "security" as const, label: "Security & Compliance" },
    { key: "technical" as const, label: "Technical" },
  ],
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is CyberEscape?",
    answer:
      "CyberEscape is an enterprise cybersecurity awareness training platform that replaces passive slide-based training with gamified escape-room-style challenges. Employees face realistic security scenarios in timed, team-based sessions that build real, measurable security skills.",
    category: "general",
  },
  {
    question: "How does gamified training work?",
    answer:
      "Instead of clicking through slideshows, employees participate in timed escape-room challenges where they classify data, respond to security scenarios, and spot threats — all while collaborating with teammates via built-in voice and chat. Points, streaks, and leaderboards drive engagement.",
    category: "general",
  },
  {
    question: "What security topics does the platform cover?",
    answer:
      "The platform covers 6 security domains: Identity Security, Social Engineering, Data Protection, Network Defense, Threat Hunting, and Incident Response. Training scenarios are designed to build practical skills across all these areas.",
    category: "general",
  },
  {
    question: "How does pricing work?",
    answer:
      "CyberEscape offers three tiers: a 14-day free trial for up to 5 users, a Pro plan at $2 per user per month (or $1.60 with an annual commitment), and Enterprise with custom pricing for large organisations.",
    category: "pricing",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The free trial supports up to 5 users for 14 days with full access to all training scenarios, team collaboration features, and basic analytics — no credit card required.",
    category: "pricing",
  },
  {
    question: "Are there discounts for large teams?",
    answer:
      "Yes — annual commitments on the Pro plan receive a 20% discount automatically. For enterprise deployments with large user counts, contact our sales team to discuss volume pricing and custom terms.",
    category: "pricing",
  },
  {
    question: "Is our data secure?",
    answer:
      "Absolutely. CyberEscape is built with enterprise-grade security: tenant-isolated data, role-based access control (RBAC), and immutable append-only audit logs with 7-year retention. The platform is designed for regulated industries.",
    category: "security",
  },
  {
    question: "Is CyberEscape GDPR compliant?",
    answer:
      "Yes. The platform includes full GDPR Article 15 data export and right-to-erasure support. All data processing is transparent, and compliance tools are built directly into the admin dashboard.",
    category: "security",
  },
  {
    question: "What are the system requirements?",
    answer:
      "CyberEscape runs entirely in the browser — no software installation required. It works on all modern browsers (Chrome, Firefox, Safari, Edge) on desktop and tablet devices.",
    category: "technical",
  },
  {
    question: "Can CyberEscape integrate with our existing systems?",
    answer:
      "The platform is designed as a standalone SaaS solution with enterprise SSO support. Contact us to discuss specific integration requirements for your organization.",
    category: "technical",
  },
];

// ─── Contact (/contact) ───────────────────────────────────────────────────────

export const CONTACT_PAGE = {
  title: "Get in Touch",
  intro: "Have questions about CyberEscape? Want to see a demo? We'd love to hear from you.",
  contacts: [
    {
      icon: "Mail",
      label: "Email Us",
      value: "contact@cyberescape.io",
    },
    {
      icon: "MessageSquare",
      label: "General Inquiries",
      value: "We typically respond within 24 hours.",
    },
  ] satisfies ContactItem[],
};
