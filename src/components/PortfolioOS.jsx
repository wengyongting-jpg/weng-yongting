import { Link } from "react-router-dom";
import { portfolioOS } from "../data/index.js";

// "Explore the Portfolio OS" — an orientation layer on the homepage.
//
// Five directional entry points that each map to a REAL route (Lab, two
// case studies, Resume, Thinking). This is wayfinding, not decoration: it
// answers "where can I verify X?" within the first screen of the site.
// Internal links only — nothing here fabricates a destination.
function PortfolioOS() {
  return (
    <section className="section-wrap portfolio-os" aria-labelledby="os-heading">
      <div className="section-heading">
        <p className="eyebrow">EXPLORE THE PORTFOLIO OS</p>
        <h2 id="os-heading">FIVE<br /><span>ROOMS.</span></h2>
      </div>

      <p className="os-intro">
        One practitioner, five lenses. Each room routes to real, verifiable work — pick the
        one that matches what you came to check.
      </p>

      <ul className="os-grid">
        {portfolioOS.map((room) => (
          <li className="os-cell" key={room.key}>
            <Link to={room.to} className="os-link">
              <span className="os-no">{room.id}</span>
              <h3 className="os-title">{room.title}</h3>
              <p className="os-blurb">{room.blurb}</p>
              <span className="text-link os-cta">{room.cta} <b>↗</b></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PortfolioOS;
