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
    meta: "Individual Project · September–October 2026 · Prototype",
    achievements: [
      "Built an Enterprise AI prototype that retrieves policy and procedure evidence before generating answers, improving answer traceability through source citations rather than relying on unsupported LLM responses.",
      "Designed the end-to-end RAG workflow, including document retrieval, chunking, embeddings, vector search, evidence thresholds, refusal behaviour and escalation for uncertain or insufficient evidence.",
    ],
  },
  {
    year: "2026",
    name: "PE6201 A2 — Health Insurance Claim Decision Agent",
    meta: "Academic Team Project",
    achievements: [
      "Developed evaluation-harness and scripted-evaluation workflows for a team-built health-insurance claim decision agent, supporting reproducible assessment of agent behaviour and expected outcomes.",
      "Designed 6 hostile-input and escalation safety cases within a shared 40-case evaluation suite, testing safe handling of adversarial, uncertain and escalation-triggering claim scenarios.",
      "Contributed to shared live-model evaluation, report preparation and demo assembly; project repository and demo video are publicly available.",
    ],
    // Confirmed public links.
    links: [
      { label: "GitHub", url: "https://github.com/symbioticshark/A2_HealthInsurance" },
      { label: "Demo", url: "https://youtu.be/f-cxrW4esAA" },
    ],
  },
];
