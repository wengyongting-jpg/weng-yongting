import { profile, experiences, research, competitions, leadership, skillGroups, selectedProjects } from "../data/index.js";

function Resume() {
  return (
    <section className="section-wrap resume">
      <div className="section-heading">
        <p className="eyebrow">07 / RESUME</p>
        <h2>RESUME.</h2>
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

      <h3 className="resume-subhead">RESEARCH &amp; PUBLICATIONS</h3>
      <div className="timeline">
        {research.map((r, i) => (
          <article className="timeline-item" key={`res-${i}`}>
            <div className="timeline-year">{r.year}</div>
            <div className="timeline-content">
              <p className="date-line">{r.date} · {r.venue}</p>
              <h3>{r.title}</h3>
              <ul className="achievements">{r.achievements.map((a, j) => <li key={j}>{a}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="resume-subhead">COMPETITIONS &amp; BUSINESS PROJECTS</h3>
      <div className="timeline">
        {competitions.map((c, i) => (
          <article className="timeline-item" key={`comp-${i}`}>
            <div className="timeline-year">{c.year}</div>
            <div className="timeline-content">
              <p className="date-line">{c.date}</p>
              <h3>{c.name}</h3>
              <h4>{c.role}</h4>
              <ul className="achievements">{c.achievements.map((a, j) => <li key={j}>{a}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="resume-subhead">SELECTED PROJECTS</h3>
      <div className="timeline">
        {selectedProjects.map((p, i) => (
          <article className="timeline-item" key={`proj-${i}`}>
            <div className="timeline-year">{p.year}</div>
            <div className="timeline-content">
              <p className="date-line">{p.meta}</p>
              <h3>{p.name}</h3>
              <ul className="achievements">{p.achievements.map((a, j) => <li key={j}>{a}</li>)}</ul>
              {p.links && (
                <p className="resume-links">
                  {p.links.map((lnk) => (
                    <a key={lnk.url} href={lnk.url} target="_blank" rel="noopener noreferrer" className="text-link">
                      {lnk.label} <b>↗</b>
                    </a>
                  ))}
                </p>
              )}
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
