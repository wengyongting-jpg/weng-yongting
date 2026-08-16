import { useEffect, useState } from "react";
import "./App.css";
import RadialLiquid from "./components/RadialLiquid";
import ChromeObject from "./components/ChromeObject";

const folders = [
  {
    id: "ai",
    tab: "01 / AI & TRANSFORMATION",
    number: "01",
    name: "月叙",
    subtitle: "AI HEALTH ASSISTANT",
    description: "An AI-powered personalized women's health assistant combining LLM capabilities with deterministic business logic.",
    tech: ["LLM", "AI Agent", "Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "REST API"],
  },
  {
    id: "data",
    tab: "02 / DATA ANALYTICS",
    number: "02",
    name: "AI / Data / Automation",
    subtitle: "BUSINESS INTELLIGENCE EXPLORATIONS",
    description: "Practical learning and project work spanning Python, data processing, applied AI and business-oriented analytics.",
    tech: ["Python", "Data Analytics", "Machine Learning", "SQL", "Foundation Model APIs"],
  },
  {
    id: "automation",
    tab: "03 / AUTOMATED SYSTEMS",
    number: "03",
    name: "Timesheet Automation",
    subtitle: "END-TO-END WORKFLOW AUTOMATION",
    description: "A solution that collects timesheet data, interacts with a portal, validates working hours, records submissions and sends confirmation.",
    tech: ["UiPath", "Google Sheets", "Data Automation", "UI Automation", "Email Automation"],
  },
];

const skills = ["ARTIFICIAL INTELLIGENCE", "AI AGENTS", "LLM", "DATA ANALYTICS", "PYTHON", "AUTOMATION", "UIPATH", "EXCEL / VBA", "SQL", "NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "DIGITAL TRANSFORMATION"];

function App() {
  const [activeFolder, setActiveFolder] = useState("ai");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const project = folders.find((folder) => folder.id === activeFolder);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu}>WENG YONGTING</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#projects" onClick={closeMenu}>PROJECTS</a>
          <a href="#experience" onClick={closeMenu}>EXPERIENCE</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
        </nav>
        <p className="availability"><i /> AVAILABLE FOR AI / AUTOMATION OPPORTUNITIES</p>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">AI · DATA · AUTOMATION</p>
          <h1>BUILDING<br />PRACTICAL<br /><span>AI-POWERED</span><br />SOLUTIONS.</h1>
          <p className="intro">NTU Master's student focusing on AI, data analytics, automation and digital transformation.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">VIEW PROJECTS <b>↘</b></a>
            <a href="#contact" className="button button-quiet">CONTACT ME <b>↗</b></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Interactive liquid chrome artwork">
          <RadialLiquid />
          <ChromeObject />
          <p className="art-caption">SIGNAL / 001<br />LIQUID SYSTEM</p>
        </div>
        <p className="scroll-note">SCROLL TO EXPLORE <span>↓</span></p>
      </section>

      <section id="about" className="about section-wrap">
        <p className="eyebrow">01 / PROFILE</p>
        <div className="about-layout">
          <h2>COMBINING<br />BUSINESS THINKING<br /><span>WITH AI.</span></h2>
          <div className="about-body">
            <p>I am a Master's student at Nanyang Technological University with interests in Artificial Intelligence, Data Analytics, Automation and Digital Transformation.</p>
            <div className="metadata">
              <div><small>BASED IN</small><strong>Singapore</strong></div>
              <div><small>FOCUS</small><strong>AI · Data · Automation</strong></div>
              <div><small>EDUCATION</small><strong>NTU Master's</strong></div>
              <div><small>INTERESTS</small><strong>AI Products · Intelligent Automation · Digital Transformation</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects section-wrap">
        <div className="section-heading"><p className="eyebrow">02 / SELECTED WORK</p><h2>PROJECT<br /><span>INDEX.</span></h2></div>
        <div className="folder-system">
          <div className="folder-tabs" role="tablist" aria-label="Project categories">
            {folders.map((folder) => <button key={folder.id} className={activeFolder === folder.id ? "folder-tab active" : "folder-tab"} onClick={() => setActiveFolder(folder.id)} role="tab" aria-selected={activeFolder === folder.id}>{folder.tab}</button>)}
          </div>
          <article className="folder-panel" key={project.id}>
            <div className="project-no">{project.number}</div>
            <div className="project-details">
              <p className="project-kicker">SELECTED PROJECT / {project.number}</p>
              <h3>{project.name}</h3>
              <h4>{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>
              <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
              <button className="text-link" type="button">VIEW PROJECT <b>↗</b></button>
            </div>
            <div className="panel-orbit"><span>AI</span><i /></div>
          </article>
        </div>
      </section>

      <section id="experience" className="experience section-wrap">
        <div className="section-heading"><p className="eyebrow">03 / FIELD NOTES</p><h2>EXPERIENCE.</h2></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-year">2025</div><div className="timeline-content"><p className="date-line">JUL 2025 · XIAMEN</p><h3>HUAFU SECURITIES</h3><h4>Assistant to Investment Advisory Director</h4><ul><li>Industry research</li><li>Excel / VBA</li><li>Data cleaning</li><li>Back-testing</li><li>Investment analysis</li></ul></div></article>
          <article className="timeline-item"><div className="timeline-year">2025</div><div className="timeline-content"><p className="date-line">JAN — FEB 2025 · FUQING</p><h3>FUYAO GROUP</h3><h4>General Ledger Accounting Assistant</h4><ul><li>Reviewed 800+ accounting vouchers</li><li>AR/AP reconciliation</li><li>Process improvement</li><li>Suggested barcode scanning automation</li></ul></div></article>
        </div>
      </section>

      <section className="skills" aria-label="Skills"><div className="marquee">{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill} <b>✦</b></span>)}</div></section>

      <section id="contact" className="contact section-wrap">
        <p className="eyebrow">04 / CONTACT</p>
        <h2>LET'S BUILD<br />SOMETHING<br /><span>INTELLIGENT.</span></h2>
        <div className="contact-row"><p>Open to opportunities involving AI products, automation, data analytics and digital transformation.</p><a href="#top" className="button button-primary">GET IN TOUCH <b>↗</b></a></div>
      </section>
      <footer><span>© {new Date().getFullYear()} WENG YONGTING</span><span>AI · DATA · AUTOMATION</span></footer>
    </main>
  );
}

export default App;
