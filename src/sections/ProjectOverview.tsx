import { projects } from '../data/projects'
import { SectionTitle } from '../components/SectionTitle'

export function ProjectOverview() {
  return <section className="section overview" id="projects">
    <SectionTitle eyebrow="02 / PROJECT INDEX" title="실제로 만들고, 배포하고, 운영한 프로젝트" copy="서비스 · 게임 · 생산성 도구로 확장되는 프로젝트 라인업" />
    <div className="bento-grid">
      {projects.map((p, i) => <a href={`#${p.id}`} className={`overview-item item-${i + 1} reveal`} key={p.id}>
        <span className="overview-num">{p.number}</span><div><p>{p.category} · {p.status}</p><h3>{p.title}</h3><span>{p.headline}</span></div><i>↘</i>
      </a>)}
    </div>
  </section>
}
