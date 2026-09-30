// 项目列表数据 — 仅列表层字段（slug, number, name, subtitle, year, domain, summary）。
// 详情页内容（V5 7 区块）已迁移至 src/data/caseDetail.js，由 CaseStudy.jsx 渲染。
//
// 顺序与编号与 caseDetail.js 保持一致，确保列表页和详情页面包屑显示同号。
// Fuyao Process Improvement 与 Huafu Market Intelligence 已从此处移除
// （它们是实习项目，挪到 Resume / Work Experience 页面）。

export const projects = [
  {
    slug: "mm118-paper",
    number: "01",
    name: "AI Investment & Market Competitiveness",
    subtitle: "MM118 · IMMS 2025 · Co-authored Paper",
    year: "2025",
    domain: "Paper · Research",
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
    summary:
      "A bilingual RAG co-pilot built for a regional data-services provider, lifting proposal-generation accuracy from 62.5% to 90% across three eval rounds. National Silver at the 2024 Challenge Cup.",
  },
  {
    slug: "rebecca",
    number: "03",
    name: "瑞贝卡 Rebecca",
    subtitle: "National Collegiate Business Elite Challenge",
    year: "2024",
    domain: "Competition · Business Elite",
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
    summary:
      "A UiPath-based automation design for refund document processing that extracts structured data, validates against business rules, and routes work by confidence threshold to automated processing or human review.",
  },
];

// 按 slug 查询单个项目的辅助函数（保持向后兼容 — 详情页改读 caseDetail.js）
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
