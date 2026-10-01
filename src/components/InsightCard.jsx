import { useState } from "react";

// Reusable insight card for the THINKING journal.
//
// Short professional insight with optional expandable detail.
// No fabricated long-form articles — the `detail` (when present) extends
// the reasoning rather than padding it.
function InsightCard({ post }) {
  const [open, setOpen] = useState(false);
  const { category, title, body, detail } = post;

  return (
    <article className="insight-card">
      <span className="insight-category">{category}</span>
      <h3 className="insight-title">{title}</h3>
      <p className="insight-body">{body}</p>

      {detail && (
        <div className="insight-detail-wrap">
          <button
            type="button"
            className="insight-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? "COLLAPSE −" : "EXPAND +"}
          </button>
          {open && <p className="insight-detail">{detail}</p>}
        </div>
      )}
    </article>
  );
}

export default InsightCard;
