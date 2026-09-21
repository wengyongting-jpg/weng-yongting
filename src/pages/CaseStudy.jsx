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
        <p className="case-meta">
          {project.year} · {project.domain}
          {project.status && <span className="case-status">STATUS / {project.status.toUpperCase()}</span>}
          {project.teamProject && <span className="case-status is-team">TEAM PROJECT</span>}
        </p>
        {project.event && <p className="case-event">{project.event}</p>}
        <p className="case-overview">{project.summary}</p>
        {project.video && project.video.type === "youtube" && (
          <figure className="case-video">
            <div className="case-video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.video.id}`}
                title={project.video.title || `${project.name} — demo video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {project.video.caption && (
              <figcaption className="case-video-caption">{project.video.caption}</figcaption>
            )}
          </figure>
        )}
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
              {block.safety && (
                <div className="safety-grid">
                  {[block.safety.can, block.safety.cannot, block.safety.escalation]
                    .filter(Boolean)
                    .map((col, i) => (
                      <div
                        className={`safety-col ${
                          ["is-can", "is-cannot", "is-escalation"][i]
                        }`}
                        key={col.label}
                      >
                        <p className="safety-col-label">{col.label}</p>
                        <ul>
                          {col.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              )}
              {block.chips && (
                <div className="chip-groups">
                  {block.chips.map((group) => (
                    <div className="chip-group" key={group.label}>
                      <p className="chip-group-label">{group.label}</p>
                      <ul className="chip-list">
                        {group.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {block.blocks && (
                <div className="case-blocks">
                  {block.blocks.map((b) => (
                    <div className="case-block-panel" key={b.title}>
                      <p className="case-block-title">{b.title}</p>
                      <p className="case-block-body">{b.body}</p>
                    </div>
                  ))}
                </div>
              )}
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
        {/* Multiple confirmed public links (e.g. GitHub + demo video). First is primary. */}
        {project.links && project.links.map((lnk, i) => (
          <a
            key={lnk.url}
            className={`button ${i === 0 ? "button-primary" : "button-quiet"}`}
            href={lnk.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lnk.label} <b>↗</b>
          </a>
        ))}
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
