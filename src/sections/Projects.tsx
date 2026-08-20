import { ProjectSection } from '../components/ProjectSection'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/projects'

export function Projects() {
  return <section className="section selected-projects">
    <SectionTitle eyebrow="05 / SELECTED WORK" title="Project details" />
    <div className="project-list">{projects.slice(0, 3).map((p, i) => <ProjectSection project={p} reverse={i % 2 === 1} key={p.id} />)}</div>
    <VibeFlow />
  </section>
}

function VibeFlow() {
  const items = ['IDEA', 'AI ANALYSIS', 'RESOURCE DIAGNOSIS', 'TECH STACK', 'FEATURE LIST', 'ROADMAP', 'CLAUDE CODE PROMPT']
  return <aside className="vibe-flow reveal"><div><p className="eyebrow">VIBEHOLIC / AI COACHING FLOW</p><h3>아이디어에서 실행 프롬프트까지</h3><p>기술 선택과 순서 설계의 부담을 줄이고 실행에 집중할 수 있도록 개발 과정을 구조화합니다.</p></div><ol>{items.map((x, i) => <li key={x}><span>{String(i + 1).padStart(2, '0')}</span>{x}</li>)}</ol></aside>
}
