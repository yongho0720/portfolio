import { projects } from '../data/projects'

const stack = ['Laravel', 'Node.js', 'Python', 'React', 'React Native', 'TypeScript', 'MySQL', 'AWS', 'Claude API', 'Claude Code', 'Codex']

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid-bg" aria-hidden="true" />
    <div className="hero-copy">
      <p className="eyebrow">AI SERVICE DEVELOPMENT PORTFOLIO</p>
      <h1><span>AI 활용 서비스</span><br />개발 포트폴리오</h1>
      <p className="hero-lede">아이디어를 구체화하고, 설계하고,<br />개발 · 검증 · 배포까지 AI 에이전트와 함께<br /><strong>완성한 프로젝트 기록입니다.</strong></p>
      <div className="hero-actions"><a className="button primary" href="#projects">View Projects</a><a className="button secondary" href="#ai-system">AI Development System</a></div>
      <div className="profile-line"><b>노용호</b><span>Planning · Development · Deployment · Operation</span></div>
      <div className="hero-stack" aria-label="주요 기술">{stack.map(item => <span key={item}>{item}</span>)}</div>
    </div>
    <div className="hero-showcase" aria-label="주요 프로젝트 미리보기">
      {[projects[0], projects[2], projects[5]].map((p, i) => <figure className={`hero-shot shot-${i + 1}`} key={p.id}>
        <img src={`${import.meta.env.BASE_URL}${p.image}`} alt={p.imageAlt} /><figcaption><span>{p.number}</span>{p.title}</figcaption>
      </figure>)}
      <div className="hero-orbit"><span>PLAN</span><span>BUILD</span><span>VERIFY</span><span>SHIP</span></div>
    </div>
    <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <i>↓</i></a>
  </section>
}
