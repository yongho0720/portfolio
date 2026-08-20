import { SectionTitle } from '../components/SectionTitle'

const groups = [
  ['FRONTEND & APP', ['React', 'React Native', 'TypeScript', 'Vite', 'Expo', 'HTML Canvas 2D', 'React Native Skia']],
  ['BACKEND & DATA', ['Laravel', 'PHP 8.3', 'Node.js', 'Python', 'MySQL', 'Nginx', 'localStorage']],
  ['INFRA & RELEASE', ['AWS Lightsail', 'EAS Build', 'App Store', 'GitHub Pages']],
  ['AI DEVELOPMENT', ['Claude API', 'Claude Code', 'Codex', 'Multi-agent Pipeline']],
]

export function TechStack() {
  return <section className="section tech-stack" id="stack">
    <SectionTitle eyebrow="08 / CAPABILITIES" title="Tech Stack" copy="서비스 설계부터 앱·웹 구현, AI 파이프라인과 배포까지" />
    <div className="stack-table">{groups.map(([title, items], i) => <div className="stack-row reveal" key={title as string}><span>0{i + 1}</span><h3>{title as string}</h3><div>{(items as string[]).map(x => <b key={x}>{x}</b>)}</div></div>)}</div>
  </section>
}
