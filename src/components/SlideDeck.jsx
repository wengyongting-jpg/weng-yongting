// 幻灯片图片网格 — 用于项目详情页 05 / MATERIALS 区块。
// 直接展示幻灯片图片（3-4 列响应式网格），不提供 PPT/PDF 查看或下载入口。
// 原始 deck PDF 已从 public 移除，无法通过 URL 下载。
//
// 用法：
//   <SlideDeck slides={["/projects/zhiyi/slides/slide-01.png", ...]} />

function SlideDeck({ slides = [] }) {
  if (!slides || slides.length === 0) return null;

  const total = slides.length;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <figure className="slide-deck" aria-label="Slide image gallery">
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
    </figure>
  );
}

export default SlideDeck;
