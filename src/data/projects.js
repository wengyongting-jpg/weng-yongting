// 项目列表数据 — 仅列表层字段（slug, number, name, subtitle, year, domain, summary, tech）。
// 详情页内容（7 区块）在 src/data/caseDetail.js，由 CaseStudy.jsx 渲染。
//
// section 分区：
//   "projects" — 个人项目（AI 产品 / 自动化 / Agent），展示在 /work
//   "campus"   — 校园经历（论文 + 商业竞赛），展示在 /campus
// number 为各分区内的独立编号，与 caseDetail.js 的编号保持一致。
// Fuyao / Huafu 是实习项目，在 Work Experience 页面，不放这里。

export const projects = [
  // ===== 个人项目（/work）=====
  {
    slug: "period",
    section: "projects",
    number: "01",
    name: "Period",
    subtitle: "AI-Assisted Personalized Health Application",
    year: "2026",
    domain: "AI · Product",
    tech: ["LLM API", "Prompt Engineering", "Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    url: "https://period-ai.vercel.app/",
    summary:
      "An AI-assisted personalized health application for women's daily physical and emotional health management — recording cycle, symptoms, mood, and medication, then providing personalized insights and conversational support with explicit safety boundaries.",
  },
  {
    slug: "refund-processing-automation",
    section: "projects",
    number: "02",
    name: "Refund Processing Automation",
    subtitle: "Document-Driven Workflow with Human-in-the-Loop",
    year: "2025",
    domain: "Automation · UiPath Design",
    tech: ["UiPath", "Workflow Automation", "Document Understanding", "Process Optimization"],
    // 非公开产品，无线上 URL；演示以录制视频形式嵌入详情页。
    url: "",
    video: {
      type: "youtube",
      id: "nJchLlhX-So",
      title: "Refund Processing Automation — UiPath demo walkthrough",
      caption: "Recorded demo walkthrough of the UiPath refund processing workflow.",
    },
    links: [
      { label: "DEMO VIDEO", url: "https://youtu.be/nJchLlhX-So" },
    ],
    summary:
      "A UiPath-based automation design for refund document processing that extracts structured data, validates against business rules, and routes work by confidence threshold to automated processing or human review.",
  },
  {
    slug: "salespilot",
    section: "projects",
    number: "03",
    name: "SalesPilot",
    subtitle: "Agentic WhatsApp Sales Opportunity Assistant",
    year: "2026",
    domain: "Agentic AI · Sales Enablement",
    status: "In Progress",
    event: "NUS-ISS Show Me Your Agents Hackathon · September 2026",
    tech: ["Agent Logic", "RAG Requirements", "Human-in-the-Loop", "AWS", "GitHub"],
    // 已确认公开：仓库 / 演示视频 / 部署环境（管理端 + 顾客端）
    url: "",
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
    summary:
      "An agentic WhatsApp assistant that reads conversation history to identify a customer's sales stage, detect signals, maintain an Opportunity Profile, compute a 0–100 Opportunity Value Score, and choose the next best action — automating routine enquiries while escalating high-value situations to a human.",
  },
  {
    slug: "grounded-enterprise-policy-assistant",
    section: "projects",
    number: "04",
    name: "Enterprise AI Assistant Suite",
    subtitle: "Grounded Policy RAG + Text-to-SQL Data Agent",
    year: "2026",
    domain: "Enterprise AI · RAG + Text-to-SQL",
    status: "Prototype",
    event: "Individual Project · Policy module Sept 2026 · SQL module 2026",
    tech: [
      "RAG",
      "Deterministic Decision Layer",
      "Text-to-SQL",
      "BFS Join Resolution",
      "Python",
      "Streamlit",
      "sqlglot",
      "Evaluation Set",
    ],
    // 无已确认的公开 demo 链接 — GitHub 链接在详情页 hero 区。
    url: "",
    summary:
      "Two enterprise assistants, one design rule — deterministic gates before any generation. The policy module retrieves before it answers, cites its sources, and refuses when evidence is insufficient (22-case frozen evaluation: 22/22 routing, 17/17 grounding). The Text-to-SQL module computes multi-table JOIN paths by graph traversal instead of model guesswork — validated live in an enterprise reporting workflow without join hallucination; both modules ship in one GitHub repository.",
  },
  {
    slug: "health-insurance-claim-decision-agent",
    section: "projects",
    number: "05",
    name: "Health Insurance Claim Decision Agent",
    subtitle: "Evaluation Harness & Escalation Safety Testing",
    year: "2026",
    domain: "AI Agent · Evaluation · Safety",
    teamProject: true,
    event: "PE6201 A2 · Academic Team Project · Six-member team · Repository Version 3.0",
    tech: [
      "Evaluation Harness",
      "Scripted Evaluation",
      "Live-Model Evaluation",
      "Safety Guardrails",
      "Hostile-Input Testing",
      "Reproducible Analysis",
    ],
    // 已确认的公开链接 — 详情页渲染为按钮。
    url: "",
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
    summary:
      "A team-built health-insurance claim decision agent supporting deterministic scripted evaluation, live LLM evaluation, safety guardrails, cost tracking, and reproducible result analysis. Weng Yongting owned the evaluation-harness and scripted-evaluation work (D4 and D5(a)) and designed six hostile-input and escalation safety cases within the shared 40-case test suite.",
  },
  {
    slug: "singapore-rental-intelligence-copilot",
    section: "projects",
    number: "06",
    name: "Singapore Rental Intelligence Copilot",
    subtitle: "Evidence-Grounded Rental Decision Support for International Students",
    year: "2026",
    domain: "AI · Generative AI",
    status: "Academic Project",
    teamProject: true,
    tech: [
      "Gemini 2.5 Flash",
      "Rule-based RAG",
      "Structured JSON",
      "Gemini Canvas",
      "Controlled Comparison",
    ],
    url: "",
    links: [
      { label: "OPEN DEMO", url: "https://gemini.google.com/share/c16fc3fe290f?skid=3525612e-9c27-4dd4-ad04-d655841b497f" },
    ],
    summary:
      "A team-built generative AI assistant that helps international students in Singapore evaluate rental listings — extracting facts from unstructured posts, checking risks against rental rules, matching preferences, and generating landlord clarification questions.",
  },

  // ===== 校园经历（/campus）：论文 + 商业竞赛 =====
  {
    slug: "mm118-paper",
    section: "campus",
    number: "01",
    name: "IMMS 2025 Publications",
    subtitle: "Two Co-authored Empirical Papers · pp. 138 & 308",
    year: "2025",
    domain: "Paper · Research",
    tech: ["Panel Regression", "Stata", "Python", "Empirical Research"],
    summary:
      "Two co-authored papers in the IMMS 2025 proceedings examining how AI software, human–machine interaction, managerial efficiency, and production efficiency shape organisational growth and firms' market competitiveness — presented at the conference.",
  },
  {
    slug: "zhiyi",
    section: "campus",
    number: "02",
    name: "Zhiyi Digital",
    subtitle: "Digital Marketing & Big-Data Cloud Platform",
    year: "2024",
    domain: "Competition · Challenge Cup",
    tech: ["AI + SaaS", "Big-data Cloud", "Short-video Marketing", "RAG"],
    summary:
      "A bilingual RAG co-pilot built for a regional data-services provider — an AI+SaaS layer combining personalised marketing-content generation, big-data analytics, and short-video ad delivery. National Silver at the 2024 Challenge Cup.",
  },
  {
    slug: "rebecca",
    section: "campus",
    number: "03",
    name: "Rebecca",
    subtitle: "National Collegiate Business Elite Challenge",
    year: "2024",
    domain: "Competition · Business Elite",
    tech: ["Go-to-market", "Brand Localisation", "Financial Modelling", "D2C"],
    summary:
      "Strategic advisory work for Rebecca (hair brand) — re-architecting the export go-to-market for a beauty accessories brand facing channel saturation. National finalist.",
  },
  {
    slug: "commercial-launch",
    section: "campus",
    number: "04",
    name: "Commercial Launch",
    subtitle: "Industry Research & Investment Framework",
    year: "2024",
    domain: "Case Study · Industry Research",
    tech: ["Market Sizing", "Value Chain Analysis", "Investment Framework", "Policy Risk"],
    summary:
      "Research on the commercial space-launch industry — market sizing, value chain mapping, competitive dynamics, and a launch-provider investment-return framework.",
  },
  {
    slug: "angu",
    section: "campus",
    number: "05",
    name: "Angyu Precision",
    subtitle: "Challenge Cup · Small Track",
    year: "2024",
    domain: "Competition · Challenge Cup",
    tech: ["Export GTM", "Brand Localisation", "Market Research", "Partnership Development"],
    summary:
      "Export-oriented go-to-market strategy and brand localisation for a precision-manufacturing SME serving overseas industrial customers.",
  },
];

// 按 slug 查询单个项目的辅助函数（保持向后兼容 — 详情页改读 caseDetail.js）
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

// 按分区取项目列表（Work 页 = projects；Campus 页 = campus）
export function getProjectsBySection(section) {
  return projects.filter((p) => p.section === section);
}
