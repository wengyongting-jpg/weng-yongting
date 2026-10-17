import { Link } from "react-router-dom";
import { getProjectsBySection } from "../data/index.js";
import { getCaseDetailProject } from "../data/caseDetail.js";

// 校园经历页 — 论文（IMMS 2025 两篇）+ 商业竞赛/案例。
// 论文以引用条目展示，全部链接到 mm118-paper 详情页（含完整研究叙事与论文二演示稿）；
// 竞赛沿用 work-row 行样式，链接到各自详情页。
function Campus() {
  const campus = getProjectsBySection("campus");
  const mm = getCaseDetailProject("mm118-paper");
  const competitions = campus.filter((p) => p.slug !== "mm118-paper");

  return (
    <section className="section-wrap campus-index">
      <div className="section-heading">
        <p className="eyebrow">PAPERS · COMPETITIONS · CASE STUDIES</p>
        <h2>CAMPUS<br /><span>EXPERIENCE.</span></h2>
      </div>

      {/* 论文 — 引用式条目 */}
      {mm && mm.papers && (
        <div className="campus-group">
          <h3 className="campus-group-title">PUBLICATIONS — IMMS 2025</h3>
          <div className="pub-list">
            {mm.papers.map((pp) => (
              <Link to="/work/mm118-paper" className="pub-row" key={pp.pages}>
                <span className="pub-venue">{pp.venue} · {pp.pages}</span>
                <strong className="pub-title">{pp.title}</strong>
                <span className="pub-note">{pp.note}</span>
                <span className="text-link">VIEW RESEARCH DETAILS <b>↗</b></span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 商业竞赛与案例 */}
      <div className="campus-group">
        <h3 className="campus-group-title">COMPETITIONS &amp; BUSINESS CASES</h3>
        <ol className="work-list">
          {competitions.map((p) => (
            <li className="work-row" key={p.slug}>
              <Link to={`/work/${p.slug}`} className="work-row-link">
                <span className="work-no">{p.number}</span>
                <div className="work-row-main">
                  <p className="work-kicker">{p.domain} · {p.year}</p>
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
      </div>
    </section>
  );
}

export default Campus;
