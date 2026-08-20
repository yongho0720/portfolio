import { useState } from 'react'

const links = [['projects', 'PROJECTS'], ['ai-system', 'AI SYSTEM'], ['workflow', 'WORKFLOW'], ['stack', 'STACK'], ['contact', 'CONTACT']]

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="첫 화면으로">YONGHO NOH<span /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation"><span /><span /></button>
    <nav id="navigation" className={open ? 'open' : ''} aria-label="주요 메뉴">
      {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </header>
}
