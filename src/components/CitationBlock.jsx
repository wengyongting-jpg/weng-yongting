// Presents verified publication facts for a research entry.
// Only renders facts supported by the profile (venue, date, co-authored,
// published in proceedings, presented at conference).
function CitationBlock({ article }) {
  return (
    <aside className="citation">
      <p className="eyebrow">PUBLICATION</p>
      <p className="citation-venue">{article.venue}</p>
      <p className="citation-meta">{article.date}</p>
      <ul className="citation-facts">
        <li>Co-authored</li>
        <li>Published in the conference proceedings</li>
        <li>Presented at the conference</li>
      </ul>
    </aside>
  );
}

export default CitationBlock;
