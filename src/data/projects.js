// Verified projects. Only real, built work appears here.
// Removed fabricated "AI / Data / Automation" and "Timesheet Automation" entries per review.
//
// Content sourcing (enriched against the user's factual project context):
// - Yuexi: AI-assisted personalized health application (women's physical + emotional health).
// - Refund Processing Automation: UiPath workflow design (not a deployed production system).
// - Fuyao Process Improvement: process diagnosis + proposed digitalization (not an AI build).
// - Huafu Market Intelligence: market research + financial modelling (not an AI build).
//
// Hard constraints on this data:
// - No invented user numbers, revenue, KPI improvements, A/B results, or outcomes.
// - Proposals / designs / prototypes are NOT presented as deployed production systems.
// - Case studies emphasize the thinking process:
//   Business Problem → User/Process Pain Point → Data → AI/Automation Approach
//   → Product/Solution Design → Validation/Exception Handling → Learning.
//
// Each case study follows the reusable 8-section structure:
//   01 PROBLEM · 02 USER / BUSINESS CONTEXT · 03 APPROACH · 04 REQUIREMENTS
//   05 SOLUTION · 06 AI / AUTOMATION LOGIC · 07 KEY DESIGN DECISIONS · 08 WHAT I LEARNED
//
// A section may carry an optional `flow` object rendered by the reusable FlowDiagram:
//   { steps: [{label, note?}], branch?: [{label, note?}] }  // branch = OR split at the end.

export const projects = [
  {
    slug: "yuexi",
    number: "01",
    name: "Yuexi",
    subtitle: "AI-Assisted Personalized Health Application",
    year: "2026",
    domain: "AI · Product",
    summary:
      "An AI-assisted personalized health application for women's daily physical and emotional health management — recording cycle, symptoms, mood, and medication, then providing personalized insights and conversational support with explicit safety boundaries.",
    detail:
      "Designed a hybrid AI architecture combining deterministic health calculations and rule-based scoring with LLM-based personalized communication, structured user and health data models, and Prompt/Context Injection strategies.",
    tech: ["LLM API", "Prompt Engineering", "Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    url: "https://period-ai.vercel.app/",
    caseStudy: [
      {
        no: "01",
        heading: "Problem",
        body:
          "Personalized health support sits in a grey zone between lifestyle guidance and medical reasoning. Four pain points framed the problem: health information is fragmented across different records; users find it difficult to interpret changes in their own cycle, symptoms, and mood over time; generic health information does not reflect an individual's context; and AI health products create safety risks if the LLM generates inappropriate or overconfident medical advice. A generic chatbot cannot be trusted here — it must understand each user's context, avoid overstating certainty, and never substitute for clinical judgement.",
      },
      {
        no: "02",
        heading: "User / Business Context",
        body:
          "The product serves women seeking day-to-day physical and emotional health management — recording cycle-related information, symptoms, mood, medication, and other personal health data, then receiving personalized insights and conversational support. The design had to account for non-expert users, sensitive personal data, and the expectation of conversational, human-like responses.",
      },
      {
        no: "03",
        heading: "Approach",
        body:
          "The work spanned the full product thinking path: designed user scenarios and identified user pain points; defined functional requirements and AI interaction flows; translated user needs into product requirements and system logic; and designed a hybrid AI architecture that separates deterministic health calculations and rule-based logic from LLM-generated personalized communication. Safety boundaries for AI responses were defined explicitly, and structured user/health data and Prompt/Context Injection strategies were explored to keep responses anchored to each user's context.",
        points: [
          "Designed user scenarios and identified user pain points.",
          "Defined functional requirements and AI interaction flows.",
          "Translated user needs into product requirements and system logic.",
          "Designed a hybrid AI architecture separating deterministic logic from LLM communication.",
          "Defined safety boundaries for AI responses.",
          "Structured user/health data and explored Prompt/Context Injection strategies.",
          "Used AI coding tools to support implementation and iterative testing of AI response quality and safety.",
        ],
      },
      {
        no: "04",
        heading: "Requirements",
        points: [
          "Ground every response in the user's own cycle and wellness context.",
          "Keep medical-grade reasoning rule-bound and auditable.",
          "Use the LLM only for personalized communication and conversational interaction, not for clinical decisions.",
          "Define explicit safety boundaries for what the AI may and may not say.",
        ],
      },
      {
        no: "05",
        heading: "Solution",
        body:
          "Designed a hybrid system that does not rely on the LLM for everything. Deterministic logic handles structured health calculations and rule-based scoring; the LLM handles personalized communication and conversational interaction. Structured user and health data models plus Prompt/Context Injection keep responses anchored to each user's context rather than the model's priors, and explicit safety boundaries constrain what the AI may say.",
      },
      {
        no: "06",
        heading: "AI / Automation Logic",
        body:
          "The end-to-end design moves from understanding the user to enforcing safety before any response reaches them. The key split: deterministic logic is used where accuracy and consistency matter; the LLM is used where personalization and natural-language interaction create value.",
        flow: {
          steps: [
            { label: "User Scenario" },
            { label: "Pain Point" },
            { label: "Functional Requirements" },
            { label: "AI Interaction" },
            { label: "Deterministic Logic + LLM" },
            { label: "Safety Boundary" },
            { label: "User Experience" },
          ],
        },
      },
      {
        no: "07",
        heading: "Key Design Decisions",
        points: [
          "Split reasoning: rule-bound health logic stays deterministic; conversational empathy uses the LLM.",
          "Context injection over fine-tuning, to keep the model grounded and controllable.",
          "Safety boundaries designed as explicit rules, not left to the model's discretion.",
          "Use deterministic logic where accuracy and consistency matter; use the LLM where personalization and natural-language interaction create value.",
        ],
      },
      {
        no: "08",
        heading: "What I Learned",
        body:
          "Used AI coding tools to support implementation and iteratively tested AI response quality and safety. The clearest lesson: in health-adjacent products, the architecture — not the prompt — is what makes an LLM safe to ship. The deciding design choice is where to use deterministic logic versus where to use the LLM.",
      },
    ],
  },

  {
    slug: "refund-processing-automation",
    number: "02",
    name: "Refund Processing Automation",
    subtitle: "Document-Driven Workflow with Human-in-the-Loop",
    year: "2025",
    domain: "Automation · UiPath",
    summary:
      "A UiPath-based automation design for refund document processing that extracts structured data, validates against business rules, and routes work by confidence threshold to automated processing or human review.",
    detail:
      "Designed an end-to-end refund processing workflow around document extraction, structured data processing, business-rule validation, and confidence-based routing, with an explicit human-in-the-loop boundary controlled by a confidence threshold.",
    tech: ["UiPath", "Workflow Automation", "Document Understanding", "Process Optimization"],
    // No live URL: internal automation, not a public app.
    url: "",
    caseStudy: [
      {
        no: "01",
        heading: "Problem",
        body:
          "Refund processing is document-heavy and rule-bound. Four pain points framed the problem: receipt information is initially stored in documents rather than structured data; manual extraction and validation can be repetitive; different cases may require different processing decisions; and cases with insufficient confidence or rule violations should not necessarily be processed automatically. Manual handling is slow and inconsistent; full automation is unsafe because some decisions should not be made without a person.",
      },
      {
        no: "02",
        heading: "User / Business Context",
        body:
          "Operations and finance teams processing refund documents at scale. The design goal was to remove repetitive manual work without removing human judgement where it is genuinely needed.",
      },
      {
        no: "03",
        heading: "Approach",
        body:
          "Designed an end-to-end refund processing workflow that integrates document extraction, structured data processing, business-rule validation, and automated case routing. Defined the structured fields the system needs, designed validation rules and confidence thresholds, and created the logic that determines whether a case can be processed automatically or should be escalated for human review.",
        points: [
          "Integrated document extraction, structured data processing, business-rule validation, and automated case routing.",
          "Defined structured fields: Receipt ID, Merchant, Date, Total Amount, Refund Reason, Confidence.",
          "Designed validation rules and confidence thresholds.",
          "Created routing logic: automated processing vs. human review.",
        ],
      },
      {
        no: "04",
        heading: "Requirements",
        points: [
          "Convert semi-structured refund documents into structured data (Receipt ID, Merchant, Date, Total Amount, Refund Reason, Confidence).",
          "Apply consistent business rules for validation.",
          "Route high-confidence, rule-compliant cases to automated processing.",
          "Escalate low-confidence or rule-violating cases to human review.",
        ],
      },
      {
        no: "05",
        heading: "Solution",
        body:
          "Designed a UiPath automation workflow covering document extraction, structured data processing, business-rule validation, and confidence-based routing. The structured fields — Receipt ID, Merchant, Date, Total Amount, Refund Reason, Confidence — anchor each case. High-confidence, rule-compliant cases close automatically; everything else is queued for a reviewer with the extracted data and rule outcome attached.",
        note: "This is a workflow design, not a claimed production deployment. No quantified accuracy improvement, processing-time reduction, or business outcomes are stated, as none have been verified.",
      },
      {
        no: "06",
        heading: "AI / Automation Logic",
        body:
          "The automation follows a linear pipeline that branches at the confidence check — the point where a decision is delegated to a person instead of the machine.",
        flow: {
          steps: [
            { label: "Document" },
            { label: "Data Extraction" },
            { label: "Structured Data" },
            { label: "Business Rule Validation" },
            { label: "Confidence Check" },
          ],
          branch: [
            { label: "Automated Processing", note: "high confidence · rule-compliant" },
            { label: "Human Review", note: "low confidence / rule violation" },
          ],
        },
      },
      {
        no: "07",
        heading: "Key Design Decisions",
        points: [
          "A confidence threshold — not a blanket rule — decides what is automated.",
          "Validation rules are applied consistently before routing, not after.",
          "Human reviewers receive the extracted data and the rule outcome, not a blank task.",
          "Automation should not mean automating every case — uncertain or exceptional cases route to humans.",
        ],
      },
      {
        no: "08",
        heading: "What I Learned",
        body:
          "The hardest part of automation is not building it but drawing the line. A confidence threshold is a design decision about trust, and it connects directly to the question I keep returning to: where should automation stop?",
      },
    ],
  },

  {
    slug: "fuyao-process-improvement",
    number: "03",
    name: "Fuyao Process Improvement",
    subtitle: "Process Diagnosis & Digitalization Opportunity",
    year: "2025",
    domain: "Data · Process",
    summary:
      "Voucher consolidation, discrepancy correction, and warehouse workflow analysis at Fuyao Group Fuqing Aluminum Parts — diagnosing manual data-entry pain points and proposing barcode scanning as a process improvement to reduce repetitive entry and improve data capture.",
    detail:
      "Reviewed and consolidated 800+ accounting vouchers across 3 subsidiaries, corrected 10+ data discrepancies, analysed a 114-response warehouse survey, mapped inventory-counting workflows, and proposed barcode scanning as a digitalization opportunity.",
    tech: ["Data Analysis", "Process Optimization", "Reconciliation", "Excel / VBA"],
    url: "",
    caseStudy: [
      {
        no: "01",
        heading: "Problem",
        body:
          "Group budgeting and annual audit depend on consistent financial data across subsidiaries, but vouchers carried discrepancies and inventory workflows relied on manual data entry. The pain points were operational: repetitive manual data entry, manual recording creating opportunities for inefficiency and data-entry errors, and warehouse processes containing opportunities for standardization and digitalization. The problems were data inconsistency and manual-process inefficiency, not a missing tool.",
      },
      {
        no: "02",
        heading: "User / Business Context",
        body:
          "Fuyao Group Fuqing Aluminum Parts Co., Ltd — General Ledger Accounting function across 3 subsidiaries, supporting group budgeting and annual audit activities, plus warehouse inventory-counting operations.",
      },
      {
        no: "03",
        heading: "Approach",
        body:
          "A diagnostic approach grounded in evidence: reconcile and consolidate vouchers to fix data inconsistency, then analyse the warehouse workflow through a 114-response survey to find where manual entry created inefficiency, and propose targeted process improvements rather than assume an AI solution is needed.",
        points: [
          "Analysed 114 warehouse survey responses.",
          "Mapped inventory-counting workflows end to end.",
          "Identified manual data-entry pain points.",
          "Proposed barcode scanning as a potential process improvement to reduce repetitive manual entry and improve data capture efficiency.",
        ],
      },
      {
        no: "04",
        heading: "Requirements",
        points: [
          "Consistent voucher data across 3 subsidiaries for budgeting and audit.",
          "Identify and correct data discrepancies in the general ledger.",
          "Diagnose manual data-entry inefficiency in inventory counting.",
          "Find opportunities for process standardization and digitalization in warehouse operations.",
        ],
      },
      {
        no: "05",
        heading: "Solution",
        body:
          "Reviewed and consolidated 800+ accounting vouchers across 3 subsidiaries, identifying and correcting 10+ data discrepancies to improve data consistency. Performed AR/AP reconciliation and supported tax filing, invoice management, and bank reconciliation. Analysed the 114-response warehouse survey, mapped inventory-counting workflows, and proposed barcode scanning as a process improvement to reduce repetitive manual entry and improve data capture efficiency.",
        note: "This is process diagnosis and a proposed digitalization opportunity, not a deployed AI system. The proposed barcode-scanning improvement was a recommendation, not an implemented production system.",
      },
      {
        no: "06",
        heading: "AI / Automation Logic",
        body:
          "This engagement was process diagnosis and improvement, not an AI build. No AI system was deployed. The logic is the analytical pipeline that turns raw records into reliable data and a concrete process-improvement recommendation. The key principle applied: start from the operational pain point and redesign the process before deciding whether AI or automation is actually necessary.",
        flow: {
          steps: [
            { label: "Voucher Review" },
            { label: "Discrepancy Detection" },
            { label: "Workflow Analysis" },
            { label: "Improvement Recommendation" },
          ],
        },
      },
      {
        no: "07",
        heading: "Key Design Decisions",
        points: [
          "Proposed barcode scanning over manual data entry for inventory counting — a recommendation, not a deployment.",
          "Fix data consistency before optimising workflow — sequencing matters.",
          "Use a 114-response survey as evidence rather than assumption.",
          "Start from the operational pain point and redesign the process before deciding whether AI or automation is actually necessary.",
        ],
      },
      {
        no: "08",
        heading: "What I Learned",
        body:
          "Transformation starts with trustworthy data and an honest process diagnosis. No automation or analytics is useful on inconsistent records, and the highest-value improvement is often a boring process fix — like barcode scanning — chosen with evidence. The most important principle: start from the pain point and redesign the process before reaching for AI.",
      },
    ],
  },

  {
    slug: "huafu-market-intelligence",
    number: "04",
    name: "Huafu Market Intelligence",
    subtitle: "Industry Research & Investment Analysis",
    year: "2025",
    domain: "Data · Research",
    summary:
      "Industry research on the semiconductor and commercial space-launch industries at Huafu Securities — covering market sizing, value chains, competitive dynamics, and policy risks, developed into client-facing white papers, with an Excel-based investment-return framework and 10-year revenue projections.",
    detail:
      "Personally covered the semiconductor and commercial space-launch research sections, produced materials developed into client-facing industry white papers, built an Excel-based investment-return framework, and used the team's historical stock investment performance to develop 10-year revenue projections.",
    tech: ["Market Research", "Financial Modelling", "Data Visualization", "Investment Analysis"],
    url: "",
    caseStudy: [
      {
        no: "01",
        heading: "Problem",
        body:
          "Investment-related decision making requires combining fragmented market information, company information, financial assumptions, technology trends, and policy factors into a structured view a stakeholder can act on. The key problem is not collecting information but transforming it into decision-useful intelligence with a defensible return framework rather than a narrative.",
      },
      {
        no: "02",
        heading: "User / Business Context",
        body:
          "Huafu Securities, Xiamen Branch — Assistant to the Director of Investment Advisory. Outputs served stakeholder briefings and investor-education content. I personally covered the semiconductor and commercial space-launch industry research sections.",
      },
      {
        no: "03",
        heading: "Approach",
        body:
          "Combine bottom-up industry research with a top-down investment-return framework, then translate both into client-facing materials and investor-education content. The research covered market size, industry value chain, key segments, technology trends, competitive dynamics, leading companies, policy risks, and cost/price trends.",
        points: [
          "Personally covered the semiconductor and commercial space-launch research sections.",
          "Produced substantial industry research materials developed into client-facing white papers / research handbooks.",
          "Built an Excel-based investment-return framework.",
          "Used the team's historical stock investment performance to develop 10-year revenue projections and support investment analysis / feasibility assessment.",
          "Supported investor-education content including explainer videos and the Trend Radar series — scriptwriting, data analysis, and visualization.",
        ],
      },
      {
        no: "04",
        heading: "Requirements",
        points: [
          "Cover semiconductor and commercial space-launch industries: market size, value chain, key segments, technology trends, competitive dynamics, leading companies, policy risks, cost/price trends.",
          "Produce research materials suitable for client-facing white papers / research handbooks.",
          "Build a reproducible investment-return framework with multi-year projections.",
          "Support investor-education content across explainer videos and Trend Radar.",
        ],
      },
      {
        no: "05",
        heading: "Solution",
        body:
          "Personally covered the semiconductor and commercial space-launch research sections, producing substantial industry research materials that were developed into client-facing industry white papers and research handbooks. Built an Excel-based investment-return framework and used the team's historical stock investment performance to develop 10-year revenue projections for target companies, supporting investment analysis and feasibility assessment. Supported investor-education content including explainer videos and the Trend Radar series, combining research, data analysis, visualization, and communication.",
        note: "This is market intelligence, structured analysis, and financial modelling — not an AI system or automated research process.",
      },
      {
        no: "06",
        heading: "AI / Automation Logic",
        body:
          "This engagement was research and modelling, not an AI build. No AI system was built and no market research was automated. The logic is the intelligence pipeline that turns fragmented market information into a structured, defensible investment view — transforming scattered signals into decision-useful intelligence rather than simply collecting information.",
        flow: {
          steps: [
            { label: "Market Research" },
            { label: "Framework Design" },
            { label: "Revenue Projection" },
            { label: "Stakeholder Briefing" },
          ],
        },
      },
      {
        no: "07",
        heading: "Key Design Decisions",
        points: [
          "Build a reusable Excel-based investment-return framework instead of a one-off valuation.",
          "Use the team's historical stock investment performance as the basis for 10-year revenue projections.",
          "Pair quantitative projections with explicit policy-risk assessment.",
          "Transform fragmented market information into structured, decision-useful intelligence rather than simply collecting information.",
          "Deliver research as both client-facing white papers and investor-education content.",
        ],
      },
      {
        no: "08",
        heading: "What I Learned",
        body:
          "Analysis is only as reliable as the data and assumptions behind it. A clean framework forces assumptions into the open, and that transparency — more than precision — is what makes investment research trustworthy. The core lesson: the value is in transforming fragmented information into structured, decision-useful intelligence, not in collecting more of it.",
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
