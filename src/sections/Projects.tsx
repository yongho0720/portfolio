import { ProjectSection } from '../components/ProjectSection'
import { projects } from '../data/projects'

export function Projects() {
  return <section className="section selected-projects">
    <div className="project-list"><ProjectSection project={projects[0]} /></div>
    <VibeFlow />
    <div className="project-list continuing">{projects.slice(1, 3).map((p, i) => <ProjectSection project={p} reverse={i % 2 === 0} key={p.id} />)}</div>
  </section>
}

function VibeFlow() {
  const items = ['아이디어 분석', '리소스 진단', '개발 로드맵', 'Claude Code 프롬프트']
  return <aside className="vibe-flow reveal"><div><p className="eyebrow">06 / 바이브홀릭 · 사용 흐름</p><h3>AI 코칭 플로우</h3><p>사용자의 목표를 기반으로 AI가 개발 과정을 구조화하고, Claude Code에게 바로 전달할 수 있는 작업 지시문을 생성합니다. 초심자는 기술 선택과 순서 설계의 부담을 줄이고 실행에 집중할 수 있습니다.</p><p className="flow-meta">STACK<br />Claude API · 프롬프트 생성 · 로드맵 자동화 · 진행 관리<br /><br />ROLE<br />서비스 설계 · AI 플로우 설계</p></div><ol>{items.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, '0')}</span>{x}</li>)}</ol><figure className="vibe-flow-image"><img src={`${import.meta.env.BASE_URL}assets/projects/vibeholic-flow.png`} alt="바이브홀릭 AI 기능 설계와 Claude Code 프롬프트 전체 화면" loading="lazy" /></figure></aside>
}
