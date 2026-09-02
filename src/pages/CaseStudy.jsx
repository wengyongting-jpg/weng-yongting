import { useParams, Link } from "react-router-dom";
import { getProject, projects } from "../data/index.js";
import FlowDiagram from "../components/FlowDiagram.jsx";
import NotFound from "./NotFound.jsx";

// Reusable case-study page. Renders any project's 8-section structure.
// Layout is editorial + asymmetric: section number/heading on the left,
// body content on the right. Optional FlowDiagram renders inside section 06.
function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  // Next project for an editorial "next case" link at the bottom.
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="section-wrap case-study">
      <p className="eyebrow">02 / SELECTED WORK · {project.number}</p>

      <header className="case-header">
        <h2 className="case-title">{project.name}</h2>
        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-meta">{project.year} · {project.domain}</p>
        <p className="case-overview">{project.summary}</p>
      </header>

      <div className="case-sections">
        {project.caseStudy.map((block) => (
          <section className="case-section" key={block.no}>
            <div className="case-section-label">
              <span className="case-section-no">{block.no}</span>
              <span className="case-section-heading">{block.heading}</span>
            </div>
            <div className="case-section-body">
              {block.body && <p className="case-section-text">{block.body}</p>}
              {block.points && (
                <ul className="case-section-points">
                  {block.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}
              {block.note && <p className="case-section-note">{block.note}</p>}
              {block.flow && <FlowDiagram flow={block.flow} />}
            </div>
          </section>
        ))}
      </div>

      <div className="tech-list">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <p className="case-actions">
        {project.url && (
          <a className="button button-primary" href={project.url} target="_blank" rel="noopener noreferrer">
            LIVE DEMO <b>↗</b>
          </a>
        )}
        <Link className="text-link" to="/work">← BACK TO WORK</Link>
      </p>

      {next && next.slug !== project.slug && (
        <Link className="case-next" to={`/work/${next.slug}`}>
          <span className="case-next-label">NEXT CASE · {next.number}</span>
          <span className="case-next-title">{next.name} <b>↘</b></span>
        </Link>
      )}
    </article>
  );
}

export default CaseStudy;
