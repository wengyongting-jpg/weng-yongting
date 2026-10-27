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
        insight: "value travels through a mechanism, not the model itself — which is why I now design the mechanism (context injection, rule boundaries) instead of just the prompt.",
      },
      {
        title:
          "AI Investment and Market Competitiveness: The Roles of Human–Machine Interaction and Production Efficiency",
        venue: "IMMS 2025 Proceedings",
        pages: "p. 308",
        note: "Paper 2 · Competitiveness pathway: AI investment → market competitiveness, carried by human–machine interaction and production efficiency (moderation model)",
        insight: "AI spend only converts through the interaction and efficiency channels it flows through — which is why my evaluation sections measure the pathway, not just the outcome.",
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
      "One-stop digital effect-marketing service built on an in-house big-data SaaS platform — AI content production, multi-channel analytics, and short-video delivery as an authorised ByteDance service provider.", // [confirm] tech-lead role & stack below not named in deck
    badges: [
      { type: "award", text: "◆ National Silver" },
      { type: "role", text: "► Tech Lead" }, // [confirm] user not named in deck
      { type: "neutral", text: "5-person team" },
      { type: "neutral", text: "6-month build" },
    ],
    context: {
      heading:
        "A connector between platform traffic and businesses that cannot use it",
      body:
        "Zhiyi Digital is a student-founded digital-marketing service company positioned in the gap between big traffic platforms and brands: platforms provide the tools, but most SMEs lack the data analysis, content production, and delivery operations to use them. As an authorised ByteDance service provider, the team packaged platform-side capability into three service lines — full-case digital marketing, AI creative content production, and big-data cloud analytics SaaS — serving head brands with custom engagements and SMEs with standardised tooling.",
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
        "Reported metrics from the pilot deck. Conversion and ROI figures confirmed from the pilot deck. Traffic-delivery volume is the company's reported cumulative figure.", // [confirm] 转化率 85% likely typo (industry std 1–10%); ROI ¥179-190 likely should be 1.79-1.90 (decimal)
      metrics: [
        { value: "8.5%", label: "Conversion rate", note: "pilot reported" },
        { value: "1.79–1.90×", label: "Avg campaign ROI", note: "pilot reported" },
        { value: "42", label: "Clients onboarded", note: "↑ from pilot of 8" },
        { value: "1B+", label: "Cumulative traffic delivered", note: "company-reported" },
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
      "Full-case diagnosis and strategy re-architecture for a listed hair-products manufacturer — from OEM export dependence to a brand-led, finance-grounded global playbook.", // [confirm] user's role per materials = 翁永婷 = Strategy Director
    badges: [
      { type: "award", text: "◆ National Finalist" }, // [confirm] award level — materials only say 全国总决赛
      { type: "role", text: "► Strategy Director" }, // [confirm] per materials
      { type: "neutral", text: "Cross-disciplinary team" },
    ],
    context: {
      heading: "A full-chain teardown of the hair-products industry before touching the company",
      body:
        "Rebecca is a listed Chinese manufacturer of synthetic and human-hair wigs, historically reliant on B2B export. The team first mapped the full value chain — scarce human-hair supply upstream, labour-intensive manufacturing midstream, and split B2B/B2C demand downstream — then segmented demand by region: Africa buys on value-for-money, the Americas sits behind brand barriers, and the domestic market is shifting from functional (hair loss) to fashion-driven purchase. That market logic became the baseline for every strategic recommendation that followed.",
      role: "Strategy Director · responsible for overseas market strategy + brand localisation",
      stack: "Market research · Financial modelling · Brand strategy · Go-to-market",
    },
    problem: {
      heading: "Export-only growth had plateaued and brand equity was invisible to end consumers",
      body: "",
      bullets: [
        "<b>Working capital trapped in inventory</b> — poor stock turnover and mounting pileups pressed cash flow while gross margin kept sliding.",
        "<b>OEM dependence</b> — revenue from contract manufacturing with no own-brand presence in the high-barrier Americas market.",
        "<b>Ageing domestic marketing</b> — legacy channels and weak new-media operations left the online channel's potential untapped.",
        "<b>Blind diversification</b> — capital scattered into non-core real-estate and cultural-tourism ventures while the core product aged away from younger consumers.",
      ],
    },
    approach: {
      heading: "Four strategy modules, from supply chain to organisation",
      body:
        "Built the re-architecture in four modules: (1) operations — ERP digitisation, finance-business integration, IPD product development, a digital factory, and hedging to offset raw-material and FX swings; (2) brand — graduate from OEM to an owned global label with region-specific positioning; (3) channel — overseas social matrix (TikTok / Instagram / YouTube) plus domestic Xiaohongshu and Douyin content, D2C independent site, and offline flagship upgrades; (4) organisation — divest non-core businesses, refocus on the hair category, rejuvenate product design, and build the talent system.",
      steps: [
        "Industry & PEST Analysis",
        "Financial Deep-Dive",
        "Strategy Modules",
        "Implementation Roadmap",
      ],
      tags: ["Value-chain teardown", "Financial diagnosis", "Omnichannel GTM", "Org & product refocus"],
    },
    results: {
      heading: "A transferable playbook, validated at the national finals",
      body:
        "Reached the national finals of the Business Elite Challenge. Beyond the placement, the framework — full-chain teardown, financial deep-dive, modular strategy — applies to any Chinese light-manufacturing exporter moving from OEM to brand.",
      metrics: [
        { value: "4", label: "Strategy modules", note: "ops · brand · channel · org" },
        { value: "3", label: "Regional demand logics", note: "Africa · Americas · domestic" },
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
      "Challenge Cup venture entry for a precision rebar manufacturer — upgrading domestic production with in-house rolling and heat-treatment equipment, then exporting products plus process know-how along the Belt & Road.", // [confirm] user not named in PPT team list
    badges: [
      { type: "role", text: "► Project Lead" }, // [confirm] per competitions.js existing entry says "Project Lead: Angyu Precision"
      { type: "neutral", text: "Export GTM" },
      { type: "neutral", text: "Belt & Road" },
    ],
    context: {
      heading: "Turning a precision-steel process advantage into a two-market business",
      body:
        "Angyu Precision makes high-precision threaded rebar used in bridges and coal-mine anchoring, based in Handan — China's fastener capital. The company built two core systems in-house: a 6/18-stand rolling mill and a full-around ion-nitriding heat-treatment device, backed by 11 patents (4 invention + 7 utility) and 15 authoritative test certifications. The business runs a dual-track model: domestic infrastructure supply (including the Gansu S24/25 highway works) and Belt & Road export into Vietnam and Malaysia — selling not just steel but the production process and quality-control know-how, with overseas warehouse and factory support. The entry asked how to grow that overseas presence from manufacturing capability into a defensible market position.",
      role: "Project Lead · market research, export GTM, brand localisation, product visuals",
      stack: "Market research · Go-to-market · Brand localisation · Negotiation",
    },
    problem: {
      heading: "A process advantage the market could not see — and an industry competing it away",
      body: "",
      bullets: [
        "<b>Homogeneous low-precision supply</b> — widespread substandard threaded rebar has been a root cause of bridge and coal-mine anchoring failures, yet quality differences were invisible to buyers.",
        "<b>Low-price involution</b> — regional competitors competed the category down to commodity pricing, punishing exactly the players who invested in precision.",
        "<b>Uncashed differentiation</b> — the patent portfolio and certifications existed on paper but had not been converted into an export story that industrial buyers would pay for.",
        "<b>Thin overseas reach</b> — manufacturing capability far outpaced channel presence and brand recognition among priority industrial buyers abroad.",
      ],
    },
    approach: {
      heading: "Product + technology dual export, positioned away from the price war",
      body:
        "Led market and user research, then built the export strategy around the one thing commodity rivals could not copy: the process. Positioning led with patented equipment and test certifications rather than price; offer design bundled customised material specifications per country's engineering requirements with overseas warehouse and technical-support models; and product visuals were designed for overseas industrial buyers. Ran 6 enterprise-partner negotiation cycles with project tracking to test the positioning in real deals.",
      steps: [
        "Market Research",
        "Export GTM",
        "Product Visuals",
        "Partner Negotiation",
      ],
      tags: ["Export GTM", "Process differentiation", "Belt & Road", "Enterprise partnerships"],
    },
    results: {
      heading: "Negotiation pipeline and overseas positioning established",
      body:
        "The dual-track positioning held in practice: the company reports a profitable, growing business across domestic infrastructure and Southeast Asian export, with overseas cooperation projects creating 1,000+ local jobs (company-reported).",
      metrics: [
        { value: "11", label: "Patents", note: "4 invention + 7 utility" },
        { value: "15", label: "Test certifications", note: "authoritative labs" },
        { value: "6", label: "Negotiation cycles", note: "enterprise partners" },
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
      { label: "PRD DOCUMENT", url: `${import.meta.env.BASE_URL}projects/period/prd.html` },
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
    competition: {
      heading: "Existing options leave the personal-context gap unaddressed",
      rows: [
        {
          name: "Clue / Flo",
          approach: "Cycle tracking with a template content library — users in the same phase see the same articles.",
          difference: "Every Period response is grounded in the user's own logged cycle, symptoms and mood via context injection.",
        },
        {
          name: "Generic LLM chatbot",
          approach: "Fluent conversation, but no data model of the user and no enforced safety boundary.",
          difference: "Hybrid architecture: deterministic cycle math plus rule-enforced boundaries the model cannot cross.",
        },
        {
          name: "Content communities",
          approach: "Crowd-sourced advice in a feed; quality varies and the data model is built for engagement, not privacy.",
          difference: "Structured personal records stay in a private schema — no feed, no ad targeting.",
        },
      ],
    },
    decisions: [
      {
        question: "Pure LLM conversation, or a hybrid architecture?",
        options: "A · LLM end-to-end — fastest to build, but cycle math by a probabilistic model is not auditable. B · Deterministic engine for calculations, LLM only for communication.",
        chosen: "B — accuracy-critical logic must be reproducible; the LLM only adds personalisation and tone.",
        evidence: "Cycle phase math has exactly one right answer; a model that 'usually gets it right' is not acceptable in health.",
        validation: "Scripted safety test cases; target zero out-of-boundary responses.",
      },
      {
        question: "Free-text health journaling, or structured data models?",
        options: "A · Free-form journal entries — flexible but not queryable. B · Structured schema for cycle, symptoms, mood, medication.",
        chosen: "B — personalisation requires fields the system can compute over, and sensitive data needs an explicit schema.",
        evidence: "Context injection can only anchor to what is actually recorded and retrievable.",
        validation: "Check in testing whether insights reference the user's recorded fields, not generic knowledge.",
      },
      {
        question: "Model-decided caution, or explicit rule boundaries?",
        options: "A · Prompt instructions asking the model to be careful. B · Rule-enforced boundaries: no diagnosis, no medication advice.",
        chosen: "B — boundaries enforced by rules, not by model discretion.",
        evidence: "A confident wrong answer in a health-adjacent product is a safety risk, not a UX bug.",
        validation: "Safety suite runs before any prompt change ships.",
      },
    ],
    workflow: {
      heading: "From a daily log to a personalised, bounded insight",
      nodes: [
        {
          label: "Daily Log",
          tagline: "Structured input",
          input: "Cycle, symptoms, mood, medication recorded with structured fields.",
          output: "Queryable personal health record.",
          rules: "Structured schema only — no free-text health data.",
          exception: "Skipped days are kept explicit; missing data is never inferred.",
        },
        {
          label: "Deterministic Engine",
          tagline: "Cycle math",
          input: "Recorded cycle history.",
          output: "Current phase, day of cycle, rule-based scores.",
          rules: "Reproducible calculations — same input, same result, every time.",
          exception: "Irregular cycle history → output marked low-confidence, never smoothed over.",
        },
        {
          label: "Context Injection",
          tagline: "Anchor to the person",
          input: "Computed phase + recent logs + user question.",
          output: "Grounded prompt context for the LLM.",
          rules: "Only recorded data enters the context — no generic assumptions.",
          exception: "Thin record → the response says what is missing instead of guessing.",
        },
        {
          label: "LLM Insight Layer",
          tagline: "Personalised wording",
          input: "Grounded context.",
          output: "Personalised insight in conversational language.",
          rules: "LLM handles personalisation and tone, never the calculation.",
          exception: "Response touching diagnosis / medication → blocked before display.",
        },
        {
          label: "Safety Boundary Check",
          tagline: "Rule-enforced",
          input: "Draft LLM response.",
          output: "Released insight, or a safe redirect.",
          rules: "Explicit rules: no diagnosis, no medication advice.",
          exception: "Boundary hit → respond with scope statement and suggest professional care.",
        },
      ],
    },
    evaluation: {
      heading: "Live demo shipped — measurement is the next milestone",
      body:
        "The key design decision: the architecture — not the prompt — is what makes an LLM safe to ship in health-adjacent products. The demo is live, but no analytics are instrumented yet, so the figures below are explicit targets with a collection plan — not observed results.",
      disclaimer: "Live demo at period-ai.vercel.app — no usage analytics instrumented yet. Metrics below are design targets, not measured results.",
      metrics: [
        { value: "Daily logging rate", label: "North Star (target)", note: "collected via funnel instrumentation — next step" },
        { value: "0", label: "Out-of-boundary responses (target)", note: "in the scripted safety test suite" },
        { value: "5–8", label: "User interviews (planned)", note: "pain-point validation before further build" },
      ],
    },
    iteration: {
      heading: "Validate the pain before building further",
      now: [
        "Run 5–8 user interviews to validate the pain-point assumptions behind the feature set.",
        "Instrument the logging funnel (open → record → insight viewed) on the live demo.",
      ],
      next: [
        "Read the funnel drop-off to decide what to fix first.",
        "Expand the scripted safety suite; add regression checks before any prompt change.",
      ],
      later: [
        "Trend view across cycles (P1) once consistent logging is evidenced.",
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
      { label: "PRD DOCUMENT", url: `${import.meta.env.BASE_URL}projects/refund-processing-automation/prd.html` },
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
    competition: {
      heading: "Existing approaches split into slow-but-safe or fast-but-brittle",
      rows: [
        {
          name: "Manual processing",
          approach: "Staff read each receipt and key in fields — consistent judgement, but slow and repetitive.",
          difference: "Extraction and validation are automated; humans only see cases where judgement is actually needed.",
        },
        {
          name: "Traditional RPA",
          approach: "Rule-based bots process every document the same way; exceptions break the run or pass through silently.",
          difference: "A confidence threshold makes uncertainty explicit and routes borderline cases to review instead of failing.",
        },
        {
          name: "Helpdesk macros",
          approach: "Template replies speed up responses, but humans still extract and check document data by hand.",
          difference: "Document Understanding structures the data first — automation works on fields, not raw text.",
        },
      ],
    },
    decisions: [
      {
        question: "Automate everything, or stop at a confidence boundary?",
        options: "A · Full automation — fastest, but exceptions get wrong outcomes silently. B · A confidence threshold routes uncertain cases to humans.",
        chosen: "B — the automation boundary is the product. Where it sits matters more than how much is automated.",
        evidence: "Rule violations and low-confidence extractions genuinely need judgement; a wrong refund is a direct loss.",
        validation: "Demo walkthrough routes scripted low-confidence cases to the review queue.",
      },
      {
        question: "Extract every field on the receipt, or a minimum viable set?",
        options: "A · Capture everything — complete but more failure surface. B · Six fields that drive the refund decision.",
        chosen: "B — Receipt ID, Merchant, Date, Total Amount, Refund Reason, Confidence. Nothing more until reviewers ask for it.",
        evidence: "These are the fields the validation rules actually consume; extra fields add extraction errors without decisions.",
        validation: "If reviewers repeatedly request a missing field, add it — driven by review behaviour, not speculation.",
      },
      {
        question: "Post-hoc sampling review, or in-line human-in-the-loop?",
        options: "A · Automate all cases, sample-check afterwards. B · Uncertain cases route to humans in-line, before processing.",
        chosen: "B — a wrong refund found after payout is already a loss; review must happen before the decision executes.",
        evidence: "Refund decisions are irreversible once money moves.",
        validation: "Compare reviewer correction rates by route — auto vs. escalated.",
      },
    ],
    workflow: {
      heading: "From raw document to routed decision",
      nodes: [
        {
          label: "Document Intake",
          tagline: "Receipts & forms",
          input: "Refund documents — PDFs, scans, photos.",
          output: "Document queued for extraction.",
          rules: "Standard formats accepted; file integrity checked first.",
          exception: "Unreadable file → flagged for manual entry, never guessed.",
        },
        {
          label: "Data Extraction",
          tagline: "Document Understanding",
          input: "Queued document.",
          output: "Six structured fields + confidence score.",
          rules: "UiPath Document Understanding extracts the defined field set.",
          exception: "Missing required field → completeness flag, forced review regardless of score.",
        },
        {
          label: "Rule Validation",
          tagline: "Business rules",
          input: "Structured fields.",
          output: "Pass / violation verdict per rule.",
          rules: "Each refund policy rule evaluated against the extracted fields.",
          exception: "Any rule violation → human review, no matter how high the confidence.",
        },
        {
          label: "Confidence Check",
          tagline: "The automation boundary",
          input: "Confidence score + validation verdict.",
          output: "Route decision: auto-process or human review.",
          rules: "Strict comparison — at-or-below the threshold always routes to review.",
          exception: "Borderline cases default to human, never to automation.",
        },
        {
          label: "Auto Process / Human Review",
          tagline: "Two exits",
          input: "Route decision.",
          output: "Refund processed automatically, or review queue with fields pre-filled.",
          rules: "Reviewers see the extracted fields and the reason the case was escalated.",
          exception: "Reviewer corrections logged as candidates for rule refinement.",
        },
      ],
    },
    evaluation: {
      heading: "Design-stage validation — demo walkthrough, not production metrics",
      body:
        "This is a workflow design with a recorded demo walkthrough, not a claimed production deployment. No quantified accuracy improvement, processing-time reduction, or business outcomes are stated, as none have been verified.",
      disclaimer: "Workflow design + recorded UiPath demo. Scripted demo scenarios only — no production deployment or measured business outcomes.",
      metrics: [
        { value: "6", label: "Structured fields", note: "incl. confidence score" },
        { value: "1", label: "Confidence threshold", note: "the automation boundary" },
        { value: "2", label: "Routes", note: "auto-process · human review" },
      ],
      failures: [
        {
          title: "Borderline cases defaulted to automation in early drafts",
          issue: "A case sitting exactly at the confidence threshold would have been auto-processed — the riskiest possible placement.",
          lesson: "Comparison made strict: at-or-below the boundary always routes to human review.",
        },
        {
          title: "A missing merchant field passed validation silently",
          issue: "A receipt with an unreadable merchant name still produced a complete-looking record.",
          lesson: "Required-field completeness is checked before confidence scoring — missing data forces review.",
        },
      ],
    },
    iteration: {
      heading: "From demo workflow to defensible automation",
      now: [
        "Expand the scripted demo set across more receipt formats and edge cases.",
      ],
      next: [
        "Measure per-field extraction accuracy on the demo set — tune the threshold with data instead of intuition.",
      ],
      later: [
        "Feed reviewer corrections back into extraction prompts and validation rules.",
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
      { label: "PRD DOCUMENT", url: `${import.meta.env.BASE_URL}projects/salespilot/prd.html` },
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
    competition: {
      heading: "Existing tools answer messages or analyse calls — neither ranks the inbox",
      rows: [
        {
          name: "CRM reply bots",
          approach: "Answer FAQs from templates; every message is treated independently and every customer equally.",
          difference: "SalesPilot keeps a stateful Opportunity Profile per conversation and ranks the inbox by a 0–100 score.",
        },
        {
          name: "Conversation intelligence (e.g. Gong)",
          approach: "Post-call analytics on recorded sales calls — insight arrives after the conversation has ended.",
          difference: "Scoring runs live per WhatsApp message, driving the next best action while the deal is still warm.",
        },
        {
          name: "Manual inbox triage",
          approach: "Reps scan threads and rely on memory; intent and hesitation signals stay buried in long chats.",
          difference: "Signal extraction surfaces intent, hesitation and competitor mentions with evidence attached.",
        },
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
  // 09 — Enterprise AI Assistant Suite (Policy RAG + Text-to-SQL · Individual · Prototype + Open Source)
  // 内容迁移自远程 projects.js 的 8-section 数据；评估数字来自 individual 仓库已执行的评估输出。
  // =========================================================
  {
    slug: "grounded-enterprise-policy-assistant",
    number: "04",
    title: "Enterprise AI Assistant Suite",
    titleEn: "Grounded Policy RAG + Text-to-SQL Data Agent",
    shortName: "Enterprise AI Assistant",
    eyebrow: ["ENTERPRISE AI · RAG + TEXT-TO-SQL", "INDIVIDUAL PROJECT", "2026"],
    subtitle:
      "Two enterprise assistants, one design rule — deterministic gates before any generation: a policy RAG that cites or refuses, and a Text-to-SQL agent whose JOIN paths are computed, not guessed.",
    badges: [
      { type: "neutral", text: "Prototype + Open Source" },
      { type: "role", text: "► End-to-End Builder" },
      { type: "neutral", text: "Individual project" },
    ],
    event: "Individual Project · Policy module Sept 2026 · SQL module 2026",
    links: [
      { label: "GITHUB — ENTERPRISE AI SUITE", url: "https://github.com/wengyongting-jpg/individual" },
      { label: "PRD DOCUMENT — POLICY MODULE (PDF)", url: `${import.meta.env.BASE_URL}projects/grounded-enterprise-policy-assistant/policy-assistant-prd.pdf` },
    ],
    context: {
      heading: "Two questions every enterprise keeps asking — answered with the same discipline",
      body:
        "Enterprise staff ask two kinds of questions: \"what does the policy say\" and \"what does the data show\". Both fail the same way with a generic LLM — fluent, unsourced, and wrong exactly when it matters. This suite applies one rule to both: deterministic gates run before any probabilistic generation. Module 1 is a policy RAG over a 16-document procurement corpus with a frozen-threshold decision layer (answer / clarify / abstain). Module 2 is a Text-to-SQL agent whose multi-table JOIN paths are computed by graph traversal instead of model guesswork — the join-resolution algorithm ships in the same repository (sql-table-join/) and came out of a live enterprise reporting workflow, where weekly analytical reports were assembled from a relational database through this exact split: deterministic joins from the algorithm, conditions composed by the LLM.",
      role:
        "Individual project / end-to-end builder · product definition, RAG workflow, deterministic decision layer, evaluation design; Text-to-SQL architecture, join-resolution algorithm, SQL evaluation design",
      stack: "RAG · TF-IDF · Cosine Similarity · Deterministic Decision Layer · Python · Streamlit · Text-to-SQL · Graph Traversal (BFS) · sqlglot",
    },
    problem: {
      heading: "Both assistants answer questions the company cannot afford to get wrong",
      body:
        "Employees need fast, correct answers about internal policies and about their own data. Generic LLMs answer both anyway — without evidence, without sources, and without knowing when they should not answer.",
      bullets: [
        "<b>Hallucination risk</b> — free-form LLM answers without document evidence.",
        "<b>No traceability</b> — answers cannot be checked against an authorised source.",
        "<b>Over-answering</b> — LLMs answer questions they should decline.",
        "<b>Join errors at scale</b> — single-shot Text-to-SQL guesses multi-table JOIN keys; wrong joins run successfully and return silently wrong numbers.",
        "<b>Analyst bottleneck</b> — every ad-hoc data question queues behind someone who can write SQL.",
        "<b>Stale information</b> — model priors lag behind updated policy documents and schemas.",
      ],
    },
    approach: {
      heading: "Two pipelines, one discipline: decide deterministically, then generate",
      body:
        "Module 1 (policy): documents are chunked and indexed as TF-IDF vectors; retrieved evidence passes a frozen evidence-threshold decision layer before the foundation model composes a cited answer — underspecified questions trigger clarification, uncovered topics trigger refusal. Module 2 (data): the question is parsed into business intent and fields as separate stages, JOIN paths are resolved by BFS over a declarative table-relation graph, SQL is assembled and syntax-validated with sqlglot, then executed read-only with result checks; business terms and metric definitions load on demand.",
      steps: [
        "Parse Intent",
        "Resolve Evidence / Joins",
        "Generate Under Constraints",
        "Validate & Cite",
      ],
      tags: ["RAG", "Evidence threshold", "Refusal logic", "Text-to-SQL", "BFS join resolution", "sqlglot", "Streamlit"],
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
    competition: {
      heading: "Existing options either return documents, or answer without a safety gate",
      rows: [
        {
          name: "Keyword search (SharePoint)",
          approach: "Returns documents, not answers — employees still read and interpret policy text themselves.",
          difference: "Answers are composed from retrieved passages, with every claim cited to its source section.",
        },
        {
          name: "Enterprise AI search (e.g. Glean)",
          approach: "Semantic answers at company scale, but the answering behaviour is opaque — no explicit evidence gate or refusal path.",
          difference: "Evidence sufficiency is checked before generation; insufficient evidence triggers an explicit refusal, not a best guess.",
        },
        {
          name: "Ask HR / Slack channels",
          approach: "Accurate but slow, and the same recurring questions consume expert time.",
          difference: "Routine questions self-serve; refusals route to the right human contact instead of dead-ending.",
        },
      ],
    },
    prototype: {
      inputLabel: "EMPLOYEE QUESTION",
      disclaimer: "Interactive design demo for Module 1 (policy) — simulated answers on sample policy snippets, showing the three output states (cited answer / clarification / refusal). Not a live system; Module 2's join resolution ships in the same repository (sql-table-join/).",
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
    decisionsHeading: "Why both assistants are gated before they generate",
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
      {
        question: "One-shot LLM SQL, or a staged pipeline with computed joins?",
        options: "A · Let the model write the full SQL — fast, but multi-table JOIN keys are where it invents errors. B · Split intent parsing, field identification, join resolution and generation — and compute JOIN paths from a relation graph.",
        chosen: "B — join errors are the dominant failure mode in generated SQL; graph traversal makes join resolution deterministic and testable. Once joins are computed, the remaining SQL work becomes a small, well-scoped editing task for the LLM.",
        evidence: "Wrong joins fail silently: the query runs and returns plausible-but-wrong numbers. The LLM's core weakness is not SQL syntax — it is not knowing how the tables connect.",
        validation: "Test set across single-table, multi-table JOIN, filter, aggregation and window-function cases; in live enterprise use, the split produced complex multi-table SQL with no join hallucination. Quantitative baseline-vs-staged comparison pending publication.",
      },
      {
        question: "Let the agent execute anything, or read-only with validation?",
        options: "A · Full database access — flexible, risky. B · Read-only execution plus result validation before delivery.",
        chosen: "B — the agent answers questions; it never mutates data.",
        evidence: "Data risk is asymmetric: a wrong read wastes a moment, a wrong write corrupts the record.",
        validation: "SELECT-only generation enforced; sqlglot syntax check and result shape checks before delivery.",
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
    workflow2: {
      heading: "Module 2 — from a plain-language question to validated, read-only SQL",
      nodes: [
        {
          label: "Intent Parsing",
          tagline: "Business intent first",
          input: "Plain-language data request.",
          output: "Structured intent: requested fields, filters, aggregation level.",
          rules: "Intent parsing, field identification and query-logic generation run as separate stages, so errors are caught where they occur; the router first classifies the request — metric-definition check, report query, ad-hoc analysis, or other.",
          exception: "Ambiguous metric name → clarified against the business glossary, not guessed.",
        },
        {
          label: "Field Identification",
          tagline: "Fields → tables",
          input: "Parsed intent.",
          output: "Requested fields mapped to their source tables.",
          rules: "Field-to-table mapping resolved from the schema dictionary; no invented columns.",
          exception: "Field not in schema → the request is narrowed and the user told, never hallucinated.",
        },
        {
          label: "Join Resolution",
          tagline: "Computed, not guessed",
          input: "Required source tables.",
          output: "Explicit JOIN paths with keys.",
          rules: "BFS shortest path over the declared table-relation graph; topological ordering prevents cycles; greedy base-table selection covers the most requested fields first.",
          exception: "Requested tables not connectable → explicit failure, never a fabricated join.",
        },
        {
          label: "SQL Generation & Validation",
          tagline: "LLM composes, algorithm joins",
          input: "Field list from the LLM + computed join skeleton.",
          output: "Read-only, syntax-validated SQL.",
          rules: "Two-phase split: the LLM lists required fields without naming any table; the algorithm emits the deterministic FROM/JOIN skeleton; the LLM then layers WHERE, GROUP BY and window functions on top. SELECT-only; parsed with sqlglot before it runs.",
          exception: "Parse failure → the error is surfaced and regenerated, not silently shipped.",
        },
        {
          label: "Execution & Output",
          tagline: "Read-only delivery",
          input: "Validated SQL.",
          output: "Result set saved as structured data.",
          rules: "Read-only execution; results checked for shape and completeness, then saved as files feeding downstream metric calculation and template-report rendering.",
          exception: "Empty or malformed result → returned as a diagnostic, never padded with plausible rows.",
        },
      ],
    },
    evaluation: {
      heading: "Executed evaluation — the policy module's frozen test set ran end-to-end",
      body:
        "The policy module's evaluation is a frozen 22-case set (5 normal, 5 boundary, 5 ambiguous, 5 insufficient-evidence, 2 conflicting/superseded), with thresholds calibrated on a separate 90-question set and frozen before scoring. Figures below are recomputed from the committed evaluation outputs — none is hand-entered. The SQL module ships a test set across single-table, multi-table JOIN, filter, aggregation and window-function cases; in live enterprise use, the staged pipeline generated complex multi-table SQL — joins, filters, aggregation, window functions — against a production database with no join hallucination, and every result fed automated metric calculation and template-report rendering end to end.",
      disclaimer: "Policy-module figures are from the executed run committed in the repository (gpt-4o-mini via OpenRouter, 15 model calls, ~US$0.0048 total). No user-adoption figures are claimed. SQL-module live-use validation is qualitative; the quantitative baseline-vs-staged execution-success comparison is pending publication.",
      metrics: [
        { value: "22/22", label: "Routing actions", note: "vs 54.5% for both baselines" },
        { value: "17/17", label: "Evidence grounding", note: "scorable cases" },
        { value: "10/12", label: "Citation-grounded answers", note: "human-graded; 2 disclosure failures" },
        { value: "10/10", label: "Non-answerable handled", note: "5/5 clarify + 5/5 abstain" },
      ],
      failures: [
        {
          title: "Correct routing did not guarantee complete disclosure (TC21)",
          issue: "A superseded policy edition was retrieved and cited, but the answer text failed to flag that the rule had been superseded.",
          lesson: "Disclosure is part of correctness — answer validation now checks that supersession/conflict evidence changes the wording, not just the routing.",
        },
        {
          title: "A genuine cross-document conflict got flattened (TC22)",
          issue: "Two policy documents contradict each other on gift acceptance; the answer reduced the conflict to a bare 'No.'",
          lesson: "The prompt now requires both sources cited explicitly, instead of silently picking one side.",
        },
      ],
    },
    iteration: {
      heading: "From validated suite to trustworthy internal tool",
      now: [
        "Publish the SQL module's execution-success comparison (baseline vs staged pipeline) on the JOIN test set.",
      ],
      next: [
        "Move the policy module from TF-IDF to dense retrieval once logged questions show vocabulary-mismatch failures.",
        "Pressure-test the SQL pipeline on a real warehouse schema beyond the declared relation graph.",
      ],
      later: [
        "Multi-document synthesis for questions spanning several policies.",
        "Coverage-gap report: topics employees ask about that no policy document answers.",
      ],
      postmortem: {
        heading: "An honest scale-down note",
        body:
          "The policy grounding corpus is self-written synthetic policy text, not a real company's document set — a deliberate scoping decision that kept the project buildable, but it caps what it can claim: retrieval quality depends entirely on corpus coverage, and in a real enterprise the corpus is a moving target whose responsible maintenance requires a content-ops function and a legal review loop an individual project cannot sustain. The SQL module's ceiling is different: the join-resolution algorithm has already run in a live enterprise workflow for read-only analytical queries, but the public version ships a hand-declared relation graph rather than a production schema with drift, permissions, and cost constraints. Both modules therefore stop short of claiming production ownership by design: they demonstrate the gated architecture and their evaluation methods, while pressure-testing on real, anonymised policy documents and maintaining a live schema stay on the roadmap rather than being claimed as done.",
      },
    },
    // 无 deck；有 PRD 文档 PDF 链接
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
      { label: "EVALUATION DESIGN DOC", url: `${import.meta.env.BASE_URL}projects/health-insurance-claim-decision-agent/prd.html` },
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
    competition: {
      heading: "Existing approaches trade speed for safety — the design goal is both",
      rows: [
        {
          name: "Manual claim review",
          approach: "Human adjusters bring judgement but are slow, and quality varies with experience.",
          difference: "The agent handles structured first-pass decisions; ambiguous or adversarial cases escalate by design.",
        },
        {
          name: "Pure rules engine",
          approach: "Deterministic and auditable, but brittle on unstructured claim narratives.",
          difference: "LLM reasoning handles narrative input while guardrails keep decisions inside policy rules.",
        },
        {
          name: "LLM agent without guardrails",
          approach: "Flexible, but can produce unsupported or unsafe decisions on hostile inputs.",
          difference: "A 40-case scripted suite with hostile-input scenarios makes unsafe behaviour visible before it ships.",
        },
      ],
    },
    decisionsHeading: "Decisions inside the evaluation work I co-owned",
    decisions: [
      {
        question: "Live-model testing only, or scripted + live dual-layer evaluation?",
        options: "A · Live-model runs only — realistic, but results drift and cannot be compared across versions. B · A scripted case layer plus live-model evaluation.",
        chosen: "B — scripted cases make behaviour reproducible; live runs show how the model actually behaves.",
        evidence: "Version-to-version comparison requires fixed cases with expected outcomes.",
        validation: "40-case shared suite, each case carrying an expected outcome.",
      },
      {
        question: "Happy-path test cases, or hostile inputs by design?",
        options: "A · Test the flows users are supposed to follow. B · Include adversarial, ambiguous and escalation-triggering inputs as first-class cases.",
        chosen: "B — for claim decisions, unsafe behaviour must surface in testing, not production.",
        evidence: "Adversarial inputs must not produce unsupported claim decisions; ambiguous cases must escalate safely.",
        validation: "Six hostile-input and escalation cases (CLM-8941 … CLM-9026) designed within the shared suite.",
      },
      {
        question: "Narrative test notes, or transactional result records?",
        options: "A · Written notes after each test round. B · Transactional result writing with session-based history.",
        chosen: "B — reproducible records are what make behaviour comparable across releases.",
        evidence: "The v3.0 repository supports session-based history and comparison.",
        validation: "Any case whose outcome changed between versions is directly visible.",
      },
    ],
    workflow: {
      heading: "A repeatable evaluation pipeline",
      nodes: [
        {
          label: "Scripted Case",
          tagline: "From the 40-case suite",
          input: "Claim scenario with a defined expected outcome.",
          output: "Case driving the agent run.",
          rules: "Hostile-input cases additionally carry a safety expectation.",
          exception: "Case without expected outcome → not comparable, excluded from scoring.",
        },
        {
          label: "Agent Decision",
          tagline: "Team-built core loop",
          input: "Claim scenario.",
          output: "Proposed claim decision with reasoning.",
          rules: "Core agent loop and insurance tools — shared team work.",
          exception: "Incomplete claim data → agent should request or escalate, not assume.",
        },
        {
          label: "Guardrail Check",
          tagline: "Safety gate",
          input: "Proposed decision.",
          output: "Pass / blocked verdict.",
          rules: "Guardrails constrain decisions to policy rules.",
          exception: "Unsafe or unsupported decision → blocked and logged for analysis.",
        },
        {
          label: "Outcome Comparison",
          tagline: "Expected vs actual",
          input: "Decision + expected outcome.",
          output: "Comparison record written transactionally.",
          rules: "Results comparable across versions and runs.",
          exception: "Mismatch → routed to failure analysis.",
        },
        {
          label: "Failure Analysis / Escalation",
          tagline: "Failures are data",
          input: "Mismatch or blocked case.",
          output: "Documented failure with reproduction path.",
          rules: "Ambiguous cases must escalate safely, never guess.",
          exception: "Repeated failure pattern → guardrail or prompt change proposed.",
        },
      ],
    },
    iteration: {
      heading: "Where the evaluation work goes next",
      now: [
        "Broaden the hostile-input suite beyond the initial six scenarios.",
      ],
      next: [
        "Track behaviour drift across versions — flag any case whose outcome changed between releases.",
      ],
      later: [
        "Package the evaluation harness as a reusable template for other agent projects.",
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
    competition: {
      heading: "Existing options optimise for listings, not for renter decisions",
      rows: [
        {
          name: "PropertyGuru / 99.co",
          approach: "Listing platforms optimise for search volume; risk interpretation is left entirely to the renter.",
          difference: "The copilot reads one listing and returns evidence-grounded risk findings and landlord questions — not just filters.",
        },
        {
          name: "Generic chatbot",
          approach: "ChatGPT can discuss a listing, but fills gaps with plausible guesses and knows no local rental rules.",
          difference: "Facts keep 'Not mentioned' uncertainty explicit; every risk cites listing evidence plus a rule from the 18-entry KB.",
        },
        {
          name: "Seniors / forum advice",
          approach: "Helpful heuristics, but anecdotal, unstructured, and hard to verify against a specific listing.",
          difference: "Controlled A/B/C evaluation across 20 cases measured what the retrieval layer actually improves.",
        },
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
    materials: {
      heading: "Presentation slides (10)",
      body: "The group presentation deck for the Rental Copilot, shown as an image gallery.",
      slides: makeSlides("singapore-rental-intelligence-copilot", 10),
    },
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
