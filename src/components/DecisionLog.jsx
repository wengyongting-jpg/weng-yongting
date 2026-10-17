// Decision Log — 产品决策记录卡片。
// 每张卡：遇到什么问题 → 比较了什么方案 → 为什么选当前方案 → 证据 → 后续如何验证。
// 数据来自 caseDetail.js 的 project.decisions。
function DecisionLog({ decisions }) {
  return (
    <div className="dlog">
      {decisions.map((d, i) => (
        <div key={i} className="dlog-card">
          <span className="dlog-no">DECISION {String(i + 1).padStart(2, "0")}</span>
          <h3 className="dlog-question">{d.question}</h3>
          <div className="dlog-row">
            <small>OPTIONS COMPARED</small>
            <p>{d.options}</p>
          </div>
          <div className="dlog-row">
            <small>CHOSEN</small>
            <p>{d.chosen}</p>
          </div>
          {d.evidence && (
            <div className="dlog-row">
              <small>EVIDENCE</small>
              <p>{d.evidence}</p>
            </div>
          )}
          {d.validation && (
            <div className="dlog-row dlog-row--next">
              <small>VALIDATE VIA</small>
              <p>{d.validation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DecisionLog;
