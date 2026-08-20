import { AgentFlow } from '../components/AgentFlow'
import { SectionTitle } from '../components/SectionTitle'

export function AgentSystem() {
  return <section className="section agent-system" id="ai-system">
    <SectionTitle eyebrow="03 / AI AGENT SYSTEM" title="AI 에이전트 활용 방식" copy="LAST MACHINE을 기준으로 기획·디자인·구현·검증·콘텐츠 생성을 역할별 Claude Code 서브에이전트에 위임하고, 사람은 방향 결정과 최종 승인 게이트에 집중했습니다." />
    <AgentFlow />
    <div className="orchestrator-grid">
      <div className="terminal reveal"><div className="terminal-bar"><i /><i /><i /><span>CLAUDE.md — orchestrator</span></div><pre><code><span>&gt; feature.request()</span>{`\n\nplanner\n  ↓ requirements.md\ndesigner\n  ↓ ui-spec.md\ndeveloper\n  ↓ implementation\nverifier\n\n`}<b>FAIL → developer</b>{`\n`}<em>PASS → done</em></code></pre></div>
      <div className="orchestrator-copy reveal"><p className="eyebrow">오케스트레이터</p><h3>CLAUDE.md가 호출 순서와 결과 전달 규칙을 정의</h3><p>사람은 무엇을 만들지, 이대로 배포할지 최종 판단합니다. 검증 실패 시 구현 에이전트로 되돌리는 자가교정 루프를 구성했습니다.</p><div className="self-correction"><span>FAIL → 자동 재위임</span><strong>Verifier → Developer → Verifier</strong></div></div>
    </div>
  </section>
}
