// ============================================================================
// A2 · INDIVIDUAL · HACKATHON — central structured content model
// ============================================================================
//
// The user asked for A2, an individual project, and a hackathon project to be
// integrated. As of this build, NO verified facts (titles, dates, roles,
// tools, deliverables, outcomes, demo/GitHub URLs) have been supplied for them.
//
// Per the project's hard rule — do not invent awards, metrics, users, outcomes,
// GitHub links, demo links, employers, project dates, or technical
// implementations — these are kept as EMPTY, clearly-marked content objects.
//
// They render on the LAB page (not Work) under an "AWAITING CONTENT" state so
// the site stays honest: an unbuilt case is shown as a reserved slot, never as
// a finished portfolio case study.
//
// NOTE: The A2 project (Health Insurance Claim Decision Agent), the Individual
// project (Grounded Enterprise Policy & Procedure Assistant), and the Hackathon
// project (SalesPilot) have ALL now been supplied with verified content and
// PROMOTED to full Work case studies in src/data/projects.js. No reserved slots
// remain, so this array is empty.
//
// -------------------- HOW TO COMPLETE A PROJECT --------------------
// Fill the fields below with verified information. When `title`, `myRole`,
// `problem`, and `approach` are all present, set `ready: true` and the entry
// becomes eligible to be promoted into src/data/projects.js as a full case
// study using the standard 8-section structure.
//
// Field schema (all optional until verified):
//   type         "A2" | "Individual" | "Hackathon"
//   title        real project title
//   category     e.g. "AI · Product", "Automation", "Data"
//   year         real year or date range
//   teamSize     verified team size (Hackathon/A2), or null
//   myRole       what Weng Yongting personally owned
//   problem      the real problem statement
//   approach     the method / approach taken
//   tools        array of verified tools / methods
//   deliverables array of verified deliverables
//   outcomes     verified outcomes ONLY — leave empty if none proven
//   proof        array of verified proof assets (screenshots, diagrams, etc.)
//   demoUrl      verified public demo URL only
//   githubUrl    verified public repo URL only
//   status       "completed" | "prototype" | "in progress" | "archived"
//   ready        set true only when there is enough verified substance
// -------------------------------------------------------------------

// All three projects (A2, Individual, Hackathon) now have verified content and
// have been promoted to full Work case studies in src/data/projects.js:
//   - A2         -> health-insurance-claim-decision-agent
//   - Individual -> grounded-enterprise-policy-assistant
//   - Hackathon  -> salespilot
// This array is intentionally empty; the Lab "Next Cases" section only renders
// when it has entries, so no empty placeholder is shown. Add a new object here
// (using the schema above) to reserve a future slot.
export const upcomingProjects = [];

// Fields required before an entry can be promoted to a full Work case study.
const REQUIRED_FIELDS = ["title", "myRole", "problem", "approach"];

// Returns the list of required fields still missing for a given entry.
export function missingFields(project) {
  return REQUIRED_FIELDS.filter((f) => {
    const v = project[f];
    return v == null || (typeof v === "string" && v.trim() === "");
  });
}

// True when an entry has no verified content yet (still a reserved slot).
export function isAwaitingContent(project) {
  return !project.ready && missingFields(project).length === REQUIRED_FIELDS.length;
}
