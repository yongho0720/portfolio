export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-title reveal">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
}
