import { useState } from "react";

// Prototype Playground — 可交互的简化产品演示（数据驱动，非真实后端）。
// 访问者选择一个样例输入，查看系统输出：facts / risks / answer / questions 四种块。
// disclaimer 字段必须清楚标注"模拟数据 / 设计演示"，与真实项目结果区分。
function ProtoBlock({ block }) {
  if (block.type === "facts") {
    return (
      <div className="proto-block">
        <small className="proto-block-label">EXTRACTED FACTS</small>
        <div className="proto-facts">
          {block.items.map((f, i) => (
            <div key={i} className={`proto-fact${f.flag ? " proto-fact--flag" : ""}`}>
              <span>{f.label}</span>
              <strong>{f.value}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (block.type === "risks") {
    return (
      <div className="proto-block">
        <small className="proto-block-label">RISK FINDINGS · EVIDENCE-GROUNDED</small>
        {block.items.map((r, i) => (
          <div key={i} className="proto-risk">
            <strong>{r.title}</strong>
            <p>{r.evidence}</p>
            {r.rule && <span className="proto-risk-rule">Rule · {r.rule}</span>}
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "answer") {
    return (
      <div className={`proto-block proto-answer proto-answer--${block.status}`}>
        <small className="proto-block-label">
          {block.status === "refused" ? "REFUSED · INSUFFICIENT EVIDENCE"
            : block.status === "clarify" ? "CLARIFICATION NEEDED"
            : "ANSWER · WITH CITATIONS"}
        </small>
        <p className="proto-answer-text">{block.text}</p>
        {block.citations && block.citations.length > 0 && (
          <div className="proto-citations">
            {block.citations.map((c, i) => (
              <span key={i} className="proto-citation">◦ {c}</span>
            ))}
          </div>
        )}
      </div>
    );
  }
  if (block.type === "questions") {
    return (
      <div className="proto-block">
        <small className="proto-block-label">LANDLORD CLARIFICATION QUESTIONS</small>
        <ul className="proto-questions">
          {block.items.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </div>
    );
  }
  return null;
}

function PrototypePlayground({ prototype }) {
  const [active, setActive] = useState(0);
  const sample = prototype.samples[active];

  return (
    <div className="proto">
      {prototype.disclaimer && (
        <p className="proto-disclaimer">{prototype.disclaimer}</p>
      )}
      <div className="proto-tabs">
        {prototype.samples.map((s, i) => (
          <button
            key={s.id || s.name}
            type="button"
            className={`proto-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div className="proto-input">
        <small>{prototype.inputLabel || "INPUT"}</small>
        <p>{sample.input}</p>
      </div>
      <div className="proto-output">
        {sample.blocks.map((b, i) => <ProtoBlock key={i} block={b} />)}
      </div>
    </div>
  );
}

export default PrototypePlayground;
