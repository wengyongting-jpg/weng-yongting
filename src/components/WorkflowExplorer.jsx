import { useState } from "react";

// AI Workflow Explorer — 可点击的 AI 决策流程图。
// 点击任一节点，下方展示该节点的输入 / 输出 / 判断规则 / 异常处理。
// 数据来自 caseDetail.js 的 project.workflow.nodes。
function WorkflowExplorer({ workflow }) {
  const [active, setActive] = useState(0);
  const node = workflow.nodes[active];

  return (
    <div className="wf-explorer">
      <div className="wf-track">
        {workflow.nodes.map((n, i) => (
          <div className="wf-step" key={n.id || n.label}>
            <button
              type="button"
              className={`wf-node${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="wf-node-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="wf-node-label">{n.label}</span>
              {n.tagline && <span className="wf-node-tagline">{n.tagline}</span>}
            </button>
            {i < workflow.nodes.length - 1 && (
              <span className="wf-arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="wf-detail">
        <h3 className="wf-detail-title">
          <span className="wf-detail-no">{String(active + 1).padStart(2, "0")}</span>
          {node.label}
        </h3>
        <div className="wf-detail-grid">
          {node.input && (
            <div className="wf-detail-card">
              <small>INPUT</small>
              <p>{node.input}</p>
            </div>
          )}
          {node.output && (
            <div className="wf-detail-card">
              <small>OUTPUT</small>
              <p>{node.output}</p>
            </div>
          )}
          {node.rules && (
            <div className="wf-detail-card">
              <small>LOGIC / RULES</small>
              <p>{node.rules}</p>
            </div>
          )}
          {node.exception && (
            <div className="wf-detail-card wf-detail-card--warn">
              <small>EDGE CASE / FALLBACK</small>
              <p>{node.exception}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkflowExplorer;
