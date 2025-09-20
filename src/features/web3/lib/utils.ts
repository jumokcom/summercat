import { Web3Project, Blockchain } from './types'
import { plannedWeb3Projects, supportedBlockchains } from './data'

// 블록체인별 프로젝트 조회
export const getProjectsByBlockchain = (blockchain: string): Web3Project[] => {
  return plannedWeb3Projects.filter(project => project.blockchain === blockchain)
}

// 카테고리별 프로젝트 조회
export const getProjectsByCategory = (category: string): Web3Project[] => {
  return plannedWeb3Projects.filter(project => project.category === category)
}

// 상태별 프로젝트 조회
export const getProjectsByStatus = (status: string): Web3Project[] => {
  return plannedWeb3Projects.filter(project => project.status === status)
}

// 블록체인 정보 조회
export const getBlockchainInfo = (name: string): Blockchain | undefined => {
  return supportedBlockchains.find(blockchain => 
    blockchain.name.toLowerCase() === name.toLowerCase()
  )
}

// 프로젝트 검색
export const searchWeb3Projects = (query: string): Web3Project[] => {
  const lowercaseQuery = query.toLowerCase()
  return plannedWeb3Projects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.blockchain.toLowerCase().includes(lowercaseQuery) ||
    project.category.toLowerCase().includes(lowercaseQuery)
  )
}

// Web3 통계
export const getWeb3Stats = () => {
  return {
    totalProjects: plannedWeb3Projects.length,
    completedProjects: 0, // 현재 완료된 프로젝트 없음
    inProgressProjects: 0, // 현재 진행 중인 프로젝트 없음
    plannedProjects: plannedWeb3Projects.length, // 모든 프로젝트가 계획 단계
    supportedChains: supportedBlockchains.length,
    defiProjects: plannedWeb3Projects.filter(p => p.category === 'defi').length,
    nftProjects: plannedWeb3Projects.filter(p => p.category === 'nft').length
  }
}

// 컨트랙트 주소 검증
export const isValidContractAddress = (address: string): boolean => {
  // 간단한 이더리움 주소 형식 검증
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

// Wei를 Ether로 변환
export const weiToEther = (wei: bigint): string => {
  return (Number(wei) / 10**18).toFixed(4)
}

// 트랜잭션 해시 단축
export const shortenTxHash = (hash: string): string => {
  if (hash.length < 10) return hash
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`
}

// 주소 단축
export const shortenAddress = (address: string): string => {
  if (address.length < 10) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
