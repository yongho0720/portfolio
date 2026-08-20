const steps = ['IDEA', 'PLAN', 'DESIGN', 'BUILD', 'VERIFY', 'SHIP']

export function Workflow() {
  return <div className="workflow-diagram">
    <div className="workflow-main">{steps.map((step, i) => <div className={`workflow-step step-${i}`} key={step}><span>0{i + 1}</span><strong>{step}</strong>{i < steps.length - 1 && <i>→</i>}</div>)}</div>
    <div className="retry-loop"><span>FAIL?</span><b>YES</b><i>BUILD로 돌아가 수정 후 재검증</i></div>
  </div>
}
