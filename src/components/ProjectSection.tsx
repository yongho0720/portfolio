import type { Project } from '../data/projects'
import { TechBadge } from './TechBadge'

export function ProjectSection({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return <article className={`project-detail ${reverse ? 'reverse' : ''}`} id={project.id}>
    <div className="project-copy reveal">
      <div className="project-index"><span>{project.number}</span><span>{project.category}</span><span className="status">{project.status}</span></div>
      <h3>{project.title}{project.subtitle && <small>{project.subtitle}</small>}</h3>
      <p className="project-headline">{project.headline}</p>
      <p className="project-description">{project.description}</p>
      <dl className="project-meta"><div><dt>ROLE</dt><dd>{project.roles.join(' · ')}</dd></div></dl>
      <div className="badge-list">{project.stack.map(item => <TechBadge key={item}>{item}</TechBadge>)}</div>
      {project.url ? <a className="text-link" href={project.url} target="_blank" rel="noreferrer">VISIT PROJECT <span>↗</span></a> : <span className="text-link disabled">CURRENTLY IN INTERNAL TEST</span>}
    </div>
    <figure className="project-image reveal">
      <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} loading="lazy" />
    </figure>
  </article>
}
