// Web3 기본 데이터
export const web3Config = {
  title: 'Web3 Tower',
  description: '블록체인과 탈중앙화 웹 기술을 연구하는 실험실',
  categories: [
    'DeFi (Decentralized Finance)',
    'NFT (Non-Fungible Tokens)', 
    'DAO (Decentralized Autonomous Organization)',
    'GameFi (Gaming + DeFi)',
    'Infrastructure & Tools'
  ]
}

// 지원 블록체인
export const supportedBlockchains = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    description: '스마트 컨트랙트의 선구자, 가장 큰 개발자 생태계',
    color: '#627EEA',
    features: ['Smart Contracts', 'DeFi', 'NFTs', 'DAOs']
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    description: '이더리움의 Layer 2 솔루션, 빠르고 저렴한 거래',
    color: '#8247E5',
    features: ['Low Gas Fees', 'Fast Transactions', 'Ethereum Compatible']
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    description: '고성능 블록체인, 초고속 거래 처리',
    color: '#00D4AA',
    features: ['High TPS', 'Low Latency', 'Proof of History']
  }
]

// 계획된 Web3 프로젝트들
export const plannedWeb3Projects = [
  {
    id: 1,
    title: 'DeFi Dashboard',
    description: '다양한 DeFi 프로토콜의 수익률과 통계를 한눈에 볼 수 있는 대시보드',
    blockchain: 'ethereum' as const,
    category: 'defi' as const,
    status: 'planned' as const,
    technologies: ['React', 'Web3.js', 'The Graph', 'Uniswap API']
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: '커뮤니티 중심의 NFT 마켓플레이스',
    blockchain: 'polygon' as const,
    category: 'nft' as const,
    status: 'planned' as const,
    technologies: ['Next.js', 'Solidity', 'IPFS', 'OpenSea API']
  },
  {
    id: 3,
    title: 'DAO Governance Tool',
    description: '탈중앙화 의사결정을 위한 거버넌스 도구',
    blockchain: 'ethereum' as const,
    category: 'dao' as const,
    status: 'planned' as const,
    technologies: ['React', 'Snapshot', 'Gnosis Safe', 'Aragon']
  }
]

// Web3 학습 로드맵
export const web3LearningPath = [
  {
    phase: 'Foundation',
    topics: ['Blockchain Basics', 'Cryptocurrency', 'Wallets', 'MetaMask']
  },
  {
    phase: 'Development',
    topics: ['Solidity', 'Smart Contracts', 'Web3.js/Ethers.js', 'Truffle/Hardhat']
  },
  {
    phase: 'Advanced',
    topics: ['DeFi Protocols', 'NFT Standards', 'Layer 2 Solutions', 'Cross-chain']
  }
]
