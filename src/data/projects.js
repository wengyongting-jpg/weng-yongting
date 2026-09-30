// 项目列表数据 — 仅列表层字段（slug, number, name, subtitle, year, domain, summary, tech）。
// 详情页内容（V5 7 区块）在 src/data/caseDetail.js，由 CaseStudy.jsx 渲染。
//
// 顺序与编号与 caseDetail.js 保持一致，确保列表页和详情页面包屑显示同号。
// 只放个人项目与论文；Fuyao / Huafu 是实习项目，已移到 Work Experience 页面。
// tech 字段供 Work 列表页展示前 4 项技术标签。

export const projects = [
  {
    slug: "mm118-paper",
    number: "01",
    name: "AI Investment & Market Competitiveness",
    subtitle: "MM118 · IMMS 2025 · Co-authored Paper",
    year: "2025",
    domain: "Paper · Research",
    tech: ["Panel Regression", "Stata", "Python", "Empirical Research"],
    summary:
      "Co-authored paper examining how AI investment, production efficiency, and human–machine collaboration affect firms' market competitiveness in manufacturing — published in the IMMS 2025 proceedings.",
  },
  {
    slug: "zhiyi",
    number: "02",
    name: "智一数科",
    subtitle: "Digital Marketing & Big-Data Cloud Platform",
    year: "2024",
    domain: "Competition · Challenge Cup",
    tech: ["AI + SaaS", "Big-data Cloud", "Short-video Marketing", "RAG"],
    summary:
      "A bilingual RAG co-pilot built for a regional data-services provider — an AI+SaaS layer combining personalised marketing-content generation, big-data analytics, and short-video ad delivery. National Silver at the 2024 Challenge Cup.",
  },
  {
    slug: "rebecca",
    number: "03",
    name: "瑞贝卡 Rebecca",
    subtitle: "National Collegiate Business Elite Challenge",
    year: "2024",
    domain: "Competition · Business Elite",
    tech: ["Go-to-market", "Brand Localisation", "Financial Modelling", "D2C"],
    summary:
      "Strategic advisory work for Rebecca (hair brand) — re-architecting the export go-to-market for a beauty accessories brand facing channel saturation. National finalist.",
  },
  {
    slug: "commercial-launch",
    number: "04",
    name: "商业发射 Commercial Launch",
    subtitle: "Industry Research & Investment Framework",
    year: "2024",
    domain: "Case Study · Industry Research",
    tech: ["Market Sizing", "Value Chain Analysis", "Investment Framework", "Policy Risk"],
    summary:
      "Research on the commercial space-launch industry — market sizing, value chain mapping, competitive dynamics, and a launch-provider investment-return framework.",
  },
  {
    slug: "angu",
    number: "05",
    name: "昂钰精工 Angyu Precision",
    subtitle: "Challenge Cup · Small Track",
    year: "2024",
    domain: "Competition · Challenge Cup",
    tech: ["Export GTM", "Brand Localisation", "Market Research", "Partnership Development"],
    summary:
      "Export-oriented go-to-market strategy and brand localisation for a precision-manufacturing SME serving overseas industrial customers.",
  },
  {
    slug: "icbc-etongyou",
    number: "06",
    name: "e同游",
    subtitle: "ICBC Cup · Fujian Provincial Excellence Award",
    year: "2024",
    domain: "Competition · ICBC Cup",
    tech: ["Service Design", "Cross-border Payment", "Travel Finance", "Bank-led Model"],
    summary:
      "An outbound-tourism financial-service concept recognised with the Fujian Provincial Excellence Award — designed for cross-border payment and travel-finance scenarios.",
  },
  {
    slug: "yuexi",
    number: "07",
    name: "Yuexi",
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
    number: "08",
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
    number: "09",
    name: "SalesPilot",
    subtitle: "Agentic WhatsApp Sales Opportunity Assistant",
    year: "2026",
    domain: "Agentic AI · Sales Enablement",
    status: "In Progress",
    event: "NUS-ISS Show Me Your Agents Hackathon · September 2026",
    tech: ["Agent Logic", "RAG Requirements", "Human-in-the-Loop", "AWS", "GitHub"],
    // 暂无已确认可公开的 demo/GitHub 链接 — 故意不设置 url/links。
    url: "",
    summary:
      "An agentic WhatsApp assistant that reads conversation history to identify a customer's sales stage, detect signals, maintain an Opportunity Profile, compute a 0–100 Opportunity Value Score, and choose the next best action — automating routine enquiries while escalating high-value situations to a human.",
  },
  {
    slug: "grounded-enterprise-policy-assistant",
    number: "10",
    name: "Grounded Enterprise Policy & Procedure Assistant",
    subtitle: "Evidence-Based Internal Knowledge Assistant",
    year: "2026",
    domain: "Enterprise AI · RAG",
    status: "Prototype",
    event: "Individual Project · September 2026",
    tech: [
      "RAG",
      "Document Retrieval",
      "Chunking",
      "TF-IDF Vectorisation",
      "Cosine Similarity Retrieval",
      "Foundation Model",
      "Python",
      "Streamlit",
      "Evaluation Set",
    ],
    // 无已确认的公开 demo/GitHub 链接 — 不显示按钮。
    url: "",
    summary:
      "An Enterprise AI assistant that answers internal policy and procedure questions from retrieved document evidence: it retrieves before it answers, cites the source used, and refuses when evidence is insufficient or ambiguous.",
  },
  {
    slug: "health-insurance-claim-decision-agent",
    number: "11",
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
    number: "12",
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
];

// 按 slug 查询单个项目的辅助函数（保持向后兼容 — 详情页改读 caseDetail.js）
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
