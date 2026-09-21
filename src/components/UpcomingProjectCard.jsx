import { isAwaitingContent } from "../data/index.js";

// Renders one A2 / Individual / Hackathon entry.
//
// While a slot is awaiting verified content it shows an honest "AWAITING
// CONTENT" state describing what the slot is FOR — it never presents unbuilt
// work as a finished case. Once real facts are added (and `ready` is true),
// the same card renders the verified summary.
function UpcomingProjectCard({ project }) {
  const awaiting = isAwaitingContent(project);
  const { type, intent, title, category, year, myRole, problem, status } = project;

  return (
    <article className={`upcoming-card ${awaiting ? "is-awaiting" : ""}`}>
      <header className="upcoming-head">
        <span className="upcoming-type">{type} PROJECT</span>
        <span className="upcoming-status">{awaiting ? "AWAITING CONTENT" : status.toUpperCase()}</span>
      </header>

      {awaiting ? (
        <>
          <h3 className="upcoming-title upcoming-title-muted">Reserved slot</h3>
          <p className="upcoming-intent">{intent}</p>
          <p className="upcoming-note">
            Verified details not yet provided. This slot is intentionally left empty rather
            than filled with invented content.
          </p>
        </>
      ) : (
        <>
          <h3 className="upcoming-title">{title}</h3>
          <p className="upcoming-meta">
            {[category, year].filter(Boolean).join(" · ")}
          </p>
          {myRole && (
            <p className="upcoming-role">
              <small>MY ROLE</small>
              {myRole}
            </p>
          )}
          {problem && <p className="upcoming-problem">{problem}</p>}
        </>
      )}
    </article>
  );
}

export default UpcomingProjectCard;
