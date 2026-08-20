import { ProjectSection } from '../components/ProjectSection'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/projects'

export function MoreProjects() {
  return <section className="section more-projects">
    <SectionTitle eyebrow="07 / MORE WORK" title="게임과 생산성 도구로 이어지는 구현" />
    <div className="project-list">{projects.slice(3).map((p, i) => <ProjectSection project={p} reverse={i % 2 === 0} key={p.id} />)}</div>
  </section>
}
