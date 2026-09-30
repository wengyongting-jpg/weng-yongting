// Behance 风格瀑布流概览 — 用于项目详情页 05 / MATERIALS 区块。
// 接收 slides 数组（图像 URL），垂直堆叠 16:9 landscape 图像，每张右上有编号徽章。
// 折叠下方图片懒加载，底部提供 "查看完整 deck" + "下载附录" 按钮。
//
// 用法：
//   <SlideDeck
//     slides={["/projects/zhiyi/slides/slide-01.png", ...]}
//     deckUrl="/projects/zhiyi/deck.pdf"      // 原始 PPT/PDF 链接（新窗口打开）
//     appendixUrl="/projects/zhiyi/appendix.pdf"
//     appendixSize="4.2MB"
//   />

function SlideDeck({ slides = [], deckUrl, appendixUrl, appendixSize }) {
  if (!slides || slides.length === 0) return null;

  const total = slides.length;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <figure className="slide-deck" aria-label="Case study slide deck">
      <ol className="slide-deck-list">
        {slides.map((src, i) => (
          <li className="slide-deck-slide" key={src}>
            <img
              src={src}
              alt={`Slide ${i + 1} of ${total}`}
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              width={1600}
              height={900}
            />
            <span className="slide-deck-no" aria-hidden="true">
              {pad(i + 1)} <span className="slide-deck-no-sep">/</span> {pad(total)}
            </span>
          </li>
        ))}
      </ol>

      <div className="slide-deck-actions">
        {deckUrl && (
          <a
            className="slide-deck-btn slide-deck-btn--primary"
            href={deckUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW FULL DECK <b aria-hidden="true">↗</b>
          </a>
        )}
        {appendixUrl && (
          <a
            className="slide-deck-btn"
            href={appendixUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            DOWNLOAD APPENDIX{appendixSize ? ` (${appendixSize})` : ""} <b aria-hidden="true">↓</b>
          </a>
        )}
      </div>

      <p className="slide-deck-meta">
        <b>{total}</b> slides · <b>16:9</b> landscape
        {appendixSize && <> · <b>{appendixSize}</b> appendix</>}
      </p>
    </figure>
  );
}

export default SlideDeck;
