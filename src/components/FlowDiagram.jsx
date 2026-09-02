// Reusable flow diagram for case-study pipelines.
//
// Renders a vertical sequence of labelled nodes joined by connectors.
// Supports an optional OR branch at the end:
//   steps:  [{ label, note? }]   linear pipeline nodes (top → bottom)
//   branch: [{ label, note? }]   optional OR split rendered side-by-side
//
// Data shape is defined in src/data/projects.js (the `flow` field on a section).
function FlowDiagram({ flow }) {
  if (!flow || !flow.steps || flow.steps.length === 0) return null;

  return (
    <figure className="flow" aria-label="Process flow diagram">
      <ol className="flow-steps">
        {flow.steps.map((s, i) => (
          <li className="flow-node" key={i}>
            <span className="flow-node-label">{s.label}</span>
            {s.note && <span className="flow-node-note">{s.note}</span>}
          </li>
        ))}
      </ol>

      {flow.branch && flow.branch.length > 0 && (
        <div className="flow-branch">
          <span className="flow-or">OR</span>
          <div className="flow-branch-options">
            {flow.branch.map((b, i) => (
              <div className="flow-node flow-node-branch" key={i}>
                <span className="flow-node-label">{b.label}</span>
                {b.note && <span className="flow-node-note">{b.note}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </figure>
  );
}

export default FlowDiagram;
