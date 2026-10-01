// THINKING — a lightweight professional knowledge journal.
//
// These are short insight cards expressing stated professional positions,
// NOT fabricated long-form articles. Each card has a short body and an
// optional `detail` (expandable) that extends the reasoning without padding.
//
// To add a new post, append a new object to this array. The Thinking page
// and InsightCard render automatically — no UI changes required.

export const posts = [
  {
    slug: "not-every-problem-needs-an-llm",
    category: "AI PRODUCT",
    title: "Not every problem needs an LLM.",
    body:
      "The pull toward LLMs is strong because they feel general-purpose. But a deterministic rule is faster, cheaper, and auditable — and for bounded decisions it is usually the right answer. The LLM should be reserved for the part of the problem that is genuinely language-shaped.",
    detail:
      "Before reaching for a model, ask: is this decision bounded by rules? Is the input structured? Does it need explanation or empathy? If the answer is yes, yes, no — a rule will outperform an LLM at a fraction of the cost. Yuexi follows exactly this split: cycle logic stays deterministic, the LLM handles communication.",
  },
  {
    slug: "ai-transformation-is-not-only-a-model-problem",
    category: "ENTERPRISE AI",
    title: "AI transformation is not only a model problem.",
    body:
      "Enterprise AI fails in the seams, not the model: data quality, process fit, change management, and trust. A better model rarely fixes a broken pipeline. Transformation is an architecture and operating problem that happens to include a model.",
    detail:
      "The Fuyao and Refund Processing work both show the same pattern: the bottleneck is upstream of the model. Inconsistent data and unclear ownership defeat AI faster than a weak model does. Fix the pipeline first.",
  },
  {
    slug: "good-automation-is-not-maximum-automation",
    category: "AUTOMATION",
    title: "Good automation is not maximum automation.",
    body:
      "The goal is not to automate everything, but to automate the right things. A confidence threshold is a design decision about trust — it draws the line between what a machine may decide and what a person must. Good automation knows where to stop.",
    detail:
      "The Refund Processing project is built around this idea: high-confidence cases close automatically, low-confidence cases go to a human reviewer with context attached. Automation rate is not a virtue; correctness and auditability are.",
  },
  {
    slug: "start-with-the-user-problem-not-the-technology",
    category: "PRODUCT",
    title: "Start with the user problem, not the technology.",
    body:
      "Technology-first products solve for the tool. User-first products solve for the person. The strongest designs start from a concrete user scenario and a real pain point, then choose the technology last.",
    detail:
      "Yuexi began from user scenarios and pain points before any model choice. The scenario defined the safety boundary; the boundary defined the architecture; the architecture chose the technology. Reverse that order and you build something impressive that nobody uses.",
  },
  {
    slug: "analysis-is-only-as-reliable-as-the-data-behind-it",
    category: "DATA",
    title: "Analysis is only as reliable as the data behind it.",
    body:
      "A sophisticated model on inconsistent data produces sophisticated wrong answers. Trust in analysis comes from the pipeline that produced the data — reconciliation, validation, provenance — not from the analytics layer on top.",
    detail:
      "At Fuyao, the first job was fixing data consistency across 800+ vouchers before any analysis was meaningful. At Huafu, a clean investment-return framework mattered because it forced assumptions into the open. In both, the data and the framework were the work; the analysis was the easy part.",
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
