import { Fragment } from "react";
import { profile } from "../data/index.js";

// Reusable brand band: the 5 positioning pillars separated by ×.
// Used on Home (after hero) and About.
function PositioningMatrix() {
  return (
    <section className="positioning-matrix">
      <p className="eyebrow">CORE POSITIONING</p>
      <div className="pillars">
        {profile.pillars.map((p, i) => (
          <Fragment key={p}>
            <span className="pillar">{p}</span>
            {i < profile.pillars.length - 1 && <span className="pillar-cross">×</span>}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default PositioningMatrix;
