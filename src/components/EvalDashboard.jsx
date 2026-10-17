// Evaluation Dashboard — 指标卡 + 版本对比条形 + 失败案例分析。
// 数据来自 caseDetail.js 的 project.evaluation。
// disclaimer 字段用于明确标注"测试集评估 / 演示阶段数据"，与真实用户指标区分。
function EvalDashboard({ evaluation }) {
  return (
    <div className="eval-dash">
      {evaluation.disclaimer && (
        <p className="eval-disclaimer">{evaluation.disclaimer}</p>
      )}

      {evaluation.metrics && evaluation.metrics.length > 0 && (
        <div className="eval-metrics">
          {evaluation.metrics.map((m, i) => (
            <div key={i} className="eval-metric">
              <span className="eval-metric-value">{m.value}</span>
              <span className="eval-metric-label">{m.label}</span>
              {m.note && <span className="eval-metric-note">{m.note}</span>}
            </div>
          ))}
        </div>
      )}

      {evaluation.versions && evaluation.versions.length > 0 && (
        <div className="eval-versions">
          {evaluation.versions.map((v) => (
            <div key={v.name} className="eval-version">
              <div className="eval-version-head">
                <strong>{v.name}</strong>
                {v.summary && <span>{v.summary}</span>}
              </div>
              {v.scores.map((s) => (
                <div key={s.label} className="eval-bar-row">
                  <span className="eval-bar-label">{s.label}</span>
                  <span className="eval-bar-track">
                    <span
                      className="eval-bar-fill"
                      style={{ width: `${(s.value / s.max) * 100}%` }}
                    />
                  </span>
                  <span className="eval-bar-value">
                    {s.value}/{s.max}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {evaluation.failures && evaluation.failures.length > 0 && (
        <div className="eval-failures">
          <h3 className="eval-failures-title">Failure cases &amp; lessons</h3>
          {evaluation.failures.map((f, i) => (
            <div key={i} className="eval-failure">
              <strong>{f.title}</strong>
              <p>{f.issue}</p>
              {f.lesson && <span className="eval-failure-lesson">→ {f.lesson}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EvalDashboard;
