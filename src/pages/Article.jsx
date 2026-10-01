import { useParams, Link } from "react-router-dom";
import { research } from "../data/index.js";
import CitationBlock from "../components/CitationBlock.jsx";
import NotFound from "./NotFound.jsx";

function Article() {
  const { slug } = useParams();
  const article = research.find((r) => r.slug === slug);
  if (!article) return <NotFound />;

  return (
    <article className="section-wrap case-study">
      <p className="eyebrow">04 / THINKING</p>
      <h2 className="case-title">{article.title}</h2>
      <p className="case-subtitle">{article.date} · {article.venue}</p>
      <p className="case-overview">{article.excerpt}</p>
      <CitationBlock article={article} />
      {article.achievements.map((a) => (
        <section className="case-block" key={a}>
          <p>{a}</p>
        </section>
      ))}
      <p className="case-actions">
        <Link className="text-link" to="/thinking">← BACK TO THINKING</Link>
      </p>
    </article>
  );
}

export default Article;
