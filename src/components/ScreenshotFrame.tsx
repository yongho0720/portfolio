export function ScreenshotFrame({ src, alt, phone = false }: { src: string; alt: string; phone?: boolean }) {
  return <figure className={`screenshot-frame ${phone ? 'phone' : ''}`}>
    <div className="frame-bar"><i /><i /><i /><span>project.preview</span></div>
    <div className="image-stage"><img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} loading="lazy" /></div>
  </figure>
}
