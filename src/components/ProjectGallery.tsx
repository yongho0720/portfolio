import { useRef, useState } from 'react'
import type { Project } from '../data/projects'

export function ProjectGallery({ project }: { project: Project }) {
  const images = project.images ?? [project.image]
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function goTo(index: number) {
    const element = track.current
    if (!element) return
    element.scrollTo({
      left: index * element.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return <figure className="project-image project-gallery reveal" aria-label={`${project.title} 스크린샷`} aria-roledescription="캐러셀">
    <div className="gallery-stage">
      <div className="gallery-track" ref={track} tabIndex={0}
        aria-label="프로젝트 이미지, 좌우 방향키로 넘기기"
        onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            goTo(Math.max(0, Math.min(images.length - 1, active + (event.key === 'ArrowRight' ? 1 : -1))))
          }
        }}
        onScroll={event => {
          const element = event.currentTarget
          setActive(Math.round(element.scrollLeft / element.clientWidth))
        }}>
        {images.map((src, index) => <div className="gallery-slide" key={src} role="group" aria-label={`${index + 1} / ${images.length}`}>
          <img src={`${import.meta.env.BASE_URL}${src}`} alt={`${project.imageAlt} (${index + 1}/${images.length})`} loading="lazy" decoding="async" width="1179" height="2556" draggable={false} />
        </div>)}
      </div>
      <span className="gallery-count" aria-live="polite">{active + 1} / {images.length}</span>
      <button className="gallery-arrow previous" type="button" aria-label="이전 이미지" disabled={active === 0} onClick={() => goTo(active - 1)}>‹</button>
      <button className="gallery-arrow next" type="button" aria-label="다음 이미지" disabled={active === images.length - 1} onClick={() => goTo(active + 1)}>›</button>
    </div>
    <figcaption className="gallery-caption">
      <div className="gallery-dots" aria-label="이미지 선택">{images.map((src, index) => <button key={src} type="button" aria-label={`${index + 1}번 이미지 보기`} aria-current={index === active ? 'true' : undefined} onClick={() => goTo(index)} />)}</div>
      <span>옆으로 넘겨 화면을 둘러보세요</span>
    </figcaption>
  </figure>
}
