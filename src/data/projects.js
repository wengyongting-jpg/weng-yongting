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
        heading: "System Architecture",
        body:
          "The end-to-end design moves from the user's health context to an enforced safety boundary before any response is shown. The key split: deterministic logic is used where accuracy and consistency matter; the LLM is used only for the communication layer, where personalization and natural language create value.",
        flow: {
          steps: [
            { label: "User Health Context" },
            { label: "Structured User Data" },
            { label: "Deterministic Rules & Calculations" },
            { label: "Prompt / Context Injection" },
            { label: "LLM Communication Layer" },
            { label: "Safety Boundary Check" },
            { label: "User Response" },
          ],
        },
      },
      {
        no: "07",
        heading: "Safety by Design",
        body:
          "Because the product sits next to health decisions, its boundaries are designed as explicit, auditable rules rather than left to the model's discretion. It supports wellness communication and reflection — it does not replace clinical judgement.",
        safety: {
          can: {
            label: "WHAT AI CAN DO",
            items: [
              "Context-aware wellness communication",
              "Personalized explanations grounded in the user's own records",
              "Conversational support",
              "Pattern and record reflection within defined boundaries",
            ],
          },
          cannot: {
            label: "WHAT AI CANNOT DO",
            items: [
              "Clinical diagnosis",
              "Medication decisions",
              "Emergency assessment",
              "Claims of medical certainty",
            ],
          },
          escalation: {
            label: "ESCALATION",
            items: [
              "Severe, unusual, or rapidly worsening symptoms",
              "Anything the rules flag as outside safe wellness-support scope",
              "Situations that call for qualified medical support — the user is directed to seek it",
            ],
          },
        },
      },
      {
        no: "08",
        heading: "Key Design Decisions",
        points: [
          "Split reasoning: rule-bound health logic stays deterministic; conversational empathy uses the LLM.",
          "The LLM is used for communication, not clinical reasoning — it explains and supports, it does not decide.",
          "Context injection over fine-tuning, to keep the model grounded, controllable, and honest about what it knows.",
          "Safety boundaries designed as explicit, auditable rules, not left to the model's discretion.",
          "Use deterministic logic where accuracy and consistency matter; use the LLM where personalization and natural-language interaction create value.",
        ],
      },
      {
        no: "09",
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

  // ==========================================================================
  // 05 · SalesPilot — Hackathon Project (NUS-ISS "Show Me Your Agents")
  // Status: IN PROGRESS. Prototype / in-progress portfolio work — NOT a
  // deployed commercial product. No confirmed public demo/GitHub URL, so no
  // `url` is set and no GitHub/Demo button is shown.
  // New optional block types used here: `blocks` (editorial panels) and
  // `chips` (labelled chip lists). Both are rendered by CaseStudy.jsx.
  // ==========================================================================
  {
    slug: "salespilot",
    number: "05",
    name: "SalesPilot",
    subtitle: "Agentic WhatsApp Sales Opportunity Assistant",
    year: "2026",
    domain: "Agentic AI · Sales Enablement",
    status: "In Progress",
    event: "NUS-ISS Show Me Your Agents Hackathon · September 2026",
    valueProp:
      "Turning customer conversations into dynamic sales opportunities — not just automated replies.",
    proofPoint:
      "A stateful opportunity-intelligence agent: it scores each conversation 0–100 and escalates high-value or negotiation-stage cases to a human seller.",
    summary:
      "An agentic WhatsApp assistant that reads conversation history to identify a customer's sales stage, detect signals, maintain an Opportunity Profile, compute a 0–100 Opportunity Value Score, and choose the next best action — automating routine enquiries while escalating high-value situations to a human.",
    detail:
      "Led the initial product concept and early build: product design, agent logic, RAG requirements, human-in-the-loop design, and overall integration direction.",
    tech: ["Agent Logic", "RAG Requirements", "Human-in-the-Loop", "AWS", "GitHub"],
    // No confirmed public demo/GitHub URL — intentionally omitted.
    url: "",
    caseStudy: [
      {
        no: "01",
        heading: "Challenge",
        body:
          "Sales teams lose time answering high-volume recurring enquiries — product availability, pricing, delivery charges, operating hours — while the signals that actually matter stay buried in fragmented WhatsApp conversations: purchase intent, hesitation, competitor comparison, expansion opportunity, and risk. A team cannot treat every message equally, but it is hard to see who is approaching purchase, who is hesitating, who is comparing competitors, and who needs human attention.",
      },
      {
        no: "02",
        heading: "Context",
        body:
          "Sales representatives receive a high volume of enquiries through WhatsApp every day and have limited capacity. The system must automate routine enquiries but preserve human judgement for high-value, sensitive, uncertain, or negotiation-stage situations.",
      },
      {
        no: "03",
        heading: "My Role",
        body:
          "Led the initial concept and early product build. Owned the product design, agent logic, RAG requirements, human-in-the-loop design, and the overall integration direction. This is a hackathon team project; contributions beyond these areas are shared team work rather than solely mine.",
      },
      {
        no: "04",
        heading: "Key Decision",
        body:
          "Do not build a reply-generation chatbot. Build a stateful sales-opportunity agent that continuously interprets conversation history, updates the customer's sales stage, identifies signals, scores opportunity value, and recommends the correct next action. SalesPilot is positioned as opportunity intelligence, not a generic Q&A bot.",
      },
      {
        no: "05",
        heading: "Solution",
        body:
          "After every customer message, SalesPilot runs a stateful loop: it recalls conversation memory, detects the customer's current state, extracts sales signals, updates the Opportunity Profile, recomputes the Opportunity Value Score, and picks the next best action — either an automated AI response or a deliberate handoff to a human seller — while keeping the dashboard in sync.",
        flow: {
          steps: [
            { label: "Customer Message" },
            { label: "Conversation Memory" },
            { label: "State Detection" },
            { label: "Sales Signal Detection" },
            { label: "Opportunity Profile Update" },
            { label: "Opportunity Value Score" },
            { label: "Next Best Action" },
          ],
          branch: [
            { label: "AI Response", note: "routine · low-risk" },
            { label: "Human Handoff", note: "high-value · sensitive · negotiation" },
          ],
        },
        chips: [
          {
            label: "OPPORTUNITY STATES",
            items: [
              "Cold Lead",
              "Potential Interest",
              "Evaluation & Hesitation",
              "High Intent",
              "Closed / Active",
              "Dormant / Lost",
            ],
          },
          {
            label: "EXAMPLE SIGNALS",
            items: [
              "Purchase",
              "Hesitation",
              "Competitor Comparison",
              "Expansion",
              "Withdrawal",
              "Conversion",
              "Negotiation",
              "Explicit Human Request",
              "Compliance / Risk Signal",
            ],
          },
        ],
        points: [
          "Detect the customer's changing stage in the buying journey.",
          "Track sales signals across conversation history.",
          "Convert signals into a 0–100 Opportunity Value Score.",
          "Prioritise customer opportunities instead of treating every enquiry equally.",
          "Recommend the Next Best Action.",
          "Escalate high-value, sensitive, uncertain, or negotiation-related situations to a human seller.",
          "Preserve context when a human takes over.",
          "Synchronise opportunity information to the dashboard.",
        ],
        note:
          "Diagram continues to a Dashboard that surfaces the synchronised opportunity information for the sales team.",
      },
      {
        no: "06",
        heading: "Innovation",
        blocks: [
          {
            title: "DYNAMIC OPPORTUNITY RECOGNITION",
            body:
              "SalesPilot continuously tracks the customer's buying journey and updates opportunity stage, helping sales teams distinguish between customers approaching purchase and customers who still need nurturing.",
          },
          {
            title: "SALES SIGNAL DETECTION",
            body:
              "The agent detects observable purchase, hesitation, competitor, expansion, negotiation, and risk signals that would otherwise remain hidden across high-volume chat histories.",
          },
          {
            title: "OPPORTUNITY VALUE SCORING",
            body:
              "SalesPilot converts conversation signals into a 0–100 Opportunity Value Score, helping sales teams prioritise scarce human attention.",
          },
          {
            title: "AI-TO-HUMAN HANDOFF",
            body:
              "Routine enquiries can be automated, while high-value, sensitive, uncertain, or negotiation-stage cases are deliberately escalated to a salesperson.",
          },
        ],
      },
      {
        no: "07",
        heading: "Demo Journey",
        body:
          "A representative journey the agent is designed to handle end to end — from first interest through negotiation, human takeover, and expansion:",
        flow: {
          steps: [
            { label: "Potential Interest" },
            { label: "Evaluation & Hesitation" },
            { label: "Competitor Signal" },
            { label: "Opportunity Score Updates" },
            { label: "High Intent" },
            { label: "Negotiation" },
            { label: "Human Takeover" },
            { label: "Closed / Active" },
            { label: "Expansion Opportunity" },
          ],
        },
        note:
          "Proof assets in preparation: agent workflow diagram, chat interface screenshots, opportunity dashboard, HITL handoff screen, and demo journey screenshots. A final demo video and public project repository will be linked only once completed and confirmed publicly accessible.",
      },
      {
        no: "08",
        heading: "Outcome",
        body:
          "In progress. SalesPilot is being prepared for hackathon demonstration and submission. The current focus is validating a complete customer journey, finalising the demo, report, deployment, and public project materials.",
      },
      {
        no: "09",
        heading: "Reflection",
        body:
          "The value of sales AI is not only faster replies. It is the ability to identify changing customer intent, prioritise limited sales capacity, and bring a human seller into the conversation at the right moment.",
      },
    ],
  },

  // ==========================================================================
  // 06 · Grounded Enterprise Policy & Procedure Assistant — Individual Project
  // Status: PROTOTYPE / IN PROGRESS. Enterprise AI / AI Product prototype —
  // NO claimed production deployment, user adoption, award, or business metric.
  // No confirmed public demo/GitHub URL, so no button is shown.
  // ==========================================================================
  {
    slug: "grounded-enterprise-policy-assistant",
    number: "06",
    name: "Grounded Enterprise Policy & Procedure Assistant",
    subtitle: "Evidence-Based Internal Knowledge Assistant",
    year: "2026",
    domain: "Enterprise AI · RAG",
    status: "Prototype",
    event: "Individual Project · September 2026",
    valueProp:
      "Turning enterprise policy documents into grounded, traceable answers instead of unsupported LLM responses.",
    proofPoint:
      "Retrieval-first by design: it checks whether retrieved evidence is sufficient before answering — and refuses when it is not.",
    summary:
      "An Enterprise AI assistant that answers internal policy and procedure questions from retrieved document evidence: it retrieves before it answers, cites the source used, and refuses when evidence is insufficient or ambiguous.",
    detail:
      "Individual end-to-end build: problem definition, information architecture, RAG workflow, retrieval logic, answer constraints, citation and evidence mechanisms, refusal/escalation logic, and overall product design.",
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
    url: "",
    caseStudy: [
      {
        no: "01",
        heading: "Challenge",
        body:
          "Employees need fast answers about internal policies and procedures, but traditional document search is slow and fragmented, and documents can be misunderstood. A generic LLM makes it worse: it may hallucinate, fail to cite a source, answer questions it should not, or rely on incomplete or outdated policy information.",
      },
      {
        no: "02",
        heading: "Context",
        body:
          "Internal policy questions require more than helpful language. The answer must be based on authorised documents, traceable to a source, and careful when evidence is missing or uncertain.",
      },
      {
        no: "03",
        heading: "My Role",
        body:
          "Individual Project / End-to-End Builder. Defined the problem, information architecture, RAG workflow, retrieval logic, answer constraints, citation mechanisms, evidence threshold, refusal / escalation logic, and product design.",
      },
      {
        no: "04",
        heading: "Key Decision",
        body:
          "The LLM cannot answer first and search later. It must retrieve enterprise-document evidence first, assess whether that evidence is sufficient, then generate a grounded answer with citations — and refuse when evidence is absent, incomplete, or ambiguous.",
        flow: {
          steps: [
            { label: "Question" },
            { label: "Retrieve Evidence" },
            { label: "Assess Evidence Sufficiency" },
            { label: "Generate Grounded Answer with Citation" },
          ],
          branch: [
            { label: "Answer with Citation", note: "evidence sufficient" },
            { label: "Refuse / Escalate", note: "evidence insufficient" },
          ],
        },
      },
      {
        no: "05",
        heading: "Solution",
        body:
          "A retrieval-augmented pipeline turns enterprise policy and procedure documents into grounded answers. Documents are processed and chunked, indexed as TF-IDF vectors, and matched to each question by cosine similarity. At query time, retrieved evidence passes an evidence-threshold check before the foundation model composes a response — which either cites its sources or refuses.",
        flow: {
          steps: [
            { label: "Enterprise Policy & Procedure Documents" },
            { label: "Document Processing" },
            { label: "Chunking" },
            { label: "TF-IDF Indexing" },
            { label: "Cosine Similarity Retrieval" },
            { label: "Retrieved Evidence" },
            { label: "Evidence Threshold Check" },
            { label: "Foundation Model Response" },
          ],
          branch: [
            { label: "Citation", note: "grounded answer" },
            { label: "Refusal / Escalation", note: "insufficient evidence" },
          ],
        },
        points: [
          "Retrieval-Augmented Generation instead of unsupported free-form generation.",
          "Document retrieval and structured chunking.",
          "TF-IDF vectorisation and cosine-similarity retrieval.",
          "Evidence-backed answers with citations.",
          "Evidence thresholds before answer generation.",
          "Refusal when sources are insufficient.",
          "Clarification when a question is underspecified (for example, goods vs services).",
        ],
      },
      {
        no: "06",
        heading: "Safety & Governance by Design",
        blocks: [
          {
            title: "GROUNDED ANSWERS",
            body:
              "The assistant responds from retrieved enterprise policy and procedure evidence rather than unsupported model memory.",
          },
          {
            title: "TRACEABLE CITATIONS",
            body:
              "Users can see the relevant source or document reference behind an answer.",
          },
          {
            title: "REFUSAL AND ESCALATION",
            body:
              "When evidence is insufficient, incomplete, or ambiguous, the assistant does not fabricate confidence. It signals uncertainty and directs the user to verify with the relevant policy owner.",
          },
        ],
      },
      {
        no: "07",
        heading: "Proof",
        body:
          "Proof assets in preparation: assistant prototype screenshots, the retrieval workflow diagram, the citation interface, evaluation-set examples, an example accepted answer with evidence, and an example refusal / escalation case.",
        note:
          "No public GitHub or demo links are shown because none are confirmed publicly accessible.",
      },
      {
        no: "08",
        heading: "Outcome",
        body:
          "An MVP / prototype designed to validate enterprise document retrieval, evidence citation, and refusal / escalation under uncertainty. It is currently presented as an Enterprise AI and AI Product prototype, with no claimed production deployment, user adoption, award, or formal business metric.",
      },
      {
        no: "09",
        heading: "Reflection",
        body:
          "In enterprise AI, useful answers are not enough. Trust depends on whether an answer is grounded in authorised evidence, traceable to a source, and able to recognise when the system should not answer.",
      },
    ],
  },

  // ==========================================================================
  // 07 · PE6201 A2 — Health Insurance Claim Decision Agent — ACADEMIC TEAM PROJECT
  // Six-member team build (repo release Version 3.0). Weng Yongting's verified
  // contribution is EVALUATION + SAFETY TESTING, NOT the full agent/insurance
  // architecture. Do NOT imply she built the core agent loop, insurance tools,
  // all guardrails, cost model, decision ledger, or the end-to-end system.
  // Public links are confirmed and shown as buttons via the `links` array.
  // ==========================================================================
  {
    slug: "health-insurance-claim-decision-agent",
    number: "07",
    name: "Health Insurance Claim Decision Agent",
    subtitle: "Evaluation Harness & Escalation Safety Testing",
    year: "2026",
    domain: "AI Agent · Evaluation · Safety",
    teamProject: true,
    event: "PE6201 A2 · Academic Team Project · Six-member team · Repository Version 3.0",
    valueProp:
      "A team-built insurance claim decision agent, evaluated through scripted and live-model test workflows with safety guardrails and reproducible result analysis.",
    proofPoint:
      "Designed hostile-input and escalation safety cases within a shared 40-case evaluation suite.",
    summary:
      "A team-built health-insurance claim decision agent supporting deterministic scripted evaluation, live LLM evaluation, safety guardrails, cost tracking, and reproducible result analysis. Weng Yongting owned the evaluation-harness and scripted-evaluation work (D4 and D5(a)) and designed six hostile-input and escalation safety cases within the shared 40-case test suite.",
    detail:
      "Contributed evaluation-harness and scripted-evaluation work to a Version 3.0 team build. Designed hostile-input and escalation safety cases; contributed to shared evaluation, live-model testing, report preparation, and demo assembly. Did not independently build the core agent loop, insurance tools, guardrails, cost model, decision ledger, or the full end-to-end system.",
    tech: [
      "Evaluation Harness",
      "Scripted Evaluation",
      "Live-Model Evaluation",
      "Safety Guardrails",
      "Hostile-Input Testing",
      "Reproducible Analysis",
    ],
    // Confirmed public links — rendered as buttons on the case-study page.
    // `url` is intentionally left empty; multiple labelled buttons come from `links`.
    url: "",
    links: [
      { label: "GITHUB REPOSITORY", url: "https://github.com/symbioticshark/A2_HealthInsurance" },
      { label: "DEMO VIDEO", url: "https://youtu.be/f-cxrW4esAA" },
    ],
    caseStudy: [
      {
        no: "01",
        heading: "Challenge",
        body:
          "Insurance claim decisions are safety-sensitive. An AI system must handle incomplete, adversarial, ambiguous, and escalation-triggering inputs without generating unsafe or unsupported decisions.",
      },
      {
        no: "02",
        heading: "Context",
        body:
          "The project was a six-member academic team build of a health-insurance claim decision agent. The system combines deterministic scripted evaluation, live LLM evaluation, safety guardrails, cost tracking, and reproducible result analysis. The repository release is Version 3.0, using a layered architecture, session-based history and comparison, safer configuration, transactional result writing, guardrails, and reproducible failure testing.",
      },
      {
        no: "03",
        heading: "My Role",
        body:
          "Co-owned the evaluation-harness and scripted-evaluation work for D4 and D5(a) with one teammate. Designed hostile-input and escalation safety cases, contributing six cases to the shared 40-case evaluation suite (CLM-8941, CLM-8952, CLM-9023, CLM-9024, CLM-9025, CLM-9026). Also contributed to shared evaluation, a live-model evaluation battery, report preparation, and demo assembly. The core agent loop, insurance tools, guardrails, cost model, and decision ledger were team work, not built solely by me.",
      },
      {
        no: "04",
        heading: "Key Decision",
        body:
          "Treat testing as part of safety design, not as a final technical check. The evaluation suite deliberately includes hostile-input and escalation scenarios to test whether the system can refuse, route, or safely handle risky cases instead of producing unsupported claim decisions.",
      },
      {
        no: "05",
        heading: "Evaluation Workflow",
        body:
          "Each claim scenario runs through a repeatable, comparable pipeline: a scripted case drives the agent, a guardrail check gates the behaviour, the result is compared against the expected outcome and recorded, and anything unsafe or uncertain branches to failure analysis or safe escalation.",
        flow: {
          steps: [
            { label: "Claim Scenario" },
            { label: "Scripted Evaluation Case" },
            { label: "Agent / Tool Decision" },
            { label: "Guardrail Check" },
            { label: "Expected Outcome Comparison" },
            { label: "Result Recording" },
          ],
          branch: [
            { label: "Failure Analysis", note: "mismatch · unsafe behaviour" },
            { label: "Safe Escalation", note: "uncertain · risky case" },
          ],
        },
      },
      {
        no: "06",
        heading: "Safety Testing",
        blocks: [
          {
            title: "SCRIPTED EVALUATION",
            body:
              "Repeatable test cases make agent behaviour comparable across versions and changes.",
          },
          {
            title: "HOSTILE-INPUT TESTING",
            body:
              "Adversarial and unsafe inputs test whether the system maintains safe behaviour under pressure.",
          },
          {
            title: "ESCALATION SAFETY",
            body:
              "Cases requiring uncertainty handling or escalation help verify that the agent does not make unsupported insurance decisions.",
          },
        ],
      },
      {
        no: "07",
        heading: "Proof",
        body:
          "The project repository (Version 3.0) and demo video are publicly available — see the buttons below. Weng Yongting's evaluation and safety-testing contribution sits within the shared team suite:",
        chips: [
          {
            label: "EVALUATION SUITE",
            items: [
              "40 shared evaluation cases",
              "6 hostile-input & escalation cases (designed by Weng Yongting)",
              "Version 3.0 repository structure",
              "Scripted evaluation & reproducible result analysis",
              "Team project attribution",
            ],
          },
          {
            label: "OWNED CASES",
            items: ["CLM-8941", "CLM-8952", "CLM-9023", "CLM-9024", "CLM-9025", "CLM-9026"],
          },
        ],
      },
      {
        no: "08",
        heading: "Outcome",
        body:
          "Contributed evaluation-harness and scripted-evaluation work to a Version 3.0 team health-insurance claim decision agent. The project established a reproducible evaluation workflow with scripted cases, live-model evaluation, safety guardrails, and documented team contributions.",
      },
      {
        no: "09",
        heading: "Reflection",
        body:
          "Safety-critical AI systems should not be assessed only by whether they can produce plausible answers. They must also be tested for how they behave when inputs are adversarial, uncertain, incomplete, or require escalation.",
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
