import PositioningMatrix from "../components/PositioningMatrix.jsx";
import JourneyTimeline from "../components/JourneyTimeline.jsx";
import { profile } from "../data/index.js";

function About() {
  return (
    <>
      <section id="about" className="about section-wrap">
        <p className="eyebrow">01 / PROFILE</p>
        <div className="about-layout">
          <h2>COMBINING<br />BUSINESS THINKING<br /><span>WITH AI.</span></h2>
          <div className="about-body">
            <p>{profile.summary}</p>
            <div className="metadata">
              <div><small>BASED IN</small><strong>{profile.location}</strong></div>
              <div><small>EDUCATION</small><strong>{profile.education.short} {profile.education.level}, {profile.education.program} · {profile.education.period}</strong></div>
              <div><small>FOCUS</small><strong>{profile.focus}</strong></div>
              <div><small>INTERESTS</small><strong>{profile.interests.join(" · ")}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <PositioningMatrix />

      <section className="section-wrap journey-section">
        <div className="section-heading">
          <p className="eyebrow">THE ARC</p>
          <h2>HOW I<br /><span>GOT HERE.</span></h2>
        </div>
        <JourneyTimeline />
      </section>
    </>
  );
}

export default About;
