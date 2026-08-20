import { ProjectSection } from '../components/ProjectSection'
import { projects } from '../data/projects'

export function MoreProjects() {
  return <section className="section more-projects">
    <div className="project-list">{projects.slice(3).map((p, i) => <ProjectSection project={p} reverse={i % 2 === 0} key={p.id} />)}</div>
  </section>
}
