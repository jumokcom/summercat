import { Web2Project, Web2Technology } from './types'
import { plannedProjects, web2Technologies } from './data'

// 카테고리별 프로젝트 조회
export const getProjectsByCategory = (category: string): Web2Project[] => {
  return plannedProjects.filter(project => project.category === category)
}

// 기술별 프로젝트 조회
export const getProjectsByTechnology = (tech: string): Web2Project[] => {
  return plannedProjects.filter(project => 
    project.technologies.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  )
}

// 진행 상태별 프로젝트 조회
export const getProjectsByStatus = (status: string): Web2Project[] => {
  return plannedProjects.filter(project => project.status === status)
}

// 카테고리별 기술 조회
export const getTechnologiesByCategory = (category: string): Web2Technology[] => {
  return web2Technologies.filter(tech => tech.category === category)
}

// 프로젝트 검색
export const searchProjects = (query: string): Web2Project[] => {
  const lowercaseQuery = query.toLowerCase()
  return plannedProjects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  )
}

// 통계 조회
export const getWeb2Stats = () => {
  return {
    totalProjects: plannedProjects.length,
    completedProjects: 0, // 현재 완료된 프로젝트 없음
    inProgressProjects: 0, // 현재 진행 중인 프로젝트 없음
    plannedProjects: plannedProjects.length, // 모든 프로젝트가 계획 단계
    totalTechnologies: web2Technologies.length
  }
}
