import { profile, experiences, leadership, skillGroups } from "../data/index.js";

function Resume() {
  return (
    <section className="section-wrap resume">
      <div className="section-heading">
        <p className="eyebrow">07 / WORK EXPERIENCE</p>
        <h2>WORK<br /><span>EXPERIENCE.</span></h2>
      </div>
      <p className="resume-print-row"><button className="button button-primary" type="button" onClick={() => window.print()}>PRINT / SAVE PDF <b>↗</b></button></p>

      <h3 className="resume-subhead">EXPERIENCE</h3>
      <div className="timeline">
        {experiences.map((e, i) => (
          <article className="timeline-item" key={`exp-${i}`}>
            <div className="timeline-year">{e.year}</div>
            <div className="timeline-content">
              <p className="date-line">{e.date}</p>
              <h3>{e.company}</h3>
              <h4>{e.role}</h4>
              <ul className="achievements">{e.achievements.map((a, j) => <li key={j}>{a}</li>)}</ul>
              {e.tags && <ul>{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
            </div>
          </article>
        ))}
      </div>

      <h3 className="resume-subhead">LEADERSHIP</h3>
      <div className="timeline">
        {leadership.map((l, i) => (
          <article className="timeline-item" key={`lead-${i}`}>
            <div className="timeline-year">{l.year}</div>
            <div className="timeline-content">
              <p className="date-line">{l.period}</p>
              <h3>{l.org}</h3>
              <h4>{l.role}</h4>
              <ul className="achievements">{l.achievements.map((a, j) => <li key={j}>{a}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="resume-subhead">EDUCATION</h3>
      <div className="metadata">
        <div>
          <small>{profile.education.short} · {profile.education.period}</small>
          <strong>{profile.education.level}, {profile.education.program}</strong>
        </div>
        <div>
          <small>STUDY DIRECTIONS</small>
          <strong>{profile.education.directions.join(" · ")}</strong>
        </div>
        <div>
          <small>{profile.education.undergrad.program.toUpperCase()}</small>
          <strong>
            {profile.education.undergrad.courses.map((c) => `${c.name} — ${c.grade}`).join(" · ")}
          </strong>
        </div>
      </div>

      <h3 className="resume-subhead">SKILLS</h3>
      <div className="metadata">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <small>{g.label.toUpperCase()}</small>
            <strong>{g.items.join(" · ")}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
