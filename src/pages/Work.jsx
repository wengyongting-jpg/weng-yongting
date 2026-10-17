import { Link } from "react-router-dom";
import { getProjectsBySection } from "../data/index.js";

// 个人项目索引 — 只展示 section === "projects" 的条目（AI 产品 / 自动化 / Agent）。
// 论文与商业竞赛已移至 /campus（Campus Experience 页面）。
function Work() {
  const personal = getProjectsBySection("projects");

  return (
    <section className="section-wrap work-index">
      <div className="section-heading">
        <p className="eyebrow">PERSONAL PROJECTS — AI · PRODUCT · AUTOMATION</p>
        <h2>PROJECTS.</h2>
      </div>

      <ol className="work-list">
        {personal.map((p) => (
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
  );
}

export default Work;
