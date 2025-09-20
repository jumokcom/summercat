import { Building } from '../hooks/useGameState'

export const createBuildings = (
  screenSize: { width: number; height: number },
  setShowSettings: (show: boolean) => void
): Building[] => [
  {
    id: 'portfolio',
    x: screenSize.width * 0.15,
    y: screenSize.height * 0.15,
    width: screenSize.width * 0.12,
    height: screenSize.height * 0.12,
    name: 'Portfolio House',
    icon: '🏠',
    href: '/portfolio',
    description: '개발자 포트폴리오와 프로젝트들을 확인할 수 있습니다.',
    progress: 60
  },
  {
    id: 'web2',
    x: screenSize.width * 0.45,
    y: screenSize.height * 0.12,
    width: screenSize.width * 0.12,
    height: screenSize.height * 0.12,
    name: 'Web2 Labs',
    icon: '🌐',
    href: '/web2',
    description: '전통적인 웹 기술과 서비스들을 탐구합니다.',
    progress: 0
  },
  {
    id: 'web3',
    x: screenSize.width * 0.7,
    y: screenSize.height * 0.25,
    width: screenSize.width * 0.12,
    height: screenSize.height * 0.12,
    name: 'Web3 Tower',
    icon: '⚡',
    href: '/web3',
    description: '블록체인과 분산 웹 기술을 연구합니다.',
    progress: 0
  },
  {
    id: 'settings',
    x: screenSize.width * 0.1,
    y: screenSize.height * 0.7,
    width: screenSize.width * 0.08,
    height: screenSize.height * 0.08,
    name: 'Settings Workshop',
    icon: '⚙️',
    href: '',
    description: '사이트 설정을 변경할 수 있습니다.',
    action: () => setShowSettings(true)
  },
  {
    id: 'theme',
    x: screenSize.width * 0.8,
    y: screenSize.height * 0.7,
    width: screenSize.width * 0.08,
    height: screenSize.height * 0.08,
    name: 'Theme Temple',
    icon: '🌓',
    href: '',
    description: '라이트 모드와 다크 모드를 전환합니다.',
    action: () => {
      document.documentElement.classList.toggle('dark')
      const isDark = document.documentElement.classList.contains('dark')
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }
  }
]
