import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">Weng Yongting</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">AI · Data · Automation</p>

          <h1>
            Building practical
            <span> AI-powered solutions.</span>
          </h1>

          <p className="intro">
            NTU Master's student focusing on AI, data analytics,
            automation and digital transformation.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-circle">AI</div>
          <h3>AI & Digital Transformation</h3>
          <p>
            Turning business problems into practical,
            intelligent and automated solutions.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2>Combining business thinking with AI.</h2>

        <p className="section-text">
          I am a Master's student at Nanyang Technological University
          with interests in Artificial Intelligence, Data Analytics,
          Automation and Digital Transformation.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="section-label">SELECTED PROJECTS</p>
        <h2>Things I've built.</h2>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-number">01</div>
            <h3>月叙 · AI Health Assistant</h3>
            <p>
              An AI-powered personalized women's health assistant
              combining LLM capabilities with deterministic business logic.
            </p>

            <div className="tags">
              <span>AI</span>
              <span>LLM</span>
              <span>Next.js</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Timesheet Automation</h3>
            <p>
              An end-to-end automation workflow using UI automation,
              data automation and email automation to process employee
              timesheets.
            </p>

            <div className="tags">
              <span>UiPath</span>
              <span>RPA</span>
              <span>Automation</span>
              <span>Google Sheets</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Data Analytics & AI</h3>
            <p>
              Practical projects involving Python, machine learning,
              data processing and foundation model APIs.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>API</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <p className="section-label">EXPERIENCE</p>
        <h2>My background.</h2>

        <div className="experience-list">
          <div className="experience-item">
            <div className="date">2025</div>
            <div>
              <h3>Huafu Securities</h3>
              <p>Assistant to Investment Advisory Director</p>
              <p>
                Industry research, Excel/VBA data processing and
                quantitative back-testing support.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="date">2025</div>
            <div>
              <h3>Fuyao Group</h3>
              <p>General Ledger Accounting Assistant</p>
              <p>
                Reviewed financial vouchers, performed AR/AP
                reconciliation and explored process automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Let's build something useful.</h2>

        <p>
          Interested in AI, automation, data and digital transformation?
        </p>

        <a
          href="mailto:your-email@example.com"
          className="primary-btn"
        >
          Email Me
        </a>
      </section>

      <footer>
        <p>© 2026 Weng Yongting</p>
      </footer>
    </div>
  );
}

export default App;