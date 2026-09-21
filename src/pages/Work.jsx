import { Link } from "react-router-dom";
import { projects } from "../data/index.js";

// Editorial project index. Large numerals, asymmetric rows, minimal cards.
// Repeats over the projects data array — add a project in data and it appears here.
function Work() {
  return (
    <section className="section-wrap work-index">
      <div className="section-heading">
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2>SELECTED<br /><span>WORK.</span></h2>
      </div>

      <ol className="work-list">
        {projects.map((p) => (
          <li className="work-row" key={p.slug}>
            <Link to={`/work/${p.slug}`} className="work-row-link">
              <span className="work-no">{p.number}</span>
              <div className="work-row-main">
                <p className="work-kicker">
                  {p.domain} · {p.year}
                  {p.status && <span className="work-status">STATUS / {p.status.toUpperCase()}</span>}
                  {p.teamProject && <span className="work-status is-team">TEAM PROJECT</span>}
                </p>
                <h3>{p.name}</h3>
                <p className="work-subtitle">{p.subtitle}</p>
                {/* Prefer the concise value proposition on cards; fall back to the full summary. */}
                <p className="work-summary">{p.valueProp || p.summary}</p>
                {p.proofPoint && <p className="work-proof">{p.proofPoint}</p>}
                <span className="text-link">VIEW CASE STUDY <b>↗</b></span>
              </div>
              <span className="work-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Work;
