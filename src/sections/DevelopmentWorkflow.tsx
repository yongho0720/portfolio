import { SectionTitle } from '../components/SectionTitle'

const rows = [
  ['기획', 'API 명세 · 스키마 초안 · 컴포넌트 구조', '기능 범위 · 우선순위'],
  ['디자인', 'Tailwind 스타일 · 레이아웃 · 애니메이션', '비주얼 방향 승인'],
  ['구현', '코드 작성 · 리팩토링 · 파일 편집', '아키텍처 대변경 승인'],
  ['검증', 'PASS/FAIL 판정 · 버그 명세 · 재위임', '접근법 전환 결정'],
  ['콘텐츠', '레벨 맵 · DB 시드 · 텍스트 초안', '난이도 곡선 최종 조율'],
  ['배포', '빌드 · 환경 설정 · Nginx 초안', '접속 정보 입력 · 배포 승인'],
]

export function DevelopmentWorkflow() {
  return <section className="section dev-workflow" id="workflow">
    <SectionTitle eyebrow="04 / WORKFLOW" title="AI와 함께 일하는 방식" copy="반복 가능한 작업은 에이전트에게 넘기고, 제품 방향·우선순위·배포 판단만 사람이 담당하는 방식으로 개발 속도를 높였습니다." />
    <div className="workflow-table reveal" role="table" aria-label="AI 자율 처리와 사람 게이트 구분">
      <div className="workflow-row workflow-head" role="row"><b role="columnheader">구분</b><b role="columnheader">AI 자율 처리</b><b role="columnheader">사람 게이트</b></div>
      {rows.map(([type, ai, human]) => <div className="workflow-row" role="row" key={type}><strong role="cell">{type}</strong><span role="cell">{ai}</span><span role="cell">{human}</span></div>)}
    </div>
    <p className="workflow-principle reveal"><b>원칙:</b> 판단이 필요한 곳만 사람. 정답이 명확한 코드 작성·검증·시드 데이터 생성은 에이전트가 처음부터 끝까지 수행합니다.</p>
  </section>
}
