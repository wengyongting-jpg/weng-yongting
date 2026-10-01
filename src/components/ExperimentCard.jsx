// Reusable experiment card for the AI LAB.
//
// Renders one experiment honestly: status label, the guiding question,
// the hypothesis, the approach, and the metrics under consideration.
// No results are shown — these are exploration directions, not outcomes.
//
// `status` is mapped to a CSS modifier for an honest status chip.
const STATUS_CLASS = {
  Exploring: "is-exploring",
  Prototype: "is-prototype",
  "Experiment in Progress": "is-progress",
  "Coming Soon": "is-coming",
};

function ExperimentCard({ experiment }) {
  const { id, title, domain, status, question, hypothesis, approach, metrics } = experiment;

  return (
    <article className={`experiment-card ${STATUS_CLASS[status] || ""}`}>
      <header className="experiment-head">
        <span className="experiment-no">EXPERIMENT {id}</span>
        <span className="experiment-status">{status}</span>
      </header>

      <div className="experiment-domain">{domain}</div>
      <h3 className="experiment-title">{title}</h3>

      <p className="experiment-question">
        <small>QUESTION</small>
        {question}
      </p>

      {hypothesis && (
        <p className="experiment-hypothesis">
          <small>HYPOTHESIS</small>
          {hypothesis}
        </p>
      )}

      {approach && approach.length > 0 && (
        <div className="experiment-approach">
          <small>APPROACH</small>
          <ul>
            {approach.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {metrics && metrics.length > 0 && (
        <div className="experiment-metrics">
          <small>METRICS UNDER CONSIDERATION</small>
          <ul>
            {metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default ExperimentCard;
