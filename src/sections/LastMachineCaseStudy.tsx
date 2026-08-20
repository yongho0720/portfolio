import { SectionTitle } from '../components/SectionTitle'

const checks = ['API specification match', '401 handling', 'N+1 prevention', 'collision detection', 'TypeScript compile', 'game state validation']
const enemies = [
  ['Basic', '40% tracking / 60% random'], ['Scout', 'Dash / ×2 speed'], ['Armored', 'Rage fire at critical HP'],
  ['Sniper', 'Re-aim before shot'], ['Heavy', '3-way spread shot'], ['Speeder', 'Close-range rapid fire'],
]

export function LastMachineCaseStudy() {
  return <section className="section case-study">
    <SectionTitle eyebrow="06 / CASE STUDY" title="LAST MACHINE × AI Agents" copy="기획부터 검증과 재수정까지, 사람이 정한 방향을 에이전트가 실행하는 자가 검증 루프" />
    <div className="case-flow reveal">
      {['REQUEST', 'PLANNER', 'DESIGNER', 'DEVELOPER', 'VERIFIER'].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong>{i < 4 && <i>→</i>}</div>)}
      <aside><b>FAIL</b><span>Bug specification → Developer → Rebuild → Verifier</span></aside>
    </div>
    <div className="case-columns">
      <div className="verification-panel reveal"><p className="eyebrow">VERIFICATION MATRIX</p><h3>검증 기준을 통과해야 완료됩니다.</h3><ul>{checks.map(x => <li key={x}><span>✓</span>{x}<b>PASS</b></li>)}</ul></div>
      <div className="runtime-panel reveal"><p className="eyebrow">IN-GAME AI / RULE-BASED</p><h3>LLM 호출 없는 Enemy Behaviors</h3><p>게임 실행 중 API를 호출하지 않습니다. 초기 설계된 규칙 기반 행동입니다.</p><div>{enemies.map(([name, behavior]) => <dl key={name}><dt>{name}</dt><dd>{behavior}</dd></dl>)}</div></div>
    </div>
  </section>
}
