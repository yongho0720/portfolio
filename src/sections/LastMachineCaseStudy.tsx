import { SectionTitle } from '../components/SectionTitle'

const checks = ['API 명세 일치', '401 처리', 'N+1 방지', '충돌 판정', 'TypeScript 컴파일 통과']
const enemies = [
  ['Basic', '40% 추적 / 60% 랜덤'], ['Scout', '대시 · 속도 2배'], ['Armored', 'HP 1 분노 연사'],
  ['Sniper', '발사 직전 재조준'], ['Heavy', '3방향 산탄'], ['Speeder', '근접 급사'],
]

export function LastMachineCaseStudy() {
  return <section className="section case-study">
    <SectionTitle eyebrow="09 / CASE STUDY" title="라스트머신에 적용한 AI 에이전트 개발 구조" copy="CLAUDE.md가 오케스트레이터 정책을 정의하고, 기능 요청은 planner → designer → developer → verifier 순으로 흐릅니다. verifier가 FAIL을 보고하면 developer로 재위임하여 사람 개입 없이 결함을 교정합니다." />
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
