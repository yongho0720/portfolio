import type { Project } from '../data/projects'
import { TechBadge } from './TechBadge'
import { ProjectGallery } from './ProjectGallery'

export function ProjectSection({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return <article className={`project-detail ${reverse ? 'reverse' : ''}`} id={project.id}>
    <div className="project-copy reveal">
      <div className="project-index"><span>{project.number}</span><span>{project.category}</span><span className="status">{project.status}</span></div>
      <h3>{project.title}{project.subtitle && <small>{project.subtitle}</small>}</h3>
      <p className="project-headline">{project.headline}</p>
      <p className="project-description">{project.description}</p>
      <dl className="project-meta"><div><dt>ROLE</dt><dd>{project.roles.join(' · ')}</dd></div></dl>
      <div className="badge-list">{project.stack.map(item => <TechBadge key={item}>{item}</TechBadge>)}</div>
      <div className="project-links">
        {project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">{project.appStoreUrl ? '웹사이트 방문' : 'VISIT PROJECT'} <span>↗</span></a>}
        {project.appStoreUrl && <a className="text-link" href={project.appStoreUrl} target="_blank" rel="noreferrer">App Store에서 보기 <span>↗</span></a>}
        {!project.url && !project.appStoreUrl && <span className="text-link disabled">CURRENTLY IN INTERNAL TEST</span>}
      </div>
    </div>
    {project.images ? <ProjectGallery project={project} /> : <figure className="project-image reveal">
      <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} loading="lazy" />
    </figure>}
  </article>
}
