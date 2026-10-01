// Resume — concise "Selected Projects" entries.
//
// These mirror the two prototype / in-progress portfolio cases now in Work
// (SalesPilot, Grounded Enterprise Policy & Procedure Assistant). Recruiter-
// friendly: two bullets each, no numerical impact claims, honest status.
export const selectedProjects = [
  {
    year: "2026",
    name: "SalesPilot — NUS-ISS Show Me Your Agents Hackathon",
    meta: "September 2026 · In Progress",
    achievements: [
      "Led the initial product concept and design of an agentic WhatsApp sales assistant that transforms fragmented customer conversations into evolving sales opportunities rather than simple automated replies.",
      "Defined stateful agent logic, RAG requirements, opportunity scoring and human-in-the-loop escalation to detect sales signals, update customer opportunity profiles and recommend the next best sales action.",
    ],
  },
  {
    year: "2026",
    name: "Grounded Enterprise Policy & Procedure Assistant",
    meta: "Individual Project · September 2026 · Prototype",
    achievements: [
      "Built an Enterprise AI prototype that retrieves policy and procedure evidence before generating answers, designed for answer traceability through source citations rather than relying on unsupported LLM responses.",
      "Designed the end-to-end RAG workflow, including document retrieval, chunking, TF-IDF vector retrieval and cosine matching, evidence thresholds, refusal behaviour, and clarification for underspecified questions.",
    ],
  },
  {
    year: "2026",
    name: "PE6201 A2 — Health Insurance Claim Decision Agent",
    meta: "Academic Team Project",
    achievements: [
      "Co-developed evaluation-harness and scripted-evaluation workflows (with one teammate) for a team-built health-insurance claim decision agent, supporting reproducible assessment of agent behaviour and expected outcomes.",
      "Designed 6 hostile-input and escalation safety cases within a shared 40-case evaluation suite, testing safe handling of adversarial, uncertain and escalation-triggering claim scenarios.",
      "Contributed to shared live-model evaluation, report preparation and demo assembly; project repository and demo video are publicly available.",
    ],
    // Confirmed public links.
    links: [
      { label: "GitHub", url: "https://github.com/symbioticshark/A2_HealthInsurance" },
      { label: "Demo", url: "https://youtu.be/f-cxrW4esAA" },
    ],
  },
  {
    year: "2026",
    name: "Singapore Rental Intelligence Copilot",
    meta: "NTU Generative AI · Academic Team Project",
    achievements: [
      "Co-developed a generative AI assistant that extracts facts from unstructured rental listings, checks risks against an 18-entry rental-rule knowledge base, and generates evidence-grounded landlord clarification questions for international students.",
      "Designed and ran a controlled A/B/C comparison across 20 test cases and three system versions, scoring 60 outputs on four dimensions — measuring real improvement from 62.5% (baseline) to 85.0% (constrained prompt) to 90.0% (prompt + retrieval).",
    ],
    links: [
      { label: "Demo", url: "https://gemini.google.com/share/c16fc3fe290f?skid=3525612e-9c27-4dd4-ad04-d655841b497f" },
    ],
  },
];
