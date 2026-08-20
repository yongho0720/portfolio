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
    id: 'vibeholic', number: '01', title: '바이브홀릭', category: 'EDU', status: '베타 운영중',
    headline: '아이디어를 실행 가능한 바이브코딩 로드맵으로 바꾸는 코칭 서비스',
    description: '개발 경험이 없는 초심자가 바이브코딩으로 자신의 제품을 완성하도록 돕습니다. 사용자의 아이디어를 AI가 분석해 리소스 확인, 개발환경 추천, 구현 기능 리스트, 작업 프롬프트까지 한 흐름으로 설계합니다.',
    stack: ['Laravel', 'React', 'MySQL', 'AWS Lightsail', 'Claude API'], roles: ['기획', '개발', '커리큘럼 설계'],
    url: 'https://vibeholic.app', image: 'assets/projects/vibeholic.png', imageAlt: '바이브홀릭 아이디어 입력과 프로젝트 대시보드 화면',
  },
  {
    id: 'movaco', number: '02', title: '모바코', category: 'EDU', status: '운영중',
    headline: 'AI 튜터와 함께 배우는 바이브코딩 학습 서비스',
    description: '모바코는 모두의 바이브코딩을 의미하는 학습 서비스입니다. 바이브홀릭이 실제 서비스를 만드는 데 초점을 둔다면, 모바코는 기초부터 앱 제작·배포까지 단계별 학습에 중점을 둡니다. 토큰활용 최적화를 위해 기본 커리큘럼은 DB화하고, 실시간 질문에 AI 튜터가 대응하도록 설계했습니다.',
    stack: ['PHP', 'Nginx', 'AWS Lightsail'], roles: ['기획', '개발', '배포', '학습 흐름 설계'],
    url: 'https://movaco.my', image: 'assets/projects/movaco.png', imageAlt: '모바코 로그인, 학습 대시보드와 강의 화면',
  },
  {
    id: 'last-machine-app', number: '03', title: '라스트머신', subtitle: '모바일 게임 앱', category: 'GAME', status: 'App Store 출시',
    headline: '레트로 탱크 전투에 성장·미션 요소를 결합한 모바일 게임',
    description: '라스트 머신은 레트로게임 배틀시티에서 착안한 쉬운 조작감에 현대적인 롤플레잉 성장 방식을 혼합했습니다. 게임 제작 전 과정을 AI 에이전트 파이프라인으로 분리해 기획, UI, 구현, 검증, 콘텐츠 생성을 반복했습니다.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Laravel', 'Tailwind CSS', 'Vite', 'EAS Build'], roles: ['게임기획', '시나리오 설계', '게임 개발', '배포'],
    url: 'https://apps.apple.com/kr/app/last-machine/id6765675903', image: 'assets/projects/last-machine-app.png', imageAlt: '라스트머신 모바일 게임 전투 화면',
  },
  {
    id: 'last-machine-web', number: '04', title: '라스트머신', subtitle: '웹', category: 'GAME', status: '플레이 가능',
    headline: '넓은 화면과 로그라이크 성장을 활용한 웹 게임 버전',
    description: '모바일 앱 버전보다 넓은 스크린을 활용하고, 캐릭터 성장·미션·스테이지 진행 방식을 개선했습니다. 별도 게임 엔진 없이 HTML Canvas 2D와 TypeScript로 자체 구현했습니다.',
    stack: ['TypeScript', 'React 19', 'HTML Canvas 2D', 'Vite 7', 'Vitest', 'ESLint', 'localStorage'], roles: ['게임기획', '시나리오 설계', '게임 개발', '마케팅', '배포'],
    url: 'https://lastmachine.vibeholic.app/', image: 'assets/projects/last-machine-web.png', imageAlt: '라스트머신 웹 게임의 대형 전투 맵',
  },
  {
    id: 'actify', number: '05', title: 'Actify', category: 'TOOL', status: '출시',
    headline: '목표를 입력하면 AI가 실행 가능한 투두리스트로 설계해주는 서비스',
    description: '어떤 목표를 어떻게 시작해야 할지 막막한 순간, AI가 실행 과정을 분해해 투두리스트를 생성하고 관리합니다. 목표 달성에 필요한 단계와 순서를 빠르게 구체화하도록 설계했습니다.',
    stack: ['React Native 0.81.5', 'Expo ~54.0.33'], roles: ['기획', '유저 시나리오 설계', '화면 설계', '개발', '앱스토어 관리'],
    url: 'https://apps.apple.com/kr/app/%EC%97%91%ED%8B%B0%ED%8C%8C%EC%9D%B4/id6771630802', image: 'assets/projects/actify.png', imageAlt: 'Actify 투두리스트와 목표 입력 앱 화면',
  },
  {
    id: 'wildfire-force', number: '06', title: '산불특공대', category: 'GAME', status: '내부테스트 중',
    headline: '산불의 위력과 소방대원의 분투를 담은 타워디펜스 게임',
    description: '2025년 경상북도 의성 산불에서 영감을 받아 만든 게임입니다. 건조한 기후, 산악 환경, 강풍, 비화 등의 악조건을 게임 시스템에 녹여 일반 디펜스 게임과 차별화했습니다.',
    stack: ['React Native', 'Expo', 'React Native Skia', 'Canvas', 'react-i18next', 'Laravel', 'PHP 8.3'], roles: ['게임기획', '시나리오 설계', '게임 개발', '마케팅', '배포'],
    image: 'assets/projects/wildfire-force.png', imageAlt: '산불특공대 전투와 스테이지 선택 화면',
  },
]
