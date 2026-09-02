import ExperimentCard from "../components/ExperimentCard.jsx";
import { experiments } from "../data/index.js";

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
    </section>
  );
}

export default Lab;
