const agents = [
  ['01', 'game-planner', '요구사항 · API · DB · 컴포넌트 구조'],
  ['02', 'game-designer', 'UI 레이아웃 · 애니메이션 · 접근성'],
  ['03', 'game-developer', 'Laravel / React 구현 · 리팩토링'],
  ['04', 'game-verifier', '타입 · 엣지 케이스 · PASS / FAIL'],
]

export function AgentFlow() {
  return <div className="agent-diagram" aria-label="Human에서 Planner, Designer, Developer, Verifier로 이어지는 에이전트 흐름">
    <div className="human-node"><span>HUMAN</span><strong>Direction<br />& Approval</strong></div>
    <div className="flow-line" aria-hidden="true" />
    <div className="agent-nodes">
      {agents.map(([num, name, role], i) => <div className="agent-node" key={name}>
        <span className="node-number">{num}</span><strong>{name}</strong><p>{role}</p>{i < agents.length - 1 && <i className="node-arrow">→</i>}
      </div>)}
    </div>
    <div className="result-rails">
      <div className="fail-rail"><span>FAIL</span><b>Bug specification</b><i>↩ Developer로 자동 재위임</i></div>
      <div className="pass-rail"><span>PASS</span><b>Complete</b><i>Human approval gate</i></div>
    </div>
    <div className="content-node"><span>ON REQUEST</span><strong>content-generator</strong><p>레벨 맵 · 시드 데이터 · 인게임 텍스트</p></div>
  </div>
}
