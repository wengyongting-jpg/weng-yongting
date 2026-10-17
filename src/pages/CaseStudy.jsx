import { useParams, Link } from "react-router-dom";
import { caseDetailProjects, getCaseDetailProject, isCampusSlug } from "../data/caseDetail.js";
import SlideDeck from "../components/SlideDeck.jsx";
import WorkflowExplorer from "../components/WorkflowExplorer.jsx";
import EvalDashboard from "../components/EvalDashboard.jsx";
import DecisionLog from "../components/DecisionLog.jsx";
import Roadmap from "../components/Roadmap.jsx";
import PrototypePlayground from "../components/PrototypePlayground.jsx";
import NotFound from "./NotFound.jsx";

// 项目详情页 — 分区动态组装：
//   面包屑 → Hero → Context → Problem → Decisions(可选) → Experience(workflow/prototype 可选,
//   否则 Approach) → Evaluation(可选, 否则 Results) → Iteration(可选) → Materials → prev/next
//
// 分区感知：校园经历条目（论文/竞赛）面包屑显示 CAMPUS EXPERIENCE、
// 返回 /campus，prev/next 在分区内循环；个人项目同理走 /work。
function CaseStudy() {
  const { slug } = useParams();
  const project = getCaseDetailProject(slug);
  if (!project) return <NotFound />;

  const isCampus = isCampusSlug(slug);
  const sectionLabel = isCampus ? "CAMPUS EXPERIENCE" : "PROJECTS";
  const backTo = isCampus ? "/campus" : "/work";
  const backLabel = isCampus ? "← Back to Campus Experience" : "← Back to Projects";

  const sectionItems = caseDetailProjects.filter(
    (p) => isCampusSlug(p.slug) === isCampus
  );
  const total = sectionItems.length;
  const idx = sectionItems.findIndex((p) => p.slug === slug);
  const prev = sectionItems[(idx - 1 + total) % total];
  const next = sectionItems[(idx + 1) % total];

  const pad = (n) => String(n).padStart(2, "0");
  const totalStr = pad(total);
  const crumbName = project.shortName || project.title;

  // 动态分区列表 — 按数据有无组装
  const sections = [];
  if (project.context) sections.push({ key: "context", label: "Context" });
  if (project.problem) sections.push({ key: "problem", label: "Problem" });
  if (project.competition) sections.push({ key: "landscape", label: "Landscape" });
  if (project.decisions) sections.push({ key: "decisions", label: "Decisions" });
  if (project.workflow || project.prototype)
    sections.push({ key: "experience", label: "Experience" });
  else if (project.approach) sections.push({ key: "approach", label: "Approach" });
  if (project.evaluation) sections.push({ key: "evaluation", label: "Evaluation" });
  else if (project.results) sections.push({ key: "results", label: "Results" });
  if (project.iteration) sections.push({ key: "iteration", label: "Iteration" });
  if (project.materials && project.materials.slides && project.materials.slides.length > 0)
    sections.push({ key: "materials", label: "Materials" });

  return (
    <article className="case-detail section-wrap">
      {/* Breadcrumb */}
      <div className="case-detail-breadcrumb">
        <p className="case-detail-crumb">
          {sectionLabel}
          <span className="case-detail-crumb-sep">·</span>
          <b>{pad(idx + 1)} / {totalStr}</b>
          <span className="case-detail-crumb-sep">·</span>
          {crumbName}
        </p>
        <Link to={backTo} className="case-detail-back">{backLabel}</Link>
      </div>

      {/* Hero card */}
      <header className="case-detail-hero">
        <p className="case-detail-eyebrow">
          {project.eyebrow.join(" • ")}
        </p>
        <h1 className="case-detail-title">
          {project.title}
          {project.titleEn && (
            <span className="case-detail-title-en">{project.titleEn}</span>
          )}
        </h1>
        <p className="case-detail-subtitle">{project.subtitle}</p>
        <div className="case-detail-badges">
          {project.badges.map((b, i) => (
            <span
              key={i}
              className={`case-detail-badge case-detail-badge--${b.type}`}
            >
              {b.text}
            </span>
          ))}
        </div>

        {/* 论文引用块 — 仅 IMMS 2025 Publications 条目使用 */}
        {project.papers && project.papers.length > 0 && (
          <div className="case-papers">
            {project.papers.map((pp) => (
              <div className="case-paper" key={pp.pages}>
                <small>{pp.note}</small>
                <strong>{pp.title}</strong>
                <span>{pp.venue} · {pp.pages}</span>
              </div>
            ))}
          </div>
        )}

        {project.event && <p className="case-event">{project.event}</p>}

        {project.links && project.links.length > 0 && (
          <div className="case-detail-links">
            {project.links.map((lnk, i) => (
              <a
                key={lnk.url}
                className={`case-detail-btn ${i === 0 ? "case-detail-btn--primary" : ""}`}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lnk.label} <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        )}

        {project.video && project.video.type === "youtube" && (
          <figure className="case-video">
            <div className="case-video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.video.id}`}
                title={project.video.title || `${project.title} — demo video`}
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

      {/* 动态分区 */}
      {sections.map((sec, si) => (
        <section className="case-detail-section" key={sec.key}>
          <div className="case-detail-section-label">
            <span className="case-detail-section-no">{pad(si + 1)}</span>
            <span className="case-detail-section-heading">{sec.label}</span>
          </div>
          <div className="case-detail-section-body">
            {sec.key === "context" && (
              <>
                <h2 className="case-detail-section-title">{project.context.heading}</h2>
                {project.context.body && (
                  <p className="case-detail-section-text">{project.context.body}</p>
                )}
                <div className="case-detail-info-grid">
                  <div className="case-detail-info-card">
                    <small>Role</small>
                    <strong>{project.context.role}</strong>
                  </div>
                  <div className="case-detail-info-card">
                    <small>Stack</small>
                    <strong>{project.context.stack}</strong>
                  </div>
                </div>
              </>
            )}

            {sec.key === "problem" && (
              <>
                <h2 className="case-detail-section-title">{project.problem.heading}</h2>
                {project.problem.body && (
                  <p className="case-detail-section-text">{project.problem.body}</p>
                )}
                {project.problem.bullets && project.problem.bullets.length > 0 && (
                  <ul className="case-detail-bullets">
                    {project.problem.bullets.map((b, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                )}
              </>
            )}

            {sec.key === "landscape" && (
              <>
                <h2 className="case-detail-section-title">{project.competition.heading}</h2>
                {project.competition.body && (
                  <p className="case-detail-section-text">{project.competition.body}</p>
                )}
                <div className="comp-grid">
                  {project.competition.rows.map((c, i) => (
                    <div key={i} className="comp-card">
                      <span className="comp-card-name">{c.name}</span>
                      <p className="comp-card-approach">{c.approach}</p>
                      <p className="comp-card-diff"><b>Different —</b> {c.difference}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {sec.key === "decisions" && (
              <>
                <h2 className="case-detail-section-title">
                  {project.decisionsHeading || "Why it is designed this way"}
                </h2>
                <DecisionLog decisions={project.decisions} />
              </>
            )}

            {sec.key === "experience" && (
              <>
                <h2 className="case-detail-section-title">
                  {(project.workflow && project.workflow.heading) ||
                    "How the product actually works"}
                </h2>
                {project.approach && project.approach.body && (
                  <p className="case-detail-section-text">{project.approach.body}</p>
                )}
                {project.prototype && (
                  <PrototypePlayground prototype={project.prototype} />
                )}
                {project.workflow && <WorkflowExplorer workflow={project.workflow} />}
                {project.approach && project.approach.tags && project.approach.tags.length > 0 && (
                  <div className="case-detail-tags">
                    {project.approach.tags.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                )}
              </>
            )}

            {sec.key === "approach" && (
              <>
                <h2 className="case-detail-section-title">{project.approach.heading}</h2>
                {project.approach.body && (
                  <p className="case-detail-section-text">{project.approach.body}</p>
                )}
                {project.approach.steps && project.approach.steps.length > 0 && (
                  <div className="case-detail-flow">
                    {project.approach.steps.map((s, i) => (
                      <div key={i} className="case-detail-flow-step">
                        <span className="case-detail-flow-step-no">STEP {pad(i + 1)}</span>
                        <span className="case-detail-flow-step-label">{s}</span>
                      </div>
                    ))}
                  </div>
                )}
                {project.approach.tags && project.approach.tags.length > 0 && (
                  <div className="case-detail-tags">
                    {project.approach.tags.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                )}
              </>
            )}

            {sec.key === "evaluation" && (
              <>
                <h2 className="case-detail-section-title">{project.evaluation.heading}</h2>
                {project.evaluation.body && (
                  <p className="case-detail-section-text">{project.evaluation.body}</p>
                )}
                <EvalDashboard evaluation={project.evaluation} />
              </>
            )}

            {sec.key === "results" && (
              <>
                <h2 className="case-detail-section-title">{project.results.heading}</h2>
                {project.results.body && (
                  <p className="case-detail-section-text">{project.results.body}</p>
                )}
                {project.results.metrics && project.results.metrics.length > 0 && (
                  <div className="case-detail-metrics">
                    {project.results.metrics.map((m, i) => (
                      <div key={i} className="case-detail-metric">
                        <span className="case-detail-metric-value">{m.value}</span>
                        <span className="case-detail-metric-label">{m.label}</span>
                        {m.note && <span className="case-detail-metric-note">{m.note}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {sec.key === "iteration" && (
              <>
                <h2 className="case-detail-section-title">
                  {project.iteration.heading || "What I would change next"}
                </h2>
                {project.iteration.body && (
                  <p className="case-detail-section-text">{project.iteration.body}</p>
                )}
                <Roadmap iteration={project.iteration} />
                {project.iteration.postmortem && (
                  <div className="postmortem">
                    <p className="postmortem-label">{project.iteration.postmortem.heading}</p>
                    <p>{project.iteration.postmortem.body}</p>
                  </div>
                )}
              </>
            )}

            {sec.key === "materials" && (
              <>
                <h2 className="case-detail-section-title">
                  {project.materials.heading || "Case study deck"}
                </h2>
                {project.materials.body && (
                  <p className="case-detail-section-text">{project.materials.body}</p>
                )}
                <SlideDeck slides={project.materials.slides} />
              </>
            )}
          </div>
        </section>
      ))}

      {/* Footer prev / next / back */}
      <nav className="case-detail-footer">
        <Link
          to={`/work/${prev.slug}`}
          className="case-detail-nav-link case-detail-nav-link--prev"
        >
          <small>← Previous · {prev.number}</small>
          <strong>{prev.shortName || prev.title}</strong>
        </Link>
        <Link to={backTo} className="case-detail-back-to-list">
          {isCampus ? "Back to Campus Experience" : "Back to Projects"}
        </Link>
        <Link
          to={`/work/${next.slug}`}
          className="case-detail-nav-link case-detail-nav-link--next"
        >
          <small>Next · {next.number} →</small>
          <strong>{next.shortName || next.title}</strong>
        </Link>
      </nav>
    </article>
  );
}

export default CaseStudy;
