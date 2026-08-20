import { Workflow } from '../components/Workflow'
import { SectionTitle } from '../components/SectionTitle'

const ai = ['코드 작성', 'API 초안', 'DB schema', 'UI 구현', '테스트', 'bug report', 'refactoring', 'seed data']
const human = ['무엇을 만들 것인가', '기능 우선순위', '비주얼 방향', 'architecture 변경', '접근법 변경', '최종 배포 승인']

export function DevelopmentWorkflow() {
  return <section className="section dev-workflow" id="workflow">
    <SectionTitle eyebrow="04 / DEVELOPMENT WORKFLOW" title="반복은 AI에게, 판단은 사람에게" copy="판단이 필요한 곳만 사람이 개입합니다." />
    <Workflow />
    <div className="gate-grid">
      <div className="gate ai-gate reveal"><p className="eyebrow">AI / AUTONOMOUS</p><h3>정답을 검증할 수 있는 작업</h3><ul>{ai.map(x => <li key={x}>{x}</li>)}</ul></div>
      <div className="gate human-gate reveal"><p className="eyebrow">HUMAN / GATE</p><h3>제품의 방향을 결정하는 판단</h3><ul>{human.map(x => <li key={x}>{x}</li>)}</ul></div>
    </div>
  </section>
}
