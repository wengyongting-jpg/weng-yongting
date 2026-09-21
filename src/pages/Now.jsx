import { Link } from "react-router-dom";
import { profile } from "../data/index.js";

function Now() {
  return (
    <section className="section-wrap now">
      <p className="eyebrow">NOW</p>
      <h2>CURRENTLY.</h2>
      <div className="about-body">
        <p>
          Master's student in {profile.education.program} at {profile.education.institution} ({profile.education.short}), with a {profile.education.background} background.
        </p>
        <div className="metadata">
          <div><small>STATUS</small><strong>{profile.availability}</strong></div>
          <div><small>FOCUS</small><strong>{profile.focus}</strong></div>
          <div><small>BASED IN</small><strong>{profile.location}</strong></div>
        </div>

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

        <p>
          <Link className="button button-primary" to="/resume">SEE RESUME <b>↗</b></Link>
        </p>
      </div>
    </section>
  );
}

export default Now;
