export interface Project {
  id: string
  number: string
  title: string
  subtitle?: string
  category: string
  status: string
  headline: string
  description: string
  stack: string[]
  roles: string[]
  url?: string
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'vibeholic', number: '01', title: 'Vibeholic', subtitle: '바이브홀릭', category: 'EDU', status: 'BETA',
    headline: '아이디어를 실행 가능한 바이브코딩 로드맵으로 바꾸는 코칭 서비스',
    description: '개발 경험이 없는 초심자가 바이브코딩으로 자신의 제품을 완성하도록 돕습니다. 사용자의 아이디어를 AI가 분석해 리소스 확인, 개발환경 추천, 구현 기능 리스트, 작업 프롬프트까지 한 흐름으로 설계합니다.',
    stack: ['Laravel', 'React', 'MySQL', 'AWS Lightsail', 'Claude API'], roles: ['Planning', 'Development', 'Curriculum Design', 'AI Flow Design'],
    url: 'https://vibeholic.app', image: 'assets/projects/vibeholic.png', imageAlt: '바이브홀릭 아이디어 입력과 프로젝트 대시보드 화면',
  },
  {
    id: 'movaco', number: '02', title: 'Movaco', subtitle: '모바코', category: 'EDU', status: 'LIVE',
    headline: 'AI 튜터와 함께 배우는 바이브코딩 학습 서비스',
    description: "모바코는 '모두의 바이브코딩'을 의미하는 학습 서비스입니다. 바이브홀릭이 실제 서비스를 만드는 데 초점을 둔다면, 모바코는 기초부터 앱 제작·배포까지 단계별 학습에 중점을 둡니다. 기본 커리큘럼은 DB에 저장하고 실시간 질문에만 AI 튜터가 대응하도록 설계했습니다.",
    stack: ['PHP', 'Nginx', 'AWS Lightsail'], roles: ['Planning', 'Development', 'Deployment', 'Learning Flow Design'],
    url: 'https://movaco.my', image: 'assets/projects/movaco.png', imageAlt: '모바코 로그인, 학습 대시보드와 강의 화면',
  },
  {
    id: 'last-machine-app', number: '03', title: 'LAST MACHINE', subtitle: 'Mobile Game', category: 'GAME', status: 'APP STORE',
    headline: '레트로 탱크 전투에 성장·미션 요소를 결합한 모바일 게임',
    description: '배틀시티에서 착안한 쉬운 조작감에 현대적인 RPG 성장 방식을 결합했습니다. 제작 전 과정을 AI Agent Pipeline으로 나누어 Planning, UI, Implementation, Verification, Content Generation을 반복했습니다.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Laravel', 'Tailwind CSS', 'Vite', 'EAS Build'], roles: ['Game Planning', 'Scenario', 'Game Design', 'Development', 'Deployment'],
    url: 'https://apps.apple.com/kr/app/last-machine/id6765675903', image: 'assets/projects/last-machine-app.png', imageAlt: '라스트머신 모바일 게임 전투 화면',
  },
  {
    id: 'last-machine-web', number: '04', title: 'LAST MACHINE', subtitle: 'Web', category: 'GAME', status: 'PLAYABLE',
    headline: '넓은 화면과 로그라이크 성장을 활용한 웹 게임 버전',
    description: '모바일 버전보다 넓은 스크린을 활용하고 캐릭터 성장·미션·스테이지 진행 방식을 개선했습니다. 별도 게임 엔진 없이 HTML Canvas 2D와 TypeScript로 직접 구현했습니다.',
    stack: ['TypeScript', 'React 19', 'HTML Canvas 2D', 'Vite 7', 'Vitest', 'ESLint', 'localStorage', 'Web Audio API'], roles: ['Game Planning', 'Scenario', 'Game Design', 'Development', 'Marketing', 'Deployment'],
    url: 'https://lastmachine.vibeholic.app/', image: 'assets/projects/last-machine-web.png', imageAlt: '라스트머신 웹 게임의 대형 전투 맵',
  },
  {
    id: 'actify', number: '05', title: 'Actify', category: 'TOOL', status: 'RELEASED',
    headline: '목표를 입력하면 AI가 실행 가능한 Todo List로 바꿔주는 앱',
    description: '어떤 목표를 어떻게 시작해야 할지 막막한 순간, AI가 실행 과정을 분해해 투두리스트를 생성하고 관리합니다. 목표 달성에 필요한 단계와 순서를 빠르게 구체화하도록 설계했습니다.',
    stack: ['React Native 0.81.5', 'Expo ~54.0.33'], roles: ['Planning', 'User Scenario', 'UI Design', 'Development', 'App Store Management'],
    url: 'https://apps.apple.com/kr/app/%EC%97%91%ED%8B%B0%ED%8C%8C%EC%9D%B4/id6771630802', image: 'assets/projects/actify.png', imageAlt: 'Actify 투두리스트와 목표 입력 앱 화면',
  },
  {
    id: 'wildfire-force', number: '06', title: '산불특공대', category: 'GAME', status: 'INTERNAL TEST',
    headline: '산불의 위력과 소방대원의 분투를 담은 타워디펜스 게임',
    description: '2025년 경상북도 의성 산불에서 영감을 받아 제작했습니다. 건조한 기후, 산악 환경, 강풍, 비화 등의 악조건을 게임 시스템에 녹여 일반 디펜스 게임과 차별화했습니다.',
    stack: ['React Native', 'Expo', 'React Native Skia', 'Canvas', 'react-i18next', 'Laravel', 'PHP 8.3'], roles: ['Game Planning', 'Scenario', 'Game Design', 'Development', 'Marketing', 'Deployment'],
    image: 'assets/projects/wildfire-force.png', imageAlt: '산불특공대 전투와 스테이지 선택 화면',
  },
]
