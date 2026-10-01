import { Link } from "react-router-dom";
import ExperimentCard from "../components/ExperimentCard.jsx";
import UpcomingProjectCard from "../components/UpcomingProjectCard.jsx";
import InsightCard from "../components/InsightCard.jsx";
import { experiments, upcomingProjects, posts, research } from "../data/index.js";

// LAB & THINKING — one page, two stacked blocks: AI LAB on top, THINKING below.
function Experiments() {
  return (
    <>
      {/* AI LAB — experiment directions */}
      <section className="section-wrap lab" id="lab">
        <div className="section-heading">
          <p className="eyebrow">03 / AI LAB</p>
          <h2>AI<br /><span>LAB.</span></h2>
        </div>

        <p className="lab-intro">
          A public learning surface — not a showcase of finished results. Each entry is an
          experiment direction I am working through, labelled honestly with status chips —
          Exploring, Prototype, Coming Soon — rather than validated results.
        </p>

        <div className="experiment-grid">
          {experiments.map((e) => (
            <ExperimentCard key={e.id} experiment={e} />
          ))}
        </div>

        {upcomingProjects.length > 0 && (
          <div className="lab-upcoming">
            <div className="section-heading">
              <p className="eyebrow">IN THE WORKSHOP</p>
              <h2>NEXT<br /><span>CASES.</span></h2>
            </div>
            <p className="lab-intro">
              Reserved slots for projects being prepared for the portfolio.
            </p>
            <div className="experiment-grid">
              {upcomingProjects.map((p) => (
                <UpcomingProjectCard key={p.key} project={p} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* THINKING — insights & publications */}
      <section className="section-wrap thinking" id="thinking">
        <div className="section-heading">
          <p className="eyebrow">04 / THINKING</p>
          <h2>THINKING &amp;<br /><span>NOTES.</span></h2>
        </div>

        <p className="thinking-intro">
          Short professional positions on AI, automation, product, and data. Not a blog —
          a working journal of the principles I apply when designing AI products.
        </p>

        <div className="insight-grid">
          {posts.map((p) => (
            <InsightCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="thinking-publications">
          <p className="eyebrow">PUBLICATIONS</p>
          <ul>
            {research.map((r) => (
              <li key={r.slug}>
                <Link to={`/experiments/${r.slug}`} className="text-link">
                  {r.title} <b>↗</b>
                </Link>
                <span className="thinking-pub-meta">{r.date} · {r.venue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experiments;
