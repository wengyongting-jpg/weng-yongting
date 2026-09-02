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
        <p>
          <Link className="button button-primary" to="/resume">SEE RESUME <b>↗</b></Link>
        </p>
      </div>
    </section>
  );
}

export default Now;
