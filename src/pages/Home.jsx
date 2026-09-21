import { Link } from "react-router-dom";
import RadialLiquid from "../components/RadialLiquid.jsx";
import ChromeObject from "../components/ChromeObject.jsx";
import PositioningMatrix from "../components/PositioningMatrix.jsx";
import PortfolioOS from "../components/PortfolioOS.jsx";
import NarrativeStepper from "../components/NarrativeStepper.jsx";
import HighlightCards from "../components/HighlightCards.jsx";
import { profile } from "../data/index.js";

function Home() {
  return (
    <>
      <section id="top" className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">{profile.pillars.join(" × ")}</p>
          <h1>BUILDING<br />PRACTICAL<br /><span>AI-POWERED</span><br />SOLUTIONS.</h1>
          <p className="hero-lede">From business problems to practical AI, data and automation systems.</p>
          <p className="intro">
            Enterprise AI master's student at {profile.education.short} with a {profile.education.background} background, focusing on AI product design, data analytics, automation, and digital transformation.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="button button-primary">VIEW WORK <b>↘</b></Link>
            <Link to="/about" className="button button-quiet">ABOUT ME <b>↗</b></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Interactive liquid chrome artwork">
          <RadialLiquid />
          <ChromeObject />
          <p className="art-caption">SIGNAL / 001<br />LIQUID SYSTEM</p>
        </div>
        <p className="scroll-note">SCROLL TO EXPLORE <span>↓</span></p>
      </section>

      <PositioningMatrix />
      <PortfolioOS />
      <NarrativeStepper />
      <HighlightCards />

      <section id="contact" className="contact section-wrap">
        <p className="eyebrow">07 / CONTACT</p>
        <h2>LET'S BUILD<br />SOMETHING<br /><span>INTELLIGENT.</span></h2>
        <div className="contact-row">
          <p>Open to opportunities involving AI products, automation, data analytics and digital transformation.</p>
          <div className="hero-actions">
            <Link to="/about" className="button button-primary">GET IN TOUCH <b>↗</b></Link>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="button button-quiet">LINKEDIN <b>↗</b></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
