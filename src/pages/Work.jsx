import { Link } from "react-router-dom";
import { projects, competitions } from "../data/index.js";

// Editorial project index. Large numerals, asymmetric rows, minimal cards.
// Repeats over the projects data array — add a project in data and it appears here.
// Competitions live at the bottom as a separate record block.
function Work() {
  return (
    <>
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
                    {p.video && <span className="work-status is-demo">▶ VIDEO DEMO</span>}
                    {!p.video && p.links && p.links.length > 0 && <span className="work-status is-demo">◆ DEMO</span>}
                  </p>
                  <h3>{p.name}</h3>
                  <p className="work-subtitle">{p.subtitle}</p>
                  <ul className="tech-list work-tech-compact">
                    {p.tech.slice(0, 4).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="text-link">VIEW CASE STUDY <b>↗</b></span>
                </div>
                <span className="work-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-wrap work-competitions">
        <div className="section-heading">
          <p className="eyebrow">COMPETITIONS &amp; AWARDS</p>
          <h2>COMPETITION<br /><span>RECORD.</span></h2>
        </div>

        <div className="timeline">
          {competitions.map((c, i) => (
            <article className="timeline-item" key={`comp-${i}`}>
              <div className="timeline-year">{c.year}</div>
              <div className="timeline-content">
                <p className="date-line">{c.date}</p>
                <h3>{c.name}</h3>
                <h4>{c.role}</h4>
                <ul className="achievements">{c.achievements.map((a, j) => <li key={j}>{a}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
