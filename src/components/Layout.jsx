import { useEffect, useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/index.js";

const NAV = [
  { to: "/work", label: "WORK" },
  { to: "/lab", label: "LAB" },
  { to: "/thinking", label: "THINKING" },
  { to: "/now", label: "NOW" },
  { to: "/about", label: "ABOUT" },
  { to: "/resume", label: "RESUME" },
];

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu and reset scroll on every route change.
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="wordmark" to="/">{profile.wordmark}</Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to}>{n.label}</NavLink>
          ))}
        </nav>
        <p className="availability"><i /> {profile.availability}</p>
      </header>

      <main className="portfolio">
        <Outlet />
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profile.wordmark}</span>
        <span>{profile.focus}</span>
        <span className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">GITHUB <b>↗</b></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LINKEDIN <b>↗</b></a>
        </span>
      </footer>
    </>
  );
}

export default Layout;
