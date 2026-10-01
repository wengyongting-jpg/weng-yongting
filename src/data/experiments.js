// AI LAB — learning & experiment directions, NOT completed experiments.
//
// IMPORTANT: These are exploration directions. No results are fabricated.
// Each experiment carries a `status` from the controlled vocabulary below so
// the UI can render an honest label without inventing outcomes.
//
// Status vocabulary:
//   "Exploring"            — active research direction, no build yet
//   "Prototype"            — early build exists, not validated
//   "Experiment in Progress" — running, no conclusions yet
//   "Coming Soon"          — queued, not started
//
// To add a new experiment later, append a new object to this array.
// The ExperimentCard + Lab page render automatically — no UI changes required.

export const experiments = [
  {
    id: "001",
    slug: "rag-and-retrieval",
    title: "RAG & Retrieval",
    domain: "RAG",
    status: "Exploring",
    question: "Does more context always improve answer quality?",
    hypothesis:
      "Retrieval quantity is not retrieval quality. The experiment asks how retrieved context size and relevance trade off against answer accuracy, latency, and cost.",
    approach: [
      "Vary retrieved-chunk count and relevance threshold.",
      "Compare answer quality across retrieval depths.",
      "Track accuracy, latency, and cost together, not in isolation.",
    ],
    metrics: ["Accuracy", "Latency", "Cost"],
  },
  {
    id: "002",
    slug: "llm-vs-deterministic-logic",
    title: "LLM vs Deterministic Logic",
    domain: "Architecture",
    status: "Exploring",
    question: "Which decisions should belong to an LLM?",
    hypothesis:
      "Not every decision benefits from an LLM. The experiment maps decision types to the cheapest logic that handles them safely, reserving the LLM for genuinely ambiguous, language-shaped tasks.",
    approach: [
      "Classify decisions by risk, ambiguity, and reversibility.",
      "Assign deterministic rules where outcomes are bounded.",
      "Reserve the LLM for judgement, synthesis, and natural language.",
    ],
    metrics: ["Reliability", "Cost", "Human Review Rate"],
  },
  {
    id: "003",
    slug: "human-in-the-loop-automation",
    title: "Human-in-the-loop Automation",
    domain: "Automation",
    status: "Prototype",
    question: "Where should automation stop?",
    hypothesis:
      "Automation should stop at the confidence boundary. The experiment tests whether a confidence threshold — like the one in the Refund Processing project — is a reliable, auditable cut-off between automated and human handling.",
    approach: [
      "Define a confidence threshold as the automation boundary.",
      "Route high-confidence cases automatically, low-confidence to review.",
      "Measure how often the boundary is right vs. conservative.",
    ],
    metrics: ["Automation Rate", "Error Rate", "Human Review Rate"],
  },
  {
    id: "004",
    slug: "ai-product-evaluation",
    title: "AI Product Evaluation",
    domain: "Evaluation",
    status: "Coming Soon",
    question: "How do you measure an AI product end-to-end?",
    hypothesis:
      "An AI product is only as good as the full stack behind the model. The experiment builds an evaluation frame that measures the whole product, not just the model in isolation.",
    approach: [
      "Evaluate model, pipeline, and experience together.",
      "Define what 'good' means per user task before measuring.",
      "Report trade-offs, not single scores.",
    ],
    metrics: ["Accuracy", "Latency", "Cost", "Reliability", "User Experience", "Business Impact"],
  },
];

export function getExperiment(slug) {
  return experiments.find((e) => e.slug === slug);
}
