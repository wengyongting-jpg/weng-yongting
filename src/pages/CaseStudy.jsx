import { useParams, Link } from "react-router-dom";
import { caseDetailProjects, getCaseDetailProject } from "../data/caseDetail.js";
import SlideDeck from "../components/SlideDeck.jsx";
import NotFound from "./NotFound.jsx";

// V5 项目详情页 — 7 区块结构：
//   面包屑 → Hero 卡片 → 01 CONTEXT → 02 PROBLEM → 03 APPROACH
//   → 04 RESULTS → 05 MATERIALS (Behance 风格瀑布流) → 底部 prev/next 导航
//
// 数据来源：src/data/caseDetail.js
// 旧的 src/pages/CaseStudy.jsx 渲染 8-section 结构，已被此版本替换。
function CaseStudy() {
  const { slug } = useParams();
  const project = getCaseDetailProject(slug);
  if (!project) return <NotFound />;

  const total = caseDetailProjects.length;
  const idx = caseDetailProjects.findIndex((p) => p.slug === slug);
  const prev = caseDetailProjects[(idx - 1 + total) % total];
  const next = caseDetailProjects[(idx + 1) % total];

  const pad = (n) => String(n).padStart(2, "0");
  const totalStr = pad(total);
  const crumbName = project.shortName || project.title;

  return (
    <article className="case-detail section-wrap">
      {/* Breadcrumb */}
      <div className="case-detail-breadcrumb">
        <p className="case-detail-crumb">
          PROJECTS
          <span className="case-detail-crumb-sep">·</span>
          <b>{pad(idx + 1)} / {totalStr}</b>
          <span className="case-detail-crumb-sep">·</span>
          {crumbName}
        </p>
        <Link to="/work" className="case-detail-back">← Back to Projects</Link>
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
      </header>

      {/* 01 CONTEXT */}
      {project.context && (
        <section className="case-detail-section">
          <div className="case-detail-section-label">
            <span className="case-detail-section-no">01</span>
            <span className="case-detail-section-heading">Context</span>
          </div>
          <div className="case-detail-section-body">
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
          </div>
        </section>
      )}

      {/* 02 PROBLEM */}
      {project.problem && (
        <section className="case-detail-section">
          <div className="case-detail-section-label">
            <span className="case-detail-section-no">02</span>
            <span className="case-detail-section-heading">Problem</span>
          </div>
          <div className="case-detail-section-body">
            <h2 className="case-detail-section-title">{project.problem.heading}</h2>
            {project.problem.body && (
              <p className="case-detail-section-text">{project.problem.body}</p>
            )}
            {project.problem.bullets && project.problem.bullets.length > 0 && (
              <ul className="case-detail-bullets">
                {project.problem.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* 03 APPROACH */}
      {project.approach && (
        <section className="case-detail-section">
          <div className="case-detail-section-label">
            <span className="case-detail-section-no">03</span>
            <span className="case-detail-section-heading">Approach</span>
          </div>
          <div className="case-detail-section-body">
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
          </div>
        </section>
      )}

      {/* 04 RESULTS */}
      {project.results && (
        <section className="case-detail-section">
          <div className="case-detail-section-label">
            <span className="case-detail-section-no">04</span>
            <span className="case-detail-section-heading">Results</span>
          </div>
          <div className="case-detail-section-body">
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
          </div>
        </section>
      )}

      {/* 05 MATERIALS — Behance-style slide deck */}
      {project.materials && project.materials.slides && project.materials.slides.length > 0 && (
        <section className="case-detail-section">
          <div className="case-detail-section-label">
            <span className="case-detail-section-no">05</span>
            <span className="case-detail-section-heading">Materials</span>
          </div>
          <div className="case-detail-section-body">
            <h2 className="case-detail-section-title">
              {project.materials.heading || "Case study deck"}
            </h2>
            {project.materials.body && (
              <p className="case-detail-section-text">{project.materials.body}</p>
            )}
            <SlideDeck
              slides={project.materials.slides}
              deckUrl={project.materials.deckUrl}
              appendixUrl={project.materials.appendixUrl}
              appendixSize={project.materials.appendixSize}
            />
          </div>
        </section>
      )}

      {/* Footer prev / next / back */}
      <nav className="case-detail-footer">
        <Link
          to={`/work/${prev.slug}`}
          className="case-detail-nav-link case-detail-nav-link--prev"
        >
          <small>← Previous · {prev.number}</small>
          <strong>{prev.shortName || prev.title}</strong>
        </Link>
        <Link to="/work" className="case-detail-back-to-list">Back to Projects</Link>
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
