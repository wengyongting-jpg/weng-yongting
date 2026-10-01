import { Link } from "react-router-dom";
import { projects, research, leadership } from "../data/index.js";

// Three cards: flagship project, research, leadership stat.
// All content derived from verified profile data.
function HighlightCards() {
  const project = projects[0];
  const paper = research[0];
  const lead = leadership[0];

  return (
    <section className="section-wrap highlights">
      <div className="section-heading">
        <p className="eyebrow">SELECTED HIGHLIGHTS</p>
        <h2>IN<br /><span>FOCUS.</span></h2>
      </div>
      <div className="highlight-grid">
        <Link to={`/work/${project.slug}`} className="highlight-card">
          <small>PROJECT / {project.number}</small>
          <h3>{project.name}</h3>
          <p>{project.subtitle}</p>
          <span className="text-link">VIEW CASE STUDY <b>↗</b></span>
        </Link>
        <Link to={`/thinking/${paper.slug}`} className="highlight-card">
          <small>RESEARCH / {paper.year}</small>
          <h3>IMMS {paper.year}</h3>
          <p>{paper.excerpt}</p>
          <span className="text-link">READ <b>↗</b></span>
        </Link>
        <div className="highlight-card">
          <small>LEADERSHIP / {lead.year}</small>
          <h3>{lead.role}</h3>
          <p>{lead.org}</p>
          <p className="highlight-stat">650+ <span>participants per event</span></p>
        </div>
      </div>
    </section>
  );
}

export default HighlightCards;
