import { AgentFlow } from '../components/AgentFlow'
import { SectionTitle } from '../components/SectionTitle'

export function AgentSystem() {
  return <section className="section agent-system" id="ai-system">
    <SectionTitle eyebrow="03 / CORE SYSTEM" title="AI Agent System" copy="AI에게 코드를 부탁하는 것이 아니라, 역할을 나누고 서로 검증하게 합니다." />
    <AgentFlow />
    <div className="orchestrator-grid">
      <div className="terminal reveal"><div className="terminal-bar"><i /><i /><i /><span>CLAUDE.md — orchestrator</span></div><pre><code><span>&gt; feature.request()</span>{`\n\nplanner\n  ↓ requirements.md\ndesigner\n  ↓ ui-spec.md\ndeveloper\n  ↓ implementation\nverifier\n\n`}<b>FAIL → developer</b>{`\n`}<em>PASS → done</em></code></pre></div>
      <div className="orchestrator-copy reveal"><p className="eyebrow">ORCHESTRATOR / CLAUDE.md</p><h3>호출 순서와 결과 전달 규칙을 정의합니다.</h3><p>기능 요청은 Planner → Designer → Developer → Verifier 순서로 흐릅니다. Verifier가 FAIL을 반환하면 명확한 버그 명세와 함께 Developer에게 자동 재위임합니다.</p><div className="self-correction"><span>AUTONOMOUS LOOP</span><strong>검증 → 결함 명세 → 수정 → 재검증</strong></div></div>
    </div>
  </section>
}
