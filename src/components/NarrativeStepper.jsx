import { profile } from "../data/index.js";

// The 5-stage narrative arc: Business foundation → Data → DT → AI → Product.
function NarrativeStepper() {
  return (
    <section className="section-wrap narrative">
      <div className="section-heading">
        <p className="eyebrow">THE ARC</p>
        <h2>HOW I<br /><span>GET THERE.</span></h2>
      </div>
      <ol className="stepper">
        {profile.narrative.map((step, i) => (
          <li className="stepper-step" key={step}>
            <span className="stepper-no">{String(i + 1).padStart(2, "0")}</span>
            <span className="stepper-label">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default NarrativeStepper;
