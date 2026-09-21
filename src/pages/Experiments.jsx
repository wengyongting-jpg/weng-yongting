import { Link } from "react-router-dom";
import ExperimentCard from "../components/ExperimentCard.jsx";
import UpcomingProjectCard from "../components/UpcomingProjectCard.jsx";
import InsightCard from "../components/InsightCard.jsx";
import { experiments, upcomingProjects, posts, research } from "../data/index.js";

// EXPERIMENTS — merged from Lab + Thinking + Now.
//
// One page that covers: what I'm building now, what I'm exploring in AI,
// what principles guide my work, and what I've published.
function Experiments() {
  return (
    <section className="section-wrap experiments">
      <div className="section-heading">
        <p className="eyebrow">03 / EXPERIMENTS</p>
        <h2>EXPER<br /><span>IMENTS.</span></h2>
      </div>

      <p className="lab-intro">
        What I'm building, what I'm exploring, and the principles I apply.
        Not a showcase of finished results — a working surface showing how I think about Enterprise AI.
      </p>

      {/* NOW BUILDING — from the old Now page */}
      <div className="now-building">
        <Link className="now-building-item" to="/work/salespilot">
          <span className="now-building-label">NOW BUILDING</span>
          <h3>SalesPilot — Agentic WhatsApp Sales Opportunity Assistant</h3>
          <p>
            Preparing a complete agent demo journey from customer conversation to opportunity
            scoring, next-best action, human handoff and dashboard visibility.
          </p>
          <span className="text-link">VIEW CASE STUDY <b>↗</b></span>
        </Link>
        <Link className="now-building-item" to="/work/grounded-enterprise-policy-assistant">
          <span className="now-building-label">PROTOTYPE</span>
          <h3>Grounded Enterprise Policy &amp; Procedure Assistant</h3>
          <p>
            Exploring how RAG, citations, evidence thresholds and refusal behaviour can make
            internal knowledge assistants more trustworthy.
          </p>
          <span className="text-link">VIEW CASE STUDY <b>↗</b></span>
        </Link>
      </div>

      {/* AI LAB — experiment directions */}
      <div className="lab-upcoming">
        <p className="eyebrow" style={{ marginTop: "clamp(60px,8vw,100px)" }}>AI LAB</p>
        <p className="lab-intro">
          Each entry is an experiment direction I am working through, labelled honestly with
          status chips — Exploring, Prototype, Coming Soon — rather than validated results.
        </p>
        <div className="experiment-grid">
          {experiments.map((e) => (
            <ExperimentCard key={e.id} experiment={e} />
          ))}
        </div>
      </div>

      {/* Upcoming project slots */}
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

      {/* INSIGHTS — from the old Thinking page */}
      <div className="thinking-publications" style={{ marginTop: "clamp(70px,9vw,120px)" }}>
        <p className="eyebrow">INSIGHTS &amp; NOTES</p>
        <p className="thinking-intro">
          Short professional positions on AI, automation, product, and data — a working journal
          of the principles I apply when designing AI products.
        </p>
        <div className="insight-grid">
          {posts.map((p) => (
            <InsightCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="thinking-publications" style={{ marginTop: "64px" }}>
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
      </div>
    </section>
  );
}

export default Experiments;
