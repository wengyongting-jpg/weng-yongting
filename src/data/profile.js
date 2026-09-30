// Single source of truth for personal / brand facts.
// Verified against the profile. Do not edit without confirming against the profile.
export const profile = {
  name: "Weng Yongting",
  wordmark: "WENG YONGTING",
  location: "Singapore",
  availability: "AVAILABLE FOR AI / AUTOMATION OPPORTUNITIES",
  education: {
    institution: "Nanyang Technological University",
    short: "NTU",
    program: "Enterprise AI",
    level: "Master's",
    period: "2026–2027",
    background: "Financial Management",
    // NTU selected study directions — not a course list.
    directions: [
      "Generative AI",
      "AI Automation",
      "Enterprise AI",
      "AI Product Development",
      "Data Architecture",
      "Responsible AI",
      "AI Transformation",
    ],
    // Undergraduate Financial Management — selected courses with verified grades.
    // Not a full transcript. Six most relevant to AI Product / Enterprise AI positioning.
    undergrad: {
      program: "Financial Management",
      level: "Bachelor's",
      courses: [
        { name: "IT Auditing", grade: "100" },
        { name: "Auditing Cases Analysing", grade: "98" },
        { name: "Enterprise Business Planning and Budget Management", grade: "97" },
        { name: "Excel Application for Economic Management", grade: "96" },
        { name: "Financial Statement Analysis", grade: "94" },
        { name: "Internal Control", grade: "94" },
      ],
    },
  },
  summary:
    "Enterprise AI master's student with a Financial Management background and experience across AI product design, data analytics, automation, and business research. Hands-on experience designing LLM-enabled applications and enterprise workflows, with prior experience in audit, investment research, and business analysis.",
  // Core positioning pillars (homepage + about).
  pillars: ["BUSINESS", "DATA", "AI", "PRODUCT", "TRANSFORMATION"],
  // Narrative spine, in order.
  narrative: [
    "Business foundation",
    "Data & Analysis",
    "Digital Transformation",
    "AI",
    "Product / Solution Design",
  ],
  focus: "AI · Data · Automation",
  interests: ["AI Products", "Intelligent Automation", "Digital Transformation"],
  // Verified contact links.
  linkedin: "https://www.linkedin.com/in/yongting-c",
  github: "https://github.com/wengyongting-jpg",
};

// "Portfolio OS" — the five directional entry points on the homepage.
// Each is a wayfinding label that maps to a real route, so the map improves
// navigation rather than adding decorative complexity. No new content is
// invented here: these are lenses onto pages that already exist.
export const portfolioOS = [
  {
    id: "01",
    key: "ai-lab",
    title: "AI LAB",
    blurb: "AI products, LLM applications, and safety-aware AI design.",
    to: "/experiments",
    cta: "ENTER LAB",
  },
  {
    id: "02",
    key: "automation-bay",
    title: "AUTOMATION BAY",
    blurb: "Workflow automation, human-in-the-loop systems, process improvement.",
    to: "/work/refund-processing-automation",
    cta: "VIEW CASE",
  },
  {
    id: "03",
    key: "data-observatory",
    title: "DATA OBSERVATORY",
    blurb: "Research, analytics, market intelligence, and decision support.",
    to: "/work/huafu-market-intelligence",
    cta: "VIEW CASE",
  },
  {
    id: "04",
    key: "business-archive",
    title: "BUSINESS ARCHIVE",
    blurb: "Audit, finance, operations, process diagnosis, transformation context.",
    to: "/resume",
    cta: "SEE RECORD",
  },
  {
    id: "05",
    key: "thinking-room",
    title: "THINKING ROOM",
    blurb: "Decision memos and reflections on enterprise AI.",
    to: "/experiments",
    cta: "READ MEMOS",
  },
];
