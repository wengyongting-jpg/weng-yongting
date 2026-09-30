// V5 项目详情数据 — 7 区块结构。
// 旧的 src/data/projects.js (8-section) 仍被 Work.jsx 列表页使用；
// CaseStudy.jsx 详情页只读这个文件。
//
// 内容来源：c:\Users\Administrator\Desktop\新建文件夹\_extract\ 下的 JSON/txt
// 标注 [confirm] 的字段表示审计发现存疑，等待用户确认后替换。
//
// 幻灯片 PNG 由 _extract/render_slides.py 生成（1600x900），
// 存放在 public/projects/<slug>/slides/slide-NN.png。
// 原始 deck PDF 复制为 public/projects/<slug>/deck.pdf。

// 生成幻灯片 URL 数组的辅助函数
function makeSlides(slug, count) {
  return Array.from({ length: count }, (_, i) =>
    `/projects/${slug}/slides/slide-${String(i + 1).padStart(2, "0")}.png`
  );
}

// 各项目 PDF 大小（MB，已计算）
const PDF_SIZE = {
  zhiyi: "15.2MB",
  rebecca: "7.1MB",
  "mm118-paper": "1.8MB",
  "commercial-launch": "4.4MB",
  angu: "46.6MB",
  "icbc-etongyou": "1.7MB",
};

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
      heading: "Author deck & paper PDF",
      body:
        "19-slide author presentation and the published paper. Scroll vertically to walk through the deck.",
      slides: makeSlides("mm118-paper", 19),
      deckUrl: "/projects/mm118-paper/deck.pdf",
      appendixUrl: "/projects/mm118-paper/deck.pdf",
      appendixSize: PDF_SIZE["mm118-paper"],
    },
  },

  // =========================================================
  // 02 — 智一数科 (Competition · Challenge Cup 2024)
  // =========================================================
  {
    slug: "zhiyi",
    number: "02",
    title: "智一数科",
    titleEn: "Digital Marketing & Big-Data Cloud Platform",
    shortName: "智一数科",
    eyebrow: ["CHALLENGE CUP", "COMPETITION", "2024"],
    subtitle:
      "A bilingual RAG co-pilot built for a regional data-services provider, lifting proposal-generation accuracy from 62.5% to 90% across three eval rounds.", // [confirm] metrics are placeholders
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
        "智一数科 (Zhiyi Digital) provides one-stop digital marketing and big-data cloud services for the beauty and fast-moving consumer goods sectors. The Challenge Cup entry proposed an AI+SaaS layer combining personalised marketing-content generation, big-data analytics, and short-video ad delivery, with ByteDance as the upstream platform partner.",
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
      heading: "Challenge Cup deck (27 slides)",
      body:
        "Full deck presented at the 2024 Challenge Cup. Scroll vertically to walk through the case study.",
      slides: makeSlides("zhiyi", 27),
      deckUrl: "/projects/zhiyi/deck.pdf",
      appendixUrl: "/projects/zhiyi/deck.pdf",
      appendixSize: PDF_SIZE.zhiyi,
    },
  },

  // =========================================================
  // 03 — 瑞贝卡 Rebecca (Competition · Business Elite Challenge)
  // =========================================================
  {
    slug: "rebecca",
    number: "03",
    title: "瑞贝卡 Rebecca",
    titleEn: "National Collegiate Business Elite Challenge",
    shortName: "瑞贝卡",
    eyebrow: ["BUSINESS ELITE CHALLENGE", "COMPETITION", "2024"],
    subtitle:
      "Strategic advisory work for Rebecca (假发品牌) — re-architecting the export go-to-market for a beauty accessories brand facing channel saturation.", // [confirm] user's role per materials = 翁永婷 = 战略总监
    badges: [
      { type: "award", text: "◆ National Finalist" }, // [confirm] award level — materials only say 全国总决赛
      { type: "role", text: "► 战略总监" }, // [confirm] per materials
      { type: "neutral", text: "Cross-disciplinary team" },
    ],
    context: {
      heading: "Strategic re-positioning for an export-driven hair brand",
      body:
        "瑞贝卡 is a Chinese manufacturer of synthetic and human-hair wigs and extensions, historically reliant on B2B export. The case asked for a refreshed market entry strategy covering channel mix, brand localisation for overseas consumers, and a financial model for the proposed re-positioning.",
      role: "战略总监 · responsible for overseas market strategy + brand localisation",
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
        { value: "36", label: "Slide deck", note: "全国总决赛" },
      ],
    },
    materials: {
      heading: "National finals deck (36 slides)",
      body: "Full deck from the national finals round. Scroll vertically to walk through.",
      slides: makeSlides("rebecca", 36),
      deckUrl: "/projects/rebecca/deck.pdf",
      appendixUrl: "/projects/rebecca/deck.pdf",
      appendixSize: PDF_SIZE.rebecca,
    },
  },

  // =========================================================
  // 04 — 商业发射 Commercial Launch (Case study)
  // =========================================================
  {
    slug: "commercial-launch",
    number: "04",
    title: "商业发射 Commercial Launch",
    titleEn: "Industry research & launch strategy",
    shortName: "商业发射",
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
      heading: "Industry briefing (24 slides)",
      body: "Full PDF briefing. Scroll vertically to walk through the case.",
      slides: makeSlides("commercial-launch", 24),
      deckUrl: "/projects/commercial-launch/deck.pdf",
      appendixUrl: "/projects/commercial-launch/deck.pdf",
      appendixSize: PDF_SIZE["commercial-launch"],
    },
  },

  // =========================================================
  // 05 — 昂钰 Angyu (Competition · 小挑)
  // =========================================================
  {
    slug: "angu",
    number: "05",
    title: "昂钰精工 Angyu Precision",
    titleEn: "Challenge Cup · Small Track",
    shortName: "昂钰",
    eyebrow: ["CHALLENGE CUP · 小挑", "COMPETITION", "2024"],
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
        "昂钰精工 is a precision-manufacturing SME producing industrial components. The project asked for an export-oriented go-to-market and brand-localisation approach for overseas industrial customers, anchored on the company's existing manufacturing capability and patent portfolio.",
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
      heading: "Challenge Cup deck (20 slides)",
      body: "Full deck from the small-track entry. Scroll vertically to walk through.",
      slides: makeSlides("angu", 20),
      deckUrl: "/projects/angu/deck.pdf",
      appendixUrl: "/projects/angu/deck.pdf",
      appendixSize: PDF_SIZE.angu,
    },
  },

  // =========================================================
  // 06 — e同游 工行杯 (Competition · ICBC Cup)
  // =========================================================
  {
    slug: "icbc-etongyou",
    number: "06",
    title: "e同游",
    titleEn: "ICBC Cup · Fujian Provincial Excellence Award",
    shortName: "e同游",
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
        "e同游 (\"e-travel-together\") is a concept for an outbound-tourism financial service — covering cross-border payment, multi-currency accounts, and travel-finance products — aimed at the growing wave of Chinese outbound travellers. The ICBC Cup entry framed it as a bank-led service design rather than a standalone fintech app.",
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
        { value: "2", label: "Team members", note: "陈昕 · 翁永婷" },
        { value: "33", label: "Slide deck", note: "concept deck" },
      ],
    },
    materials: {
      heading: "Concept deck (33 slides)",
      body: "Full PDF concept deck. Scroll vertically to walk through.",
      slides: makeSlides("icbc-etongyou", 33),
      deckUrl: "/projects/icbc-etongyou/deck.pdf",
      appendixUrl: "/projects/icbc-etongyou/deck.pdf",
      appendixSize: PDF_SIZE["icbc-etongyou"],
    },
  },

  // =========================================================
  // 07 — Yuexi (existing project, migrated to V5)
  // =========================================================
  {
    slug: "yuexi",
    number: "07",
    title: "Yuexi",
    titleEn: "AI-Assisted Personalized Health Application",
    shortName: "Yuexi",
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
    // No PPT/PDF deck for Yuexi — omit materials block
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
];

export function getCaseDetailProject(slug) {
  return caseDetailProjects.find((p) => p.slug === slug);
}
