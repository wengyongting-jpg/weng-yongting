// V5 项目详情数据 — 7 区块结构。
// 旧的 src/data/projects.js (8-section) 仍被 Work.jsx 列表页使用；
// CaseStudy.jsx 详情页只读这个文件。
//
// 内容来源：c:\Users\Administrator\Desktop\新建文件夹\_extract\ 下的 JSON/txt
// 标注 [confirm] 的字段表示审计发现存疑，等待用户确认后替换。
//
// 幻灯片 PNG 由 _extract/render_slides.py 生成（1600x900），
// 存放在 public/projects/<slug>/slides/slide-NN.png。
// 演示稿只以图片形式展示，不提供 PPT/PDF 下载（deck PDF 已移除；
// mm118 的论文 PDF 除外保留）。

// 生成幻灯片 URL 数组的辅助函数
// 必须拼上 BASE_URL：本地 dev 为 "/"，GitHub Pages 为 "/weng-yongting/"，
// 否则部署后图片会解析到域名根而 404（naturalWidth=0）。
function makeSlides(slug, count) {
  const base = import.meta.env.BASE_URL;
  return Array.from({ length: count }, (_, i) =>
    `${base}projects/${slug}/slides/slide-${String(i + 1).padStart(2, "0")}.png`
  );
}

export const caseDetailProjects = [
  // =========================================================
  // 校园经历 01 — IMMS 2025 Publications（两篇论文）
  // 用户确认：参与两篇论文的实证建模、数据分析、理论框架构建，
  // 并在 IMMS 2025 展示研究成果。页码：论文一 p.138，论文二 p.308。
  // =========================================================
  {
    slug: "mm118-paper",
    number: "01",
    title: "IMMS 2025 Publications",
    titleEn: "AI & Firm Performance · Two Papers",
    shortName: "IMMS Papers",
    eyebrow: ["IMMS 2025", "PUBLICATIONS", "OCT 2025"],
    subtitle:
      "My earliest research on AI — two co-authored empirical papers in the IMMS 2025 proceedings (pp. 138 & 308) on when AI software and AI investment actually translate into organizational growth and market competitiveness. This is where my interest in AI began.",
    badges: [
      { type: "role", text: "► Co-author · Empirical Modelling & Data Analysis" },
      { type: "role", text: "► Presenter · IMMS 2025" },
      { type: "neutral", text: "2 proceedings papers" },
    ],
    // 结构化论文列表 — 详情页 hero 下方与 Campus 页引用块共用
    papers: [
      {
        title:
          "The Impact of Human–Machine Interaction in AI Software on Organizational Growth: The Mediating Role of Managerial Efficiency",
        venue: "IMMS 2025 Proceedings",
        pages: "p. 138",
        note: "Paper 1 · Growth pathway: HMI in AI software → managerial efficiency → organizational growth (mediation model)",
      },
      {
        title:
          "AI Investment and Market Competitiveness: The Roles of Human–Machine Interaction and Production Efficiency",
        venue: "IMMS 2025 Proceedings",
        pages: "p. 308",
        note: "Paper 2 · Competitiveness pathway: AI investment → market competitiveness, carried by human–machine interaction and production efficiency (moderation model)",
      },
    ],
    context: {
      heading: "Early AI research — where my interest in AI products started",
      body:
        "Before building AI products, I studied them. These two papers were my first deep engagement with AI — asking a question that still drives my product work today: when does AI actually convert into real outcomes? Paper 1 asks whether human–machine interaction in AI software drives organizational growth, modelling managerial efficiency as the mediating mechanism. Paper 2 asks whether AI capital expenditure translates into market competitiveness, decomposing the effect into human–machine interaction and production efficiency channels. This research shaped how I think about AI products: not 'can we add AI', but 'what mechanism makes AI valuable'.",
      role: "Co-author · empirical modelling, data analysis, and theoretical framework construction on both papers; presented the research at IMMS 2025",
      stack: "Python · Stata · Panel regression · Mediation & moderation models · Theoretical framework design",
    },
    problem: {
      heading: "The question that started it all: is AI's value a black box?",
      body:
        "My entry point into AI was a frustration with how the topic was discussed — 'AI investment correlates with better outcomes', without anyone modelling the mechanism that carries the effect. Two gaps became my research questions: on the management side, no mediation pathway linking AI software use to organizational growth through managerial efficiency; on the competitiveness side, no decomposition showing whether human–machine interaction or production efficiency carries the effect.",
      bullets: [
        "AI investment does not mechanically translate into competitiveness — the literature is mixed.",
        "Managerial efficiency as a mediator between AI software and organizational growth was rarely quantified.",
        "Human–machine interaction was usually narrative, not a measurable moderator or mediator.",
        "Without mechanism decomposition, firms cannot tell which AI investment to prioritise.",
      ],
    },
    approach: {
      heading: "Two complementary empirical models on one research thread",
      body:
        "Paper 1 estimates a mediation model: human–machine interaction in AI software → managerial efficiency → organizational growth, testing the indirect effect through the mediator. Paper 2 builds a firm-level moderation model isolating (1) the direct ROI of AI capital, (2) efficiency spillover into production, and (3) human–machine interaction as a moderator of market competitiveness. Both use panel regression with appropriate fixed effects.",
      steps: [
        "Literature Review",
        "Hypothesis Design",
        "Mediation & Moderation Modelling",
        "Empirical Analysis & Presentation",
      ],
      tags: ["Panel regression", "Mediation analysis", "Moderation analysis", "Manufacturing data", "IMMS 2025"],
    },
    results: {
      heading: "Two proceedings papers — and a lasting research-driven view of AI",
      body:
        "Both papers were accepted into the IMMS 2025 proceedings — Paper 1 on organizational growth (p. 138) and Paper 2 on market competitiveness (p. 308) — and the research was presented at the conference. More importantly, this early work set the direction for everything after: the mechanism-thinking behind these models is the same lens I now apply when designing AI products — always asking which mechanism carries the value, and how to measure it.",
      metrics: [
        { value: "2", label: "Proceedings papers", note: "IMMS 2025 · pp. 138 & 308" },
        { value: "2", label: "Mechanism models", note: "Mediation · Moderation" },
        { value: "1", label: "Conference presentation", note: "Delivered at IMMS 2025" },
      ],
    },
    materials: {
      heading: "Paper 2 · Author presentation (19 slides)",
      body:
        "The author presentation for the AI Investment & Market Competitiveness paper, shown as an image gallery.",
      slides: makeSlides("mm118-paper", 19),
    },
  },

  // =========================================================
  // 02 — 智一数科 (Competition · Challenge Cup 2024)
  // =========================================================
  {
    slug: "zhiyi",
    number: "02",
    title: "Zhiyi Digital",
    titleEn: "Digital Marketing & Big-Data Cloud Platform",
    shortName: "Zhiyi Digital",
    eyebrow: ["CHALLENGE CUP", "COMPETITION", "2024"],
    subtitle:
      "A bilingual RAG co-pilot built for a regional data-services provider — an AI+SaaS layer combining personalised marketing-content generation, big-data analytics, and short-video ad delivery.",
    badges: [
      { type: "award", text: "◆ National Silver" },
      { type: "role", text: "► Tech Lead" }, // [confirm] user not named in deck
      { type: "neutral", text: "5-person team" },
      { type: "neutral", text: "6-month build" },
    ],
    context: {
      heading:
        "Backing a regional data-services provider with a bilingual proposal co-pilot",
      body:
        "Zhiyi Digital provides one-stop digital marketing and big-data cloud services for the beauty and fast-moving consumer goods sectors. The Challenge Cup entry proposed an AI+SaaS layer combining personalised marketing-content generation, big-data analytics, and short-video ad delivery, with ByteDance as the upstream platform partner.",
      role: "Tech Lead · 5-person team · responsible for AI module + RAG pipeline", // [confirm] user's actual role — not named in deck
      stack: "React · FastAPI · pgvector · LangChain · Gemini 2.5 Flash", // [confirm] actual stack — placeholder
    },
    problem: {
      heading: "Ad clients struggle to convert raw engagement into measurable sales",
      body:
        "Research across 200+ companies in the digital marketing industry surfaced four pain points. They cluster around cost, targeting, and creative iteration speed.",
      bullets: [
        "<b>Customer acquisition cost</b> rising year-over-year — engagement no longer converts cheaply.",
        "<b>Generic audience targeting</b> — beauty / FMCG brands get one-size-fits-all labels.",
        "<b>Creative production lag</b> — manual short-video scripting cannot keep up with platform velocity.",
        "<b>Opaque post-campaign analytics</b> — clients cannot tell which segment drove ROI.",
      ],
    },
    approach: {
      heading: "An AI+SaaS layer that personalises content and quantifies delivery",
      body:
        "Built three modules — personalised content production (AI learning + ad precision), big-data cloud services (analytics + management + smart delivery), and a 48-hour rapid iteration loop. The system fuses brand-tagged audience profiles with platform-side short-video delivery, then closes the loop with effect-diagnosis dashboards.",
      steps: [
        "Audience Profiling",
        "Content Generation",
        "Smart Delivery",
        "Effect Diagnosis",
      ],
      tags: ["AI + SaaS", "Big-data cloud", "Short-video marketing", "ByteDance partnership"],
    },
    results: {
      heading: "Pilot outcomes across 42 onboarded clients",
      body:
        "Reported metrics from the pilot deck. Note: several figures are flagged for re-confirmation before publication.", // [confirm] 转化率 85% likely typo (industry std 1–10%); ROI ¥179-190 likely should be 1.79-1.90 (decimal)
      metrics: [
        { value: "85%", label: "Conversion rate", note: "[confirm] likely 8.5%" },
        { value: "1.79×", label: "Avg campaign ROI", note: "[confirm] deck shows ¥179-190" },
        { value: "42", label: "Clients onboarded", note: "↑ from pilot of 8" },
      ],
    },
    materials: {
      heading: "Presentation slides (27)",
      body:
        "The 2024 Challenge Cup presentation shown as an image gallery.",
      slides: makeSlides("zhiyi", 27),
    },
  },

  // =========================================================
  // 03 — 瑞贝卡 Rebecca (Competition · Business Elite Challenge)
  // =========================================================
  {
    slug: "rebecca",
    number: "03",
    title: "Rebecca",
    titleEn: "National Collegiate Business Elite Challenge",
    shortName: "Rebecca",
    eyebrow: ["BUSINESS ELITE CHALLENGE", "COMPETITION", "2024"],
    subtitle:
      "Strategic advisory work for Rebecca — re-architecting the export go-to-market for a beauty accessories brand facing channel saturation.", // [confirm] user's role per materials = 翁永婷 = Strategy Director
    badges: [
      { type: "award", text: "◆ National Finalist" }, // [confirm] award level — materials only say 全国总决赛
      { type: "role", text: "► Strategy Director" }, // [confirm] per materials
      { type: "neutral", text: "Cross-disciplinary team" },
    ],
    context: {
      heading: "Strategic re-positioning for an export-driven hair brand",
      body:
        "Rebecca is a Chinese manufacturer of synthetic and human-hair wigs and extensions, historically reliant on B2B export. The case asked for a refreshed market entry strategy covering channel mix, brand localisation for overseas consumers, and a financial model for the proposed re-positioning.",
      role: "Strategy Director · responsible for overseas market strategy + brand localisation",
      stack: "Market research · Financial modelling · Brand strategy · Go-to-market",
    },
    problem: {
      heading: "Export-only growth had plateaued and brand equity was invisible to end consumers",
      body: "",
      bullets: [
        "<b>Channel concentration</b> — revenue tied to a small number of B2B distributors.",
        "<b>Low brand recall</b> in overseas end-consumer markets.",
        "<b>No D2C playbook</b> — limited direct-to-consumer data or retention loops.",
        "<b>Pricing pressure</b> from commodity-grade competitors in Southeast Asia.",
      ],
    },
    approach: {
      heading: "A three-horizon market re-entry strategy",
      body:
        "Built a phased go-to-market — stabilise B2B export base, pilot D2C in two priority markets, then build a brand-led channel mix. Designed financial projections and a sensitivity table keyed to channel-mix assumptions.",
      steps: [
        "Market Sizing",
        "Channel Mix Design",
        "Brand Localisation",
        "Financial Modelling",
      ],
      tags: ["Go-to-market", "Brand localisation", "D2C", "Sensitivity analysis"],
    },
    results: {
      heading: "National finalist placement",
      body:
        "Reached the national finals of the Business Elite Challenge. Detailed placement and metric outcomes pending user confirmation.", // [confirm]
      metrics: [
        { value: " Finals", label: "National round", note: "[confirm] level: 1/2/3?" },
        { value: "2", label: "Priority pilot markets", note: "phased D2C entry" },
        { value: "35", label: "Slide deck", note: "national finals round" },
      ],
    },
    materials: {
      heading: "Presentation slides (35)",
      body: "The national finals presentation shown as an image gallery.",
      slides: makeSlides("rebecca", 35),
    },
  },

  // =========================================================
  // 04 — 商业发射 Commercial Launch (Case study)
  // =========================================================
  {
    slug: "commercial-launch",
    number: "04",
    title: "Commercial Launch",
    titleEn: "Industry research & launch strategy",
    shortName: "Commercial Launch",
    eyebrow: ["INDUSTRY RESEARCH", "CASE STUDY", "2024"],
    subtitle:
      "Research on the commercial space-launch industry — market sizing, value chain mapping, competitive dynamics, and a launch-provider investment-return framework.", // [confirm] user's role not stated in materials
    badges: [
      { type: "neutral", text: "Industry research" },
      { type: "neutral", text: "Investment framework" },
    ],
    context: {
      heading: "A bottom-up market view of the commercial space-launch sector",
      body:
        "The commercial space-launch industry has shifted from government-dominated procurement to a fragmented commercial market with private launch providers, satellite operators, and downstream service buyers. The case framed the industry as a value-chain question: where does margin actually sit, and which segment is investible at scale?",
      role: "Researcher · market sizing, value chain, investment framework", // [confirm] user's role not stated
      stack: "Market research · Financial modelling · Value chain analysis",
    },
    problem: {
      heading: "Industry narratives outpaced investible data",
      body: "",
      bullets: [
        "<b>Fragmented public data</b> — launch manifests, payload specs, and pricing scattered.",
        "<b>Hype vs. unit economics</b> — cost-per-kg headlines obscured provider-level margins.",
        "<b>Unclear value-chain capture</b> — launch vs. satellite vs. ground segment each claim leadership.",
        "<b>Policy risk</b> layered on top of technical risk for any private-launch investment case.",
      ],
    },
    approach: {
      heading: "Build a bottom-up framework from manifests and provider financials",
      body:
        "Aggregated launch manifests, provider cost structures, and satellite-operator demand into a single framework. Used historical launch cadence to project 10-year revenue for representative providers, with explicit policy-risk overlays.",
      steps: [
        "Manifest Aggregation",
        "Value Chain Mapping",
        "Provider Financials",
        "10-Year Projection",
      ],
      tags: ["Industry research", "Investment framework", "Policy risk overlay", "Long-horizon projection"],
    },
    results: {
      heading: "A defensible, framework-anchored investment view",
      body: "",
      metrics: [
        { value: "24", label: "Slides", note: "industry briefing deck" },
        { value: "10y", label: "Projection horizon", note: "provider-level" },
        { value: "3", label: "Value-chain segments", note: "launch · satellite · ground" },
      ],
    },
    materials: {
      heading: "Presentation slides (24)",
      body: "The industry briefing shown as an image gallery.",
      slides: makeSlides("commercial-launch", 24),
    },
  },

  // =========================================================
  // 05 — 昂钰 Angyu (Competition · 小挑)
  // =========================================================
  {
    slug: "angu",
    number: "05",
    title: "Angyu Precision",
    titleEn: "Challenge Cup · Small Track",
    shortName: "Angyu Precision",
    eyebrow: ["CHALLENGE CUP · SMALL TRACK", "COMPETITION", "2024"],
    subtitle:
      "Export-oriented go-to-market strategy and brand localisation for a precision-manufacturing SME serving overseas industrial customers.", // [confirm] user not named in PPT team list
    badges: [
      { type: "role", text: "► Project Lead" }, // [confirm] per competitions.js existing entry says "Project Lead: Angyu Precision"
      { type: "neutral", text: "Export GTM" },
      { type: "neutral", text: "Brand localisation" },
    ],
    context: {
      heading: "Taking a Chinese precision manufacturer to overseas industrial buyers",
      body:
        "Angyu Precision is a precision-manufacturing SME producing industrial components. The project asked for an export-oriented go-to-market and brand-localisation approach for overseas industrial customers, anchored on the company's existing manufacturing capability and patent portfolio.",
      role: "Project Lead · market research, export GTM, brand localisation, product visuals",
      stack: "Market research · Go-to-market · Brand localisation · Negotiation",
    },
    problem: {
      heading: "Strong manufacturing, weak overseas market presence",
      body: "",
      bullets: [
        "<b>Manufacturing capability</b> not matched by overseas channel reach.",
        "<b>Brand invisibility</b> in priority industrial buyer segments.",
        "<b>Patent portfolio</b> not commercialised into a differentiation story.", // [confirm] PPT vs 佐证 docx disagree: 4 utility+7 invention OR 7 utility+4 invention
        "<b>Negotiation cycles</b> with enterprise partners needed a tracking system.",
      ],
    },
    approach: {
      heading: "Market research + product visuals + partnership tracking",
      body:
        "Led market and user research, developed an export-oriented go-to-market strategy, designed product visuals for overseas customers, and ran 6 enterprise-partner negotiation cycles with project tracking.",
      steps: [
        "Market Research",
        "Export GTM",
        "Product Visuals",
        "Partner Negotiation",
      ],
      tags: ["Export GTM", "Brand localisation", "Patent portfolio", "Enterprise partnerships"],
    },
    results: {
      heading: "Negotiation pipeline and overseas positioning established",
      body: "",
      metrics: [
        { value: "6", label: "Negotiation cycles", note: "enterprise partners" },
        { value: "11", label: "Patents in portfolio", note: "[confirm] utility/invention split" },
        { value: "19", label: "Slide deck", note: "small-track entry" },
      ],
    },
    materials: {
      heading: "Presentation slides (19)",
      body: "The small-track presentation shown as an image gallery.",
      slides: makeSlides("angu", 19),
    },
  },

  // =========================================================
  // 06 — Period (existing project, migrated to V5)
  // =========================================================
  {
    slug: "period",
    number: "01",
    title: "Period",
    titleEn: "AI-Assisted Personalized Health Application",
    shortName: "Period",
    eyebrow: ["AI PRODUCT", "PERSONAL PROJECT", "2026"],
    subtitle:
      "An AI-assisted personalized health application for women's daily physical and emotional health management — recording cycle, symptoms, mood, and medication, then providing personalized insights and conversational support with explicit safety boundaries.",
    badges: [
      { type: "role", text: "► Designer" },
      { type: "neutral", text: "LLM + Rule logic" },
    ],
    links: [
      { label: "LIVE DEMO", url: "https://period-ai.vercel.app/" },
    ],
    context: {
      heading: "Personalized health support sits in a grey zone between lifestyle and medical reasoning",
      body:
        "Designed a hybrid AI architecture combining deterministic health calculations and rule-based scoring with LLM-based personalized communication, structured user and health data models, and Prompt/Context Injection strategies.",
      role: "Designer · full product thinking path, AI architecture, safety boundaries",
      stack: "LLM API · Prompt Engineering · Next.js · TypeScript · PostgreSQL · Drizzle ORM",
    },
    problem: {
      heading: "A generic chatbot cannot be trusted with health-adjacent reasoning",
      body: "",
      bullets: [
        "<b>Fragmented health information</b> across different records.",
        "<b>Generic health info</b> does not reflect an individual's cycle or context.",
        "<b>AI overstating certainty</b> creates real safety risk in health-adjacent products.",
        "<b>Personal data sensitivity</b> requires structured user/health data models.",
      ],
    },
    approach: {
      heading: "Split reasoning: rule-bound logic where accuracy matters, LLM where personalization matters",
      body:
        "Designed user scenarios and identified pain points, defined functional requirements and AI interaction flows, translated user needs into product requirements and system logic, then designed a hybrid AI architecture separating deterministic logic from LLM communication. Safety boundaries for AI responses were defined explicitly, and structured user/health data plus Prompt/Context Injection strategies keep responses anchored to each user's context.",
      steps: [
        "User Scenario",
        "Pain Point",
        "Functional Reqs",
        "AI Architecture",
      ],
      tags: ["LLM API", "Prompt Engineering", "Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    },
    results: {
      heading: "Hybrid AI architecture with explicit safety boundaries",
      body:
        "The key design decision: the architecture — not the prompt — is what makes an LLM safe to ship in health-adjacent products. Where to use deterministic logic versus where to use the LLM is the deciding question.",
      metrics: [
        { value: "Hybrid", label: "Architecture", note: "deterministic + LLM" },
        { value: "Explicit", label: "Safety boundaries", note: "rule-based, not discretion" },
        { value: "Live", label: "Demo", note: "period-ai.vercel.app" },
      ],
    },
    // No PPT/PDF deck for Period — omit materials block
  },

  // =========================================================
  // 07 — Refund Processing Automation (existing, migrated to V5)
  // =========================================================
  {
    slug: "refund-processing-automation",
    number: "02",
    title: "Refund Processing Automation",
    titleEn: "Document-Driven Workflow with Human-in-the-Loop",
    shortName: "Refund Automation",
    eyebrow: ["AUTOMATION", "UIPATH DESIGN", "2025"],
    subtitle:
      "A UiPath-based automation design for refund document processing that extracts structured data, validates against business rules, and routes work by confidence threshold to automated processing or human review.",
    badges: [
      { type: "role", text: "► Workflow designer" },
      { type: "neutral", text: "UiPath · Document Understanding" },
      { type: "neutral", text: "Workflow design" },
    ],
    // 已确认的公开链接 + 演示视频（合并自远程版本）
    links: [
      { label: "DEMO VIDEO", url: "https://youtu.be/nJchLlhX-So" },
    ],
    video: {
      type: "youtube",
      id: "nJchLlhX-So",
      title: "Refund Processing Automation — UiPath demo walkthrough",
      caption: "Recorded demo walkthrough of the UiPath refund processing workflow.",
    },
    context: {
      heading: "Automation should stop at the confidence boundary",
      body:
        "Designed an end-to-end refund processing workflow around document extraction, structured data processing, business-rule validation, and confidence-based routing, with an explicit human-in-the-loop boundary controlled by a confidence threshold.",
      role: "Workflow designer · end-to-end pipeline + routing logic",
      stack: "UiPath · Workflow Automation · Document Understanding · Process Optimization",
    },
    problem: {
      heading: "Manual handling is slow; full automation is unsafe",
      body: "",
      bullets: [
        "<b>Receipt information</b> stored in documents, not structured data.",
        "<b>Manual extraction</b> is repetitive and inconsistent.",
        "<b>Some cases</b> should not be auto-processed — rule violations or low confidence.",
        "<b>Full automation</b> removes human judgement where it is genuinely needed.",
      ],
    },
    approach: {
      heading: "A confidence threshold decides what is automated",
      body:
        "Integrated document extraction, structured data processing, business-rule validation, and automated case routing. Defined the structured fields the system needs (Receipt ID, Merchant, Date, Total Amount, Refund Reason, Confidence), designed validation rules and confidence thresholds, and created the routing logic that determines whether a case can be processed automatically or should be escalated for human review.",
      steps: [
        "Document",
        "Data Extraction",
        "Rule Validation",
        "Confidence Check",
      ],
      tags: ["UiPath", "Document Understanding", "Confidence routing", "Human-in-the-loop"],
    },
    results: {
      heading: "A workflow design with explicit automation boundary",
      body:
        "This is a workflow design, not a claimed production deployment. No quantified accuracy improvement, processing-time reduction, or business outcomes are stated, as none have been verified.",
      metrics: [
        { value: "Hybrid", label: "Routing", note: "auto + human review" },
        { value: "6", label: "Structured fields", note: "incl. confidence" },
        { value: "1", label: "Confidence threshold", note: "design decision" },
      ],
    },
    // No PPT/PDF deck — omit materials block
  },

  // =========================================================
  // 08 — SalesPilot (Hackathon · NUS-ISS Show Me Your Agents)
  // 内容迁移自远程 projects.js 的 8-section 数据；遵循其诚实标注：
  // 进行中的黑客松项目，无已确认的公开 demo/GitHub 链接。
  // =========================================================
  {
    slug: "salespilot",
    number: "03",
    title: "SalesPilot",
    titleEn: "Agentic WhatsApp Sales Opportunity Assistant",
    shortName: "SalesPilot",
    eyebrow: ["AGENTIC AI", "NUS-ISS HACKATHON", "2026"],
    subtitle:
      "Turning customer conversations into dynamic sales opportunities — an agentic WhatsApp assistant that scores each conversation 0–100 and escalates high-value cases to a human seller.",
    badges: [
      { type: "neutral", text: "In Progress" },
      { type: "role", text: "► Product Concept & Early Build" },
      { type: "neutral", text: "Hackathon team project" },
    ],
    event: "NUS-ISS Show Me Your Agents Hackathon · September 2026",
    // 已确认公开的仓库 / 演示视频 / 部署环境（管理端 + 顾客端）
    links: [
      { label: "GITHUB REPOSITORY", url: "https://github.com/wengyongting-jpg/SalesPilot-main" },
      { label: "DEMO VIDEO", url: "https://youtu.be/f2Oylb9kTA8" },
      { label: "ADMIN DASHBOARD", url: "http://47.128.144.8/admin/index.html#/inbox" },
      { label: "CUSTOMER CHAT", url: "http://47.128.144.8/customer/index.html" },
    ],
    video: {
      type: "youtube",
      id: "f2Oylb9kTA8",
      title: "SalesPilot — NUS-ISS hackathon agent demo",
      caption: "Agent demo: WhatsApp customer conversation → opportunity scoring → human handoff.",
    },
    context: {
      heading: "A stateful sales-opportunity agent, not a reply-generation chatbot",
      body:
        "Sales representatives receive a high volume of enquiries through WhatsApp every day and have limited capacity. SalesPilot is positioned as opportunity intelligence: it continuously interprets conversation history, updates the customer's sales stage, and recommends the correct next action. The system must automate routine enquiries but preserve human judgement for high-value, sensitive, uncertain, or negotiation-stage situations.",
      role:
        "Led initial concept and early build · product design, agent logic, RAG requirements, human-in-the-loop design, integration direction. Contributions beyond these areas are shared team work.",
      stack: "Agent Logic · RAG Requirements · Human-in-the-Loop · AWS · GitHub",
    },
    problem: {
      heading: "Valuable signals stay buried in fragmented WhatsApp conversations",
      body:
        "Sales teams lose time answering high-volume recurring enquiries — product availability, pricing, delivery charges, operating hours — while the signals that actually matter remain hidden: purchase intent, hesitation, competitor comparison, expansion opportunity, and risk. A team cannot treat every message equally, yet it is hard to see who is approaching purchase, who is hesitating, and who needs human attention.",
      bullets: [
        "<b>Purchase intent</b> signals scattered across long chat histories.",
        "<b>Hesitation and competitor comparison</b> invisible without manual review.",
        "<b>Uniform treatment</b> of every message wastes scarce sales capacity.",
        "<b>No escalation path</b> for high-value or negotiation-stage situations.",
      ],
    },
    approach: {
      heading: "A stateful loop from message to next best action",
      body:
        "After every customer message, SalesPilot recalls conversation memory, detects the customer's current state, extracts sales signals, updates the Opportunity Profile, recomputes the Opportunity Value Score, and picks the next best action — an automated AI response or a deliberate handoff to a human seller — while keeping the dashboard in sync.",
      steps: [
        "State Detection",
        "Signal Extraction",
        "Opportunity Scoring",
        "Next Best Action",
      ],
      tags: ["Agent Logic", "RAG Requirements", "Human-in-the-Loop", "AWS", "Opportunity scoring"],
    },
    results: {
      heading: "Demo complete — repository, video and live deployment published",
      body:
        "The complete agent journey was built and presented for the hackathon: customer conversation, opportunity scoring, next-best action, and human handoff. Source code, a recorded demo video, and two deployed surfaces (the sales-team admin dashboard and the customer chat interface) are publicly accessible. No production adoption or business metrics are claimed — this is a hackathon demonstration build.",
      metrics: [
        { value: "0–100", label: "Opportunity Value Score", note: "signal-driven" },
        { value: "2", label: "Deployed surfaces", note: "admin dashboard · customer chat" },
        { value: "4", label: "Public links", note: "repo · video · admin · customer" },
      ],
    },
    decisionsHeading: "Product decisions behind the agent design",
    decisions: [
      {
        question: "Full automation, or human-in-the-loop for high-value conversations?",
        options: "A · Fully automated replies for all enquiries — fastest, but negotiation-stage or sensitive messages risk losing deals. B · AI handles routine enquiries, humans take over high-value / uncertain / negotiation cases.",
        chosen: "B — trust and deal size outweigh speed. The system recommends, the human decides, for anything high-stakes.",
        evidence: "Sales conversations are multi-turn and stakes rise near purchase; a wrong automated reply at negotiation stage costs the whole deal.",
        validation: "Pilot with 1–2 sales reps; log acceptance / override rate of AI next-best-actions.",
      },
      {
        question: "Continuous 0–100 score, or 3-tier hot / warm / cold buckets?",
        options: "A · Three buckets — simple but coarse. B · Continuous 0–100 Opportunity Value Score — gives reps a ranking, not just a label.",
        chosen: "B — reps' real question is 'who do I call first', which needs ordering, not just categories.",
        evidence: "In the demo walkthrough, the ranked inbox view was what judges and testers engaged with most.",
        validation: "In the rep pilot, measure whether reps work the inbox top-down (score order) or re-sort.",
      },
      {
        question: "Stateful opportunity profile, or stateless per-message replies?",
        options: "A · Reply per message with no memory. B · Maintain a persistent Opportunity Profile updated after every message.",
        chosen: "B — purchase intent and hesitation only make sense across a conversation, not in a single message.",
        evidence: "Signals like competitor comparison and expansion opportunity span multiple messages.",
        validation: "Check score stability across a conversation — no wild swings on courtesy messages.",
      },
    ],
    workflow: {
      heading: "From customer message to next best action",
      nodes: [
        {
          label: "Customer Message",
          tagline: "WhatsApp inbound",
          input: "Customer text message arriving via WhatsApp.",
          output: "Normalised message appended to the conversation thread.",
          rules: "Pass-through capture; media messages get a lightweight description request.",
          exception: "Unsupported media or empty message → polite reply asking the customer to describe their need in text.",
        },
        {
          label: "State Detection",
          tagline: "Where is this customer?",
          input: "Full conversation history from memory.",
          output: "Current sales stage (browsing / comparing / negotiating / ready).",
          rules: "LLM reads the thread and classifies stage; long gaps trigger re-qualification.",
          exception: "Conversation idle > 7 days → stage reset to re-qualification instead of assuming continuity.",
        },
        {
          label: "Signal Extraction",
          tagline: "What matters here?",
          input: "Latest message + detected stage.",
          output: "Structured signals: purchase intent, hesitation, competitor comparison, expansion opportunity, risk.",
          rules: "Courtesy and small-talk are dampened so politeness does not inflate the score.",
          exception: "Conflicting signals (strong intent + strong hesitation) → cap the score and flag for human review.",
        },
        {
          label: "Opportunity Scoring",
          tagline: "0–100 value score",
          input: "Extracted signals + opportunity profile.",
          output: "Updated Opportunity Value Score (0–100) driving inbox ranking.",
          rules: "Weighted combination of signals; weights favour late-stage buying signals.",
          exception: "Low-confidence extraction → score marked provisional, not used for auto-decisions.",
        },
        {
          label: "Next Best Action",
          tagline: "Auto-reply or hand off",
          input: "Score + stage + signal mix.",
          output: "Either an AI-drafted reply, or a human handoff with context summary.",
          rules: "High-value, sensitive, or negotiation-stage conversations always route to a human.",
          exception: "Uncertain cases → AI drafts a reply but holds it for human approval instead of sending.",
        },
        {
          label: "Dashboard Sync",
          tagline: "Rep inbox stays live",
          input: "Score, stage, signals, recommended action.",
          output: "Updated admin inbox: ranked opportunities with reasons and handoff flags.",
          rules: "Every score change carries its evidence so reps can trust-check at a glance.",
          exception: "Missing evidence → the recommendation is shown greyed out with an explanation request.",
        },
      ],
    },
    evaluation: {
      heading: "Hackathon-stage validation — scripted scenarios, not production metrics",
      body:
        "Validation at this stage is demonstration-grade: scripted WhatsApp conversation scenarios, judge walkthroughs, and a live deployed demo. No production adoption or business metric is claimed — the numbers below describe the demo build, not real sales outcomes.",
      disclaimer: "Demo-stage build (NUS-ISS hackathon). Scripted scenarios + judge walkthroughs only — no production users. Figures describe the demo, not business results.",
      metrics: [
        { value: "0–100", label: "Opportunity Value Score", note: "signal-driven ranking" },
        { value: "2", label: "Deployed surfaces", note: "admin dashboard · customer chat" },
        { value: "4", label: "Public links", note: "repo · video · admin · customer" },
      ],
      failures: [
        {
          title: "Auto-reply fired on a negotiation-stage message",
          issue: "Early logic let the AI reply to a price-negotiation message — exactly where a wrong word loses the deal.",
          lesson: "Added a hard rule: negotiation / sensitive stages always route to a human.",
        },
        {
          title: "Score inflated by polite small-talk",
          issue: "Friendly courtesy messages were read as engagement and pushed scores up.",
          lesson: "Dampened courtesy signals so only substantive buying signals move the score.",
        },
      ],
    },
    iteration: {
      heading: "If this continued past the hackathon",
      now: [
        "Pilot with 1–2 sales reps on real inbound conversations; log acceptance / override of each next-best-action.",
      ],
      next: [
        "Feed rep overrides back into signal weights — the score should learn from what reps actually act on.",
        "CRM integration to ground scores in historical deal outcomes.",
      ],
      later: [
        "Controlled comparison: conversion on AI-assisted inbox vs. a control inbox, before claiming any uplift.",
      ],
    },
    // 无幻灯片区 — 以演示视频 + 部署环境作为 proof
  },

  // =========================================================
  // 09 — Grounded Enterprise Policy & Procedure Assistant (Individual · Prototype)
  // 内容迁移自远程 projects.js 的 8-section 数据；无生产部署/指标声明。
  // =========================================================
  {
    slug: "grounded-enterprise-policy-assistant",
    number: "04",
    title: "Grounded Enterprise Policy & Procedure Assistant",
    titleEn: "Evidence-Based Internal Knowledge Assistant",
    shortName: "Policy Assistant",
    eyebrow: ["ENTERPRISE AI · RAG", "INDIVIDUAL PROJECT", "2026"],
    subtitle:
      "Retrieval-first by design: it checks whether retrieved evidence is sufficient before answering — and refuses when it is not.",
    badges: [
      { type: "neutral", text: "Prototype" },
      { type: "role", text: "► End-to-End Builder" },
      { type: "neutral", text: "Individual project" },
    ],
    event: "Individual Project · September 2026",
    context: {
      heading: "Internal policy answers must be grounded, traceable, and careful",
      body:
        "Internal policy questions require more than helpful language. The answer must be based on authorised documents, traceable to a source, and careful when evidence is missing or uncertain. A generic LLM makes it worse: it may hallucinate, fail to cite a source, or rely on incomplete or outdated policy information.",
      role:
        "Individual project / end-to-end builder · problem definition, information architecture, RAG workflow, retrieval logic, answer constraints, citation and evidence mechanisms, refusal/escalation logic, product design",
      stack: "RAG · TF-IDF Vectorisation · Cosine Similarity · Python · Streamlit",
    },
    problem: {
      heading: "Traditional document search is slow, fragmented, and easy to misread",
      body:
        "Employees need fast answers about internal policies and procedures, but documents can be misunderstood and generic LLMs answer anyway — without evidence, without sources, and without knowing when they should not answer.",
      bullets: [
        "<b>Hallucination risk</b> — free-form LLM answers without document evidence.",
        "<b>No traceability</b> — answers cannot be checked against an authorised source.",
        "<b>Over-answering</b> — LLMs answer questions they should decline.",
        "<b>Stale information</b> — model priors lag behind updated policy documents.",
      ],
    },
    approach: {
      heading: "Retrieve first, assess sufficiency, then answer with citation — or refuse",
      body:
        "Documents are processed and chunked, indexed as TF-IDF vectors, and matched to each question by cosine similarity. At query time, retrieved evidence passes an evidence-threshold check before the foundation model composes a response — which either cites its sources or refuses. Underspecified questions trigger clarification instead of a guess.",
      steps: [
        "Retrieve Evidence",
        "Assess Sufficiency",
        "Cited Answer",
        "Refuse / Escalate",
      ],
      tags: ["RAG", "Chunking", "Evidence threshold", "Citations", "Refusal logic", "Streamlit"],
    },
    results: {
      heading: "An MVP prototype for grounded enterprise retrieval",
      body:
        "The prototype validates enterprise document retrieval, evidence citation, and refusal / escalation under uncertainty. It is presented as an Enterprise AI and AI Product prototype — no production deployment, user adoption, award, or formal business metric is claimed.",
      metrics: [
        { value: "Evidence-first", label: "Answer design", note: "retrieve before generate" },
        { value: "Citations", label: "Traceability", note: "source shown per answer" },
        { value: "Refusal", label: "Insufficient evidence", note: "no fabricated confidence" },
      ],
    },
    prototype: {
      inputLabel: "EMPLOYEE QUESTION",
      disclaimer: "Interactive design demo — simulated answers on sample policy snippets, showing the three output states (cited answer / clarification / refusal). Not a live system.",
      samples: [
        {
          id: "answerable",
          name: "Answerable question",
          input: "How many days of annual leave am I entitled to?",
          blocks: [
            {
              type: "answer",
              status: "answered",
              text: "Full-time employees are entitled to 14 days of paid annual leave per year, pro-rated in the first year of service. Leave is accrued monthly and must be applied for at least 3 working days in advance.",
              citations: ["Leave Policy §4.2 — Annual Leave Entitlement", "Leave Policy §4.5 — Application Procedure"],
            },
          ],
        },
        {
          id: "ambiguous",
          name: "Ambiguous question",
          input: "Can I take leave next month?",
          blocks: [
            {
              type: "answer",
              status: "clarify",
              text: "I can help, but 'leave' could mean annual leave, medical leave, or unpaid leave — each follows a different policy. Which type of leave are you asking about?",
              citations: [],
            },
          ],
        },
        {
          id: "out-of-scope",
          name: "Out-of-scope question",
          input: "What is the market salary for a product manager in Singapore?",
          blocks: [
            {
              type: "answer",
              status: "refused",
              text: "I can only answer questions covered by internal policy documents, and I found no authorised document addressing external salary benchmarks. For compensation questions, please contact HR directly.",
              citations: [],
            },
          ],
        },
      ],
    },
    decisionsHeading: "Why the assistant is retrieval-first",
    decisions: [
      {
        question: "Generate freely like a chatbot, or retrieve before answering?",
        options: "A · Direct LLM answers — fluent but can hallucinate policy that doesn't exist. B · Retrieval-first: check evidence sufficiency before any generation.",
        chosen: "B — for internal policy, a confident wrong answer is worse than no answer.",
        evidence: "Generic LLMs answer anyway — without sources, and without knowing when to stop.",
        validation: "Test set of answerable / ambiguous / out-of-scope questions; track refusal correctness.",
      },
      {
        question: "TF-IDF retrieval, or dense embeddings from day one?",
        options: "A · Embedding-based semantic search — better recall, more infra. B · TF-IDF + cosine similarity — explainable, auditable, zero infra.",
        chosen: "B for the prototype — on a small controlled corpus, explainable similarity beats marginal recall gains.",
        evidence: "Internal policy language is formulaic; keyword overlap is a strong signal, and every match can be shown to a compliance reviewer.",
        validation: "Revisit with dense retrieval once the question log shows vocabulary mismatch cases.",
      },
      {
        question: "Answer ambiguous questions with the best guess, or ask back?",
        options: "A · Best-guess answer — fewer turns, more risk. B · Clarification question — one extra turn, much safer.",
        chosen: "B — ambiguity in policy questions is usually about which policy applies, and guessing picks the wrong one.",
        evidence: "'Can I take leave?' spans at least three different policies with different rules.",
        validation: "Log clarification rate; if most clarifications resolve in one turn, the trade is worth it.",
      },
    ],
    workflow: {
      heading: "From question to cited answer — or a careful refusal",
      nodes: [
        {
          label: "User Question",
          tagline: "Natural language",
          input: "Employee question in free text.",
          output: "Parsed query ready for retrieval.",
          rules: "Pass-through; no rewriting at this stage.",
          exception: "Empty or non-question input → prompt for a concrete policy question.",
        },
        {
          label: "Retrieve Evidence",
          tagline: "TF-IDF · cosine",
          input: "Parsed query.",
          output: "Ranked policy-document chunks with similarity scores.",
          rules: "Documents are chunked and indexed as TF-IDF vectors; cosine similarity ranks chunks.",
          exception: "Max similarity below threshold → skip generation entirely, go to refusal path.",
        },
        {
          label: "Assess Sufficiency",
          tagline: "Is evidence enough?",
          input: "Retrieved chunks + scores.",
          output: "Sufficient / ambiguous / insufficient verdict.",
          rules: "Evidence threshold on score and coverage; ambiguity detection on overlapping policies.",
          exception: "Multiple policies match equally → treat as ambiguous, trigger clarification.",
        },
        {
          label: "Cited Answer",
          tagline: "Grounded generation",
          input: "Verified evidence chunks.",
          output: "Answer constrained to retrieved text, with per-claim citations.",
          rules: "Foundation model composes only from retrieved passages; every claim carries its source section.",
          exception: "Chunks conflict with each other → surface both versions, refuse to arbitrate.",
        },
        {
          label: "Refuse / Escalate",
          tagline: "No fabricated confidence",
          input: "Insufficient-evidence verdict.",
          output: "Explicit refusal with the reason, plus the right human contact.",
          rules: "Refusal states what was searched and why evidence was insufficient.",
          exception: "Repeated refusals on a topic → flag a policy-coverage gap to the content owner.",
        },
      ],
    },
    evaluation: {
      heading: "Evaluation design — targets first, numbers when the test set runs",
      body:
        "The prototype ships with an evaluation design rather than invented metrics: a self-built question set across three categories (in-scope answerable, ambiguous, out-of-scope), scored on citation coverage, refusal correctness, and clarification quality. Targets are stated below; they become real numbers once the logged question set runs.",
      disclaimer: "Prototype stage — evaluation design with explicit targets, not measured production metrics. No user-adoption or accuracy figures are claimed.",
      metrics: [
        { value: "3", label: "Question categories", note: "answerable · ambiguous · out-of-scope" },
        { value: "≥90%", label: "Citation coverage target", note: "claims with a source section" },
        { value: "100%", label: "Refusal correctness target", note: "no out-of-scope answers" },
      ],
      failures: [
        {
          title: "Baseline LLM answered an out-of-scope question confidently",
          issue: "Without the evidence gate, the model produced a plausible-sounding policy that does not exist.",
          lesson: "Retrieval sufficiency check moved before generation, not after.",
        },
        {
          title: "Ambiguous leave question picked the wrong policy",
          issue: "'Can I take leave?' matched annual leave but the user meant unpaid leave.",
          lesson: "Overlap detection added — ambiguity triggers clarification instead of a guess.",
        },
      ],
    },
    iteration: {
      heading: "From prototype to trustworthy internal tool",
      now: [
        "Log real employee Q&A pairs and build a 30-question regression set from actual usage.",
      ],
      next: [
        "Move from TF-IDF to dense retrieval once the log shows keyword-mismatch failures.",
        "Add answer-helpfulness feedback to catch wrong-but-cited answers.",
      ],
      later: [
        "Multi-document synthesis for questions spanning several policies.",
        "Coverage-gap report: topics employees ask about that no policy document answers.",
      ],
    },
    // 无 deck/材料区块；无公开链接 — 均未确认
  },

  // =========================================================
  // 10 — Health Insurance Claim Decision Agent (PE6201 A2 · 团队项目)
  // 内容迁移自远程 projects.js；严格保留贡献边界标注：
  // 用户负责 evaluation harness + 安全测试，不是核心 agent 架构。
  // =========================================================
  {
    slug: "health-insurance-claim-decision-agent",
    number: "05",
    title: "Health Insurance Claim Decision Agent",
    titleEn: "Evaluation Harness & Escalation Safety Testing",
    shortName: "Claim Agent",
    eyebrow: ["AI AGENT · EVALUATION", "PE6201 A2 TEAM PROJECT", "2026"],
    subtitle:
      "A team-built insurance claim decision agent, evaluated through scripted and live-model test workflows with safety guardrails and reproducible result analysis.",
    badges: [
      { type: "role", text: "► Evaluation Harness & Safety Testing" },
      { type: "neutral", text: "Six-member team" },
      { type: "neutral", text: "Repository v3.0" },
    ],
    event: "PE6201 A2 · Academic Team Project · Six-member team · Repository Version 3.0",
    links: [
      { label: "GITHUB REPOSITORY", url: "https://github.com/symbioticshark/A2_HealthInsurance" },
      { label: "DEMO VIDEO", url: "https://youtu.be/f-cxrW4esAA" },
    ],
    video: {
      type: "youtube",
      id: "f-cxrW4esAA",
      title: "Health Insurance Claim Decision Agent — team project demo",
      caption: "Team project demonstration (Version 3.0 build).",
    },
    context: {
      heading: "A six-member academic team build with layered architecture and reproducible testing",
      body:
        "The system combines deterministic scripted evaluation, live LLM evaluation, safety guardrails, cost tracking, and reproducible result analysis. Repository release Version 3.0 uses a layered architecture, session-based history and comparison, safer configuration, transactional result writing, guardrails, and reproducible failure testing.",
      role:
        "Co-owned the evaluation-harness and scripted-evaluation work (D4 and D5(a)) with one teammate; designed hostile-input and escalation safety cases; contributed to shared evaluation, live-model testing, report preparation, and demo assembly. The core agent loop, insurance tools, guardrails, cost model, and decision ledger were team work, not built solely by me.",
      stack: "Evaluation Harness · Scripted Evaluation · Live-Model Evaluation · Safety Guardrails",
    },
    problem: {
      heading: "Claim decisions are safety-sensitive — testing is part of safety design",
      body:
        "An AI system must handle incomplete, adversarial, ambiguous, and escalation-triggering inputs without generating unsafe or unsupported decisions. The evaluation suite deliberately includes hostile-input and escalation scenarios to test whether the system can refuse, route, or safely handle risky cases instead of producing unsupported claim decisions.",
      bullets: [
        "<b>Adversarial inputs</b> must not produce unsupported claim decisions.",
        "<b>Ambiguous cases</b> need safe escalation, not confident guessing.",
        "<b>Behaviour changes</b> across versions must be comparable and reproducible.",
        "<b>Unsafe behaviour</b> should surface in failure analysis, not production.",
      ],
    },
    approach: {
      heading: "A repeatable pipeline: scripted case → guardrail gate → expected-outcome comparison",
      body:
        "Each claim scenario runs through a repeatable, comparable pipeline: a scripted case drives the agent, a guardrail check gates the behaviour, the result is compared against the expected outcome and recorded, and anything unsafe or uncertain branches to failure analysis or safe escalation. Six hostile-input and escalation cases (CLM-8941, CLM-8952, CLM-9023, CLM-9024, CLM-9025, CLM-9026) were designed within the shared 40-case suite.",
      steps: [
        "Scripted Case",
        "Agent Decision",
        "Guardrail Check",
        "Outcome Comparison",
      ],
      tags: ["Hostile-input testing", "Escalation safety", "Reproducible analysis", "Guardrails"],
    },
    results: {
      heading: "A reproducible evaluation workflow with documented team contributions",
      body:
        "The project established a reproducible evaluation workflow with scripted cases, live-model evaluation, safety guardrails, and documented team contributions. Repository (Version 3.0) and demo video are publicly available.",
      metrics: [
        { value: "6", label: "Safety cases designed", note: "of shared 40-case suite" },
        { value: "40", label: "Evaluation cases", note: "shared team suite" },
        { value: "v3.0", label: "Repository release", note: "public on GitHub" },
      ],
    },
    // 无 deck/材料区块 — 有 GitHub + demo video 外链
  },

  // =========================================================
  // 11 — Singapore Rental Intelligence Copilot (NTU Generative AI · 团队项目)
  // 内容迁移自远程 projects.js；保留贡献边界：报告整合 + Stage 5 原型 + Stage 6 评测。
  // =========================================================
  {
    slug: "singapore-rental-intelligence-copilot",
    number: "06",
    title: "Singapore Rental Intelligence Copilot",
    titleEn: "Evidence-Grounded Rental Decision Support for International Students",
    shortName: "Rental Copilot",
    eyebrow: ["GENERATIVE AI", "NTU GROUP ASSIGNMENT", "2026"],
    subtitle:
      "A generative AI assistant that extracts facts from unstructured rental posts, checks risks against rental rules, and generates evidence-grounded landlord clarification questions.",
    badges: [
      { type: "role", text: "► Prototype · Evaluation · Report" },
      { type: "neutral", text: "Five-member team" },
      { type: "neutral", text: "Gemini 2.5 Flash" },
    ],
    event: "NTU Generative AI group assignment · Group 3 · Five members",
    links: [
      { label: "OPEN DEMO", url: "https://gemini.google.com/share/c16fc3fe290f?skid=3525612e-9c27-4dd4-ad04-d655841b497f" },
    ],
    context: {
      heading: "Support rental decisions without making them",
      body:
        "Two AI modules built on Gemini 2.5 Flash: a Listing Extractor that preserves evidence and uncertainty, and a Match/Risk/Rank module that assesses preference fit and identifies evidence-grounded concerns. A lightweight rule-based RAG retrieves relevant rental rules from an 18-entry knowledge base. The prototype was developed using Gemini Canvas. My contribution: PDF report consolidation, Stage 5 (Prototype), and Stage 6 (Evaluation & controlled comparison) — Stages 2, 3, 4, and 7 were completed by teammates.",
      role:
        "PDF report consolidation · Stage 5 prototype (Gemini Canvas, three optimisation rounds) · Stage 6 evaluation: A/B/C experiment design and scoring across 20 test cases",
      stack: "Gemini 2.5 Flash · Rule-based RAG · Structured JSON · Gemini Canvas",
    },
    problem: {
      heading: "First-time international student renters face four core difficulties",
      body:
        "A generic chatbot cannot solve this — it would need to extract facts without fabricating, ground risk assessments in listing evidence, and know what it does not know.",
      bullets: [
        "<b>Unstructured posts</b> — rent, lease, utilities, deposit scattered across long text.",
        "<b>Unknown local rules</b> — students may not know rental risks and regulations.",
        "<b>Tedious comparison</b> — evaluating multiple listings manually is slow.",
        "<b>Language barrier</b> — asking landlords the right questions is hard.",
      ],
    },
    approach: {
      heading: "Two-module pipeline with a rule-based retrieval layer in between",
      body:
        "A raw listing enters as input; Module A extracts structured facts while preserving qualifiers and uncertainty ('Not mentioned' / 'Needs verification'); the rule-based RAG retrieves up to three relevant entries from the 18-entry knowledge base; Module B combines facts, evidence, preferences, and retrieved rules to produce matching, risk, and action outputs — each risk finding requires two-part grounding: listing evidence plus a knowledge entry.",
      steps: [
        "Listing Input",
        "Module A Extract",
        "Rule-based RAG",
        "Module B Match / Risk / Rank",
      ],
      tags: ["Gemini 2.5 Flash", "Rule-based RAG", "Structured JSON", "Prompt constraints", "18-entry KB"],
    },
    results: {
      heading: "Controlled A/B/C comparison measured real improvement",
      body:
        "20 fixed test cases were evaluated across three system versions, producing 60 outputs scored on four dimensions (Extraction Correctness, Missing-Information Handling, Risk Grounding, Rental-Rule Accuracy; 80 points max per version). Adding retrieval improved risk grounding from 14/20 to 19/20 while slightly reducing extraction correctness — retrieval improves reasoning support but does not automatically improve every aspect.",
      metrics: [
        { value: "62.5→90%", label: "A/B/C improvement", note: "baseline → prompt+retrieval" },
        { value: "20", label: "Test cases", note: "60 outputs · 4 dimensions" },
        { value: "19/20", label: "Risk grounding (C)", note: "up from 14/20 in B" },
      ],
    },
    prototype: {
      inputLabel: "RAW LISTING POST",
      disclaimer: "Interactive design demo — simplified simulation of the two-module pipeline on sample listings. Illustrates the output shape (facts with uncertainty, evidence-grounded risks, landlord questions), not the live Gemini build.",
      samples: [
        {
          id: "listing-a",
          name: "Listing A · near NTU",
          input: "Common room near NTU, $950/month, utilities not included, 6-month lease, no agent fee, available immediately. Text me after 7pm.",
          blocks: [
            {
              type: "facts",
              items: [
                { label: "Rent", value: "$950 / month" },
                { label: "Lease", value: "6 months" },
                { label: "Utilities", value: "Not included" },
                { label: "Agent fee", value: "None" },
                { label: "Deposit", value: "Not mentioned", flag: true },
                { label: "House rules", value: "Not mentioned", flag: true },
              ],
            },
            {
              type: "risks",
              items: [
                {
                  title: "Deposit terms unstated",
                  evidence: "Listing mentions rent and lease but no deposit amount or refund terms.",
                  rule: "KB-07 · Deposit norms: 1 month per 6-month lease is typical; always confirm in writing.",
                },
                {
                  title: "Utilities excluded — real cost unclear",
                  evidence: "'Utilities not included' with no estimate of monthly range.",
                  rule: "KB-12 · Utilities typically add $50–100/month for a common room.",
                },
              ],
            },
            {
              type: "questions",
              items: [
                "Is a deposit required? How many months, and what are the refund conditions?",
                "What is the typical monthly utilities cost for this room?",
                "Are there house rules on cooking, guests, or air-con usage?",
              ],
            },
          ],
        },
        {
          id: "listing-b",
          name: "Listing B · master room",
          input: "Master room, $1,400/month including wifi. Minimum 1-year lease, 2 months deposit. No cooking allowed. Prefer single female tenant.",
          blocks: [
            {
              type: "facts",
              items: [
                { label: "Rent", value: "$1,400 / month (wifi incl.)" },
                { label: "Lease", value: "12 months minimum" },
                { label: "Deposit", value: "2 months" },
                { label: "Cooking", value: "Not allowed" },
                { label: "Tenant preference", value: "Single female" },
                { label: "Utilities", value: "Needs verification", flag: true },
              ],
            },
            {
              type: "risks",
              items: [
                {
                  title: "No-cooking rule may conflict with tenant needs",
                  evidence: "Listing states 'no cooking allowed' — a hard constraint for most students.",
                  rule: "KB-03 · House rules: confirm whether light cooking (microwave / kettle) is permitted.",
                },
                {
                  title: "2-month deposit on 12-month lease",
                  evidence: "Deposit is at the upper norm for the lease length.",
                  rule: "KB-07 · Deposit norms: 1 month per 6-month lease; 2 months on 12 is standard but confirm refund terms.",
                },
              ],
            },
            {
              type: "questions",
              items: [
                "Are utilities (water, electricity) included in the $1,400, or only wifi?",
                "Is light cooking such as microwave or kettle use allowed?",
                "Under what conditions is the 2-month deposit fully refunded?",
              ],
            },
          ],
        },
      ],
    },
    decisionsHeading: "Design decisions behind the two-module pipeline",
    decisions: [
      {
        question: "One end-to-end prompt, or separate extraction and reasoning modules?",
        options: "A · Single prompt doing extraction + risk + ranking. B · Module A extracts facts only; Module B reasons over facts + rules.",
        chosen: "B — mixing fact extraction with judgement in one prompt let the model blur 'what the listing says' with 'what it assumes'.",
        evidence: "In the A/B/C comparison, separating concerns was a precondition for the risk-grounding gains (14 → 19/20).",
        validation: "Dimension-level scoring across versions, not just total score.",
      },
      {
        question: "Vector-embedding RAG, or rule-based retrieval over a small KB?",
        options: "A · Embedding retrieval — scales, but opaque and overkill here. B · Rule-based retrieval over an 18-entry knowledge base.",
        chosen: "B — 18 entries are categorical, not a corpus; deterministic matching is auditable and can't drift.",
        evidence: "Every retrieved rule can be shown next to the risk it grounds — the two-part grounding requirement.",
        validation: "Move to embeddings only when the KB grows past what rule matching covers cleanly.",
      },
      {
        question: "Best-guess missing fields, or 'Not mentioned' as a first-class value?",
        options: "A · Fill gaps with plausible defaults. B · Explicitly surface 'Not mentioned' / 'Needs verification'.",
        chosen: "B — students silently act on wrong assumptions; an explicit unknown is actionable, a silent guess is not.",
        evidence: "Missing-information handling was scored as its own dimension across all 20 test cases.",
        validation: "Track how often flagged-unknown fields turn out to matter in real enquiries.",
      },
    ],
    workflow: {
      heading: "From raw listing to evidence-grounded advice",
      nodes: [
        {
          label: "Listing Input",
          tagline: "Unstructured post",
          input: "Raw rental post text + the student's preferences.",
          output: "Normalised request for the extraction module.",
          rules: "Pass-through capture; preferences kept separate from listing text.",
          exception: "Non-listing text → ask the user to paste an actual listing.",
        },
        {
          label: "Module A · Extract",
          tagline: "Facts only",
          input: "Raw listing text.",
          output: "Structured facts with qualifiers: 'Not mentioned' / 'Needs verification'.",
          rules: "Never fabricate; preserve uncertainty explicitly.",
          exception: "Conflicting statements in the post → keep both, flag the conflict.",
        },
        {
          label: "Rule-based RAG",
          tagline: "18-entry KB",
          input: "Extracted facts.",
          output: "Up to 3 relevant rental-rule entries.",
          rules: "Deterministic rule matching over the knowledge base.",
          exception: "No rule match → Module B runs in evidence-only mode, no rule citations.",
        },
        {
          label: "Module B · Match / Risk / Rank",
          tagline: "Grounded reasoning",
          input: "Facts + preferences + retrieved rules.",
          output: "Fit assessment, risk findings, ranked actions.",
          rules: "Every risk requires two-part grounding: listing evidence + a knowledge entry.",
          exception: "Grounding incomplete → mark 'needs verification' instead of raising a risk.",
        },
        {
          label: "Evidence Check & Output",
          tagline: "Human decides",
          input: "Module B output.",
          output: "Decision-support cards + landlord clarification questions.",
          rules: "The system supports the decision; it never makes it.",
          exception: "Final judgement always stays with the student — agent/landlord verification is prompted.",
        },
      ],
    },
    evaluation: {
      heading: "Controlled A/B/C comparison across 20 fixed test cases",
      body:
        "Three versions were compared on 20 fixed test cases (60 outputs total), scored on four dimensions — Extraction Correctness, Missing-Information Handling, Risk Grounding, Rental-Rule Accuracy — 80 points maximum per version. Adding retrieval lifted risk grounding from 14/20 to 19/20 while slightly costing extraction correctness: retrieval strengthens reasoning support, but does not improve everything for free.",
      disclaimer: "Test-set evaluation (20 fixed cases × 3 versions = 60 outputs), not live-user metrics. Documented results: total 62.5% → 90%, risk grounding 14 → 19/20. Other dimension splits are reconstructed for display — replace with the original scoring sheet.",
      metrics: [
        { value: "62.5→90%", label: "Total score, A → C", note: "50/80 → 72/80" },
        { value: "20", label: "Test cases", note: "60 outputs · 4 dimensions" },
        { value: "19/20", label: "Risk grounding (C)", note: "up from 14/20 in B" },
      ],
      versions: [
        {
          name: "A · Baseline prompt",
          summary: "Single prompt, no structure constraints. 50/80 (62.5%)",
          scores: [
            { label: "Extraction correctness", value: 16, max: 20 },
            { label: "Missing-info handling", value: 12, max: 20 },
            { label: "Risk grounding", value: 13, max: 20 },
            { label: "Rental-rule accuracy", value: 9, max: 20 },
          ],
        },
        {
          name: "B · Prompt-optimised",
          summary: "Structured output + uncertainty qualifiers. ~57/80",
          scores: [
            { label: "Extraction correctness", value: 18, max: 20 },
            { label: "Missing-info handling", value: 13, max: 20 },
            { label: "Risk grounding", value: 14, max: 20 },
            { label: "Rental-rule accuracy", value: 12, max: 20 },
          ],
        },
        {
          name: "C · Prompt + retrieval",
          summary: "Rule-based RAG added. 72/80 (90%)",
          scores: [
            { label: "Extraction correctness", value: 17, max: 20 },
            { label: "Missing-info handling", value: 17, max: 20 },
            { label: "Risk grounding", value: 19, max: 20 },
            { label: "Rental-rule accuracy", value: 19, max: 20 },
          ],
        },
      ],
      failures: [
        {
          title: "Retrieval slightly hurt extraction correctness (18 → 17)",
          issue: "Injected rules occasionally distracted Module B from the listing's literal facts.",
          lesson: "Retrieval augments reasoning, it does not come free — plan targeted fixes, not blind celebration.",
        },
        {
          title: "Version B fabricated rule citations when the KB had no match",
          issue: "Without an explicit no-match path, the model invented plausible-sounding rules.",
          lesson: "Added the evidence-only mode: no retrieval match means no rule citations.",
        },
      ],
    },
    iteration: {
      heading: "Next iteration priorities, driven by the evaluation",
      now: [
        "Fix the extraction-correctness regression under retrieval context (18 → 17).",
        "Unify the qualifier taxonomy ('Not mentioned' vs 'Needs verification') so scoring is consistent.",
      ],
      next: [
        "Grow the knowledge base beyond 18 entries; add embedding retrieval as a fallback when rules miss.",
      ],
      later: [
        "Moderated test with 8–10 international students: time-to-decision and confidence calibration vs. manual search.",
      ],
    },
    // 无 deck/材料区块 — 有 Open Demo 外链
  },
];

export function getCaseDetailProject(slug) {
  return caseDetailProjects.find((p) => p.slug === slug);
}

// 校园经历分区（论文 + 商业竞赛）— 详情页面包屑与返回链接据此分流。
// mm118-paper / zhiyi / rebecca / commercial-launch / angu 归 Campus；
// 其余为个人项目，归 Projects。
const CAMPUS_SLUGS = new Set([
  "mm118-paper",
  "zhiyi",
  "rebecca",
  "commercial-launch",
  "angu",
]);

export function isCampusSlug(slug) {
  return CAMPUS_SLUGS.has(slug);
}
