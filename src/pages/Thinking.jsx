import { Link } from "react-router-dom";
import InsightCard from "../components/InsightCard.jsx";
import { posts, research } from "../data/index.js";

// THINKING — a lightweight professional knowledge journal, not a blog.
//
// Insight cards come from src/data/posts.js (short, expandable, no fake
// long-form articles). The verified research publication is kept as a
// separate reference block linking to its existing article route.
function Thinking() {
  return (
    <section className="section-wrap thinking">
      <div className="section-heading">
        <p className="eyebrow">04 / THINKING</p>
        <h2>THINKING &amp;<br /><span>NOTES.</span></h2>
      </div>

      <p className="thinking-intro">
        Short professional positions on AI, automation, product, and data. Not a blog —
        a working journal of the principles I apply when designing AI products.
      </p>

      <div className="insight-grid">
        {posts.map((p) => (
          <InsightCard key={p.slug} post={p} />
        ))}
      </div>

      <div className="thinking-publications">
        <p className="eyebrow">PUBLICATIONS</p>
        <ul>
          {research.map((r) => (
            <li key={r.slug}>
              <Link to={`/thinking/${r.slug}`} className="text-link">
                {r.title} <b>↗</b>
              </Link>
              <span className="thinking-pub-meta">{r.date} · {r.venue}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Thinking;
