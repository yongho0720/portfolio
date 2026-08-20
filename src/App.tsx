import { useEffect, useState } from 'react'

const pages = [
  ['AI 활용 서비스 개발 포트폴리오'],
  ['Portfolio Map'],
  ['AI Agent System'],
  ['AI와 함께 일하는 방식'],
  ['바이브홀릭', 'https://vibeholic.app'],
  ['바이브홀릭 AI 코칭 플로우', 'https://vibeholic.app'],
  ['모바코', 'https://movaco.my'],
  ['라스트머신 모바일 게임', 'https://apps.apple.com/kr/app/last-machine/id6765675903'],
  ['라스트머신 AI Agent Case Study'],
  ['라스트머신 웹', 'https://lastmachine.vibeholic.app/'],
  ['Actify', 'https://apps.apple.com/kr/app/%EC%97%91%ED%8B%B0%ED%8C%8C%EC%9D%B4/id6771630802'],
  ['산불특공대'],
  ['Built by 노용호'],
] as const

export default function App() {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.pdf-page')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        setActive(Number((entry.target as HTMLElement).dataset.page))
      }
    }), { threshold: .45 })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <>
    <header className="viewer-header">
      <a href="#page-1" className="viewer-brand">YONGHO NOH <i /></a>
      <nav aria-label="포트폴리오 페이지">
        <a href="#page-1">COVER</a><a href="#page-3">AI SYSTEM</a><a href="#page-5">PROJECTS</a><a href="#page-13">BUILT BY</a>
      </nav>
      <span className="page-indicator"><b>{String(active).padStart(2, '0')}</b> / 13</span>
    </header>

    <main className="pdf-deck">
      {pages.map(([title, url], index) => {
        const page = index + 1
        return <section className="pdf-page" id={`page-${page}`} data-page={page} key={page} aria-labelledby={`page-title-${page}`}>
          <h2 id={`page-title-${page}`} className="sr-only">{title}</h2>
          <div className="page-shell">
            <img src={`${import.meta.env.BASE_URL}assets/pages/page-${String(page).padStart(2, '0')}.png`} alt={`${page}페이지 — ${title}`} />
            {url && <a className="page-link" href={url} target="_blank" rel="noreferrer" aria-label={`${title} 프로젝트 열기`}><span>OPEN PROJECT ↗</span></a>}
          </div>
          <span className="page-caption"><b>{String(page).padStart(2, '0')}</b>{title}</span>
        </section>
      })}
    </main>

    <aside className="progress-rail" aria-hidden="true"><i style={{ height: `${active / 13 * 100}%` }} /></aside>
  </>
}
