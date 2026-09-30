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
  // 01 — MM118 Paper (Research)
  // =========================================================
  {
    slug: "mm118-paper",
    number: "01",
    title: "AI Investment & Market Competitiveness",
    titleEn: "MM118 · IMMS 2025",
    shortName: "MM118 Paper",
    eyebrow: ["IMMS 2025", "PUBLICATION", "OCT 2025"],
    subtitle:
      "Co-authored paper examining how AI investment, production efficiency, and human–machine collaboration affect firms' market competitiveness in manufacturing — published in the IMMS 2025 proceedings.",
    badges: [
      { type: "role", text: "► Co-author & Presenter" }, // [confirm] 3rd author? co-first? corresponding?
      { type: "neutral", text: "Manufacturing · Empirical" },
    ],
    context: {
      heading: "An empirical study on AI investment and firm competitiveness",
      body:
        "The paper investigates whether AI capital expenditure translates into measurable market competitiveness, and how production efficiency plus human–machine interaction moderate that relationship. The analysis uses firm-level panel data from manufacturing and quantifies three transmission channels: direct ROI, efficiency spillover, and human–machine complementarity.",
      role: "Co-author · empirical modelling, data analysis, theoretical framework", // [confirm] exact contribution split
      stack: "Python · Stata · Panel regression · Theoretical framework design",
    },
    problem: {
      heading: "Existing research had not quantified the human–machine moderation channel",
      body:
        "Most prior work treats AI investment as a black box that improves performance. The gap: no decomposition of which intermediate mechanism — pure efficiency gain vs. human–machine collaboration — actually carries the competitiveness effect.",
      bullets: [
        "AI investment does not mechanically translate into competitiveness — the literature is mixed.",
        "Production efficiency alone cannot explain the variance in firm-level outcomes.",
        "Human–machine interaction is rarely modelled as a measurable moderator rather than a narrative.",
      ],
    },
    approach: {
      heading: "Decompose AI investment into three transmission channels",
      body:
        "Built a firm-level model isolating (1) direct ROI of AI capital, (2) efficiency spillover into production, and (3) human–machine interaction as a moderator. Used panel regression with industry fixed effects to estimate each channel's marginal contribution to market competitiveness.",
      steps: [
        "Literature Review",
        "Hypothesis Design",
        "Panel Data Modelling",
        "Empirical Analysis",
      ],
      tags: ["Panel regression", "Moderation analysis", "Manufacturing data", "IMMS 2025"],
    },
    results: {
      heading: "Three transmission channels, each with a distinct effect size",
      metrics: [
        { value: "3", label: "Transmission channels", note: "Direct · Efficiency · HMI" },
        { value: "✓", label: "HMI moderator", note: "Statistically significant" }, // [confirm] exact coefficient
        { value: "1", label: "Proceedings paper", note: "IMMS 2025, presented" },
      ],
    },
    materials: {
      heading: "Author presentation (19 slides)",
      body:
        "The author presentation slides shown as an image gallery.",
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
        { value: "36", label: "Slide deck", note: "national finals round" },
      ],
    },
    materials: {
      heading: "Presentation slides (36)",
      body: "The national finals presentation shown as an image gallery.",
      slides: makeSlides("rebecca", 36),
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
        { value: "20", label: "Slide deck", note: "small-track entry" },
      ],
    },
    materials: {
      heading: "Presentation slides (20)",
      body: "The small-track presentation shown as an image gallery.",
      slides: makeSlides("angu", 20),
    },
  },

  // =========================================================
  // 06 — e同游 工行杯 (Competition · ICBC Cup)
  // =========================================================
  {
    slug: "icbc-etongyou",
    number: "06",
    title: "eTongYou",
    titleEn: "ICBC Cup · Fujian Provincial Excellence Award",
    shortName: "eTongYou",
    eyebrow: ["ICBC CUP", "COMPETITION", "2024"],
    subtitle:
      "An outbound-tourism financial-service concept recognised with the Fujian Provincial Excellence Award — designed for cross-border payment and travel-finance scenarios.", // [confirm] user's role — cover only shows 2 names 陈昕+翁永婷
    badges: [
      { type: "award", text: "◆ Provincial Excellence" },
      { type: "role", text: "► Co-author" }, // [confirm] user's role — only 2 names on cover
      { type: "neutral", text: "Outbound tourism" },
    ],
    context: {
      heading: "A travel-finance concept for the outbound-tourism wave",
      body:
        "eTongYou is a concept for an outbound-tourism financial service — covering cross-border payment, multi-currency accounts, and travel-finance products — aimed at the growing wave of Chinese outbound travellers. The ICBC Cup entry framed it as a bank-led service design rather than a standalone fintech app.",
      role: "Co-author · service design + financial-product framing", // [confirm] user's role — cover shows 陈昕 + 翁永婷 only
      stack: "Service design · Cross-border payment · Travel finance · Bank-led model",
    },
    problem: {
      heading: "Outbound travellers hit friction at every payment touchpoint",
      body: "",
      bullets: [
        "<b>Multi-currency fragmentation</b> — travellers carry several single-currency instruments.",
        "<b>High FX and withdrawal fees</b> at point-of-sale abroad.",
        "<b>No unified travel-finance product</b> bundling insurance, credit, and FX.",
        "<b>Bank-side data silos</b> prevent personalised travel-finance advice.",
      ],
    },
    approach: {
      heading: "A bank-led service design bundling payment, credit, and travel finance",
      body:
        "Designed an outbound-tourism financial service anchored on a multi-currency account, with a travel-finance product bundle (FX, insurance, credit) layered on top. The bank-led framing let the concept reuse ICBC's existing rails and compliance infrastructure.",
      steps: [
        "Traveller Research",
        "Service Design",
        "Product Bundle",
        "Bank-led Compliance",
      ],
      tags: ["Service design", "Cross-border payment", "Travel finance", "Bank-led model"],
    },
    results: {
      heading: "Fujian Provincial Excellence Award",
      body: "",
      metrics: [
        { value: "◆", label: "Provincial Excellence", note: "Fujian province" },
        { value: "2", label: "Team members", note: "Chen Xin · Weng Yongting" },
        { value: "33", label: "Slide deck", note: "concept deck" },
      ],
    },
    materials: {
      heading: "Presentation slides (33)",
      body: "The concept presentation shown as an image gallery.",
      slides: makeSlides("icbc-etongyou", 33),
    },
  },

  // =========================================================
  // 07 — Period (existing project, migrated to V5)
  // =========================================================
  {
    slug: "period",
    number: "07",
    title: "Period",
    titleEn: "AI-Assisted Personalized Health Application",
    shortName: "Period",
    eyebrow: ["AI PRODUCT", "PERSONAL PROJECT", "2026"],
    subtitle:
      "An AI-assisted personalized health application for women's daily physical and emotional health management — recording cycle, symptoms, mood, and medication, then providing personalized insights and conversational support with explicit safety boundaries.",
    badges: [
      { type: "role", text: "► Designer" },
      { type: "neutral", text: "LLM + Rule logic" },
      { type: "neutral", text: "Live demo" },
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
  // 08 — Refund Processing Automation (existing, migrated to V5)
  // =========================================================
  {
    slug: "refund-processing-automation",
    number: "08",
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
  // 09 — SalesPilot (Hackathon · NUS-ISS Show Me Your Agents)
  // 内容迁移自远程 projects.js 的 8-section 数据；遵循其诚实标注：
  // 进行中的黑客松项目，无已确认的公开 demo/GitHub 链接。
  // =========================================================
  {
    slug: "salespilot",
    number: "09",
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
    // 无幻灯片区 — 以演示视频 + 部署环境作为 proof
  },

  // =========================================================
  // 10 — Grounded Enterprise Policy & Procedure Assistant (Individual · Prototype)
  // 内容迁移自远程 projects.js 的 8-section 数据；无生产部署/指标声明。
  // =========================================================
  {
    slug: "grounded-enterprise-policy-assistant",
    number: "10",
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
    // 无 deck/材料区块；无公开链接 — 均未确认
  },

  // =========================================================
  // 11 — Health Insurance Claim Decision Agent (PE6201 A2 · 团队项目)
  // 内容迁移自远程 projects.js；严格保留贡献边界标注：
  // 用户负责 evaluation harness + 安全测试，不是核心 agent 架构。
  // =========================================================
  {
    slug: "health-insurance-claim-decision-agent",
    number: "11",
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
  // 12 — Singapore Rental Intelligence Copilot (NTU Generative AI · 团队项目)
  // 内容迁移自远程 projects.js；保留贡献边界：报告整合 + Stage 5 原型 + Stage 6 评测。
  // =========================================================
  {
    slug: "singapore-rental-intelligence-copilot",
    number: "12",
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
    // 无 deck/材料区块 — 有 Open Demo 外链
  },
];

export function getCaseDetailProject(slug) {
  return caseDetailProjects.find((p) => p.slug === slug);
}
