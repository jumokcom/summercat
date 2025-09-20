// Web3 기본 타입 정의
export interface Web3Project {
  id: number
  title: string
  description: string
  blockchain: 'ethereum' | 'polygon' | 'solana' | 'other'
  category: 'defi' | 'nft' | 'dao' | 'gamefi' | 'infrastructure'
  status: 'planned' | 'in-progress' | 'completed'
  technologies: string[]
  contractAddress?: string
  githubUrl?: string
  demoUrl?: string
}

export interface Blockchain {
  name: string
  symbol: string
  description: string
  color: string
  features: string[]
}

export interface Web3Tutorial {
  id: number
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  blockchain: string
  estimatedTime: number
  prerequisites: string[]
  content?: string
}

export interface SmartContract {
  name: string
  address: string
  blockchain: string
  abi?: unknown[]
  functions: string[]
}
