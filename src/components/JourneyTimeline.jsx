// Maps the 5-stage narrative arc to verified evidence from the profile.
// Each evidence line is derived from a real profile item (role, bullet, skill, or project).
const stages = [
  {
    stage: "Business foundation",
    evidence: [
      "Fuyao Group — General Ledger Accounting Assistant",
      "Grant Thornton China & RSM — Audit Intern",
      "Huafu Securities — Assistant to Director of Investment Advisory",
    ],
  },
  {
    stage: "Data & Analysis",
    evidence: [
      "Excel / VBA, unit-cost and inventory-aging analysis (Grant Thornton)",
      "200+ and 114-response surveys analysed (competitions / Fuyao)",
      "Financial Modelling and Data Visualization",
    ],
  },
  {
    stage: "Digital Transformation",
    evidence: [
      "Internet+ / Zhiyi Digital — SaaS built with ByteDance",
      "ERP finance-system and project-management proposals",
      "Process optimization and barcode-scanning automation (Fuyao)",
    ],
  },
  {
    stage: "AI",
    evidence: [
      "Yuexi — hybrid AI architecture (cycle logic + health scoring + LLM)",
      "LLM API, Prompt Engineering, AI-assisted Development",
      "IMMS 2025 — AI investment & market competitiveness research",
    ],
  },
  {
    stage: "Product / Solution Design",
    evidence: [
      "Yuexi — user scenarios, AI interactions, safety boundaries",
      "Challenge Cup — go-to-market strategy and brand localization",
      "AI Product Design",
    ],
  },
];

function JourneyTimeline() {
  return (
    <div className="journey">
      {stages.map((s, i) => (
        <div className="journey-step" key={s.stage}>
          <div className="journey-stage">
            <span className="journey-no">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.stage}</h3>
          </div>
          <ul className="journey-evidence">
            {s.evidence.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default JourneyTimeline;
