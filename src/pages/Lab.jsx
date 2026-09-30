import ExperimentCard from "../components/ExperimentCard.jsx";
import UpcomingProjectCard from "../components/UpcomingProjectCard.jsx";
import { experiments, upcomingProjects } from "../data/index.js";

// AI LAB — a public learning surface for Enterprise AI experimentation.
//
// These are exploration directions, not completed experiments. The page
// intentionally shows status chips (Exploring / Prototype / Coming Soon)
// rather than results, because no results have been validated.
//
// Extensible: add an object to src/data/experiments.js and it renders here.
function Lab() {
  return (
    <section className="section-wrap lab">
      <div className="section-heading">
        <p className="eyebrow">03 / AI LAB</p>
        <h2>AI<br /><span>LAB.</span></h2>
      </div>

      <p className="lab-intro">
        A public learning surface — not a showcase of finished results. Each entry is an
        experiment direction I am working through, labelled honestly. The goal is to show
        how I think about Enterprise AI, not to pretend I have answers I do not.
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
            Reserved slots for projects being prepared for the portfolio. Until verified details
            are in, a slot stays empty on purpose — an unfinished case is shown as reserved,
            never dressed up as a finished one.
          </p>
          <div className="experiment-grid">
            {upcomingProjects.map((p) => (
              <UpcomingProjectCard key={p.key} project={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Lab;
