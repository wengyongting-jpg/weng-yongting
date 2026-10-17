// Roadmap — Now / Next / Later 三列迭代计划。
// 数据来自 caseDetail.js 的 project.iteration。
function Roadmap({ iteration }) {
  const cols = [
    ["NOW", iteration.now],
    ["NEXT", iteration.next],
    ["LATER", iteration.later],
  ].filter(([, items]) => items && items.length > 0);

  return (
    <div className="roadmap">
      {cols.map(([label, items]) => (
        <div key={label} className="roadmap-col">
          <span className="roadmap-label">{label}</span>
          <ul>
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Roadmap;
