import { SectionTitle } from '../components/SectionTitle'

const process = [
  ['PLAN', '기능 · API · DB · 구조 설계'], ['BUILD', 'React · Laravel · App 구현'],
  ['VERIFY', 'PASS / FAIL · 버그 명세 · 재위임'], ['SHIP', 'Web · App Store · Internal Test'],
]

export function About() {
  return <section className="section about" id="about">
    <SectionTitle eyebrow="01 / APPROACH" title={'AI를 개발 프로세스를 나누고\n검증하는 시스템으로 활용합니다.'} />
    <div className="process-grid">{process.map(([title, copy], i) => <div className="process-card reveal" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
  </section>
}
