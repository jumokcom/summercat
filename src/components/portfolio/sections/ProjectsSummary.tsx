'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// 임시 데이터 - 나중에 lib/data.ts에서 가져올 예정
const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: '기획부터 배포까지 완성한 전자상거래 플랫폼. 사용자 경험을 중심으로 설계하고 현대적인 기술로 구현했습니다.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    image: '/images/project1.jpg',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/username/ecommerce',
    role: '기획, 디자인, 개발, 배포'
  },
  {
    id: 2,
    title: '실시간 협업 도구',
    description: '팀 프로젝트를 위한 실시간 협업 플랫폼. WebSocket을 활용한 실시간 통신과 직관적인 UI로 팀워크를 향상시킵니다.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '/images/project2.jpg',
    liveUrl: 'https://collaboration-tool.vercel.app',
    githubUrl: 'https://github.com/username/collaboration',
    role: '기획, 개발, 배포'
  },
  {
    id: 3,
    title: 'AI 기반 학습 플랫폼',
    description: '개인화된 학습 경험을 제공하는 AI 플랫폼. 사용자 데이터를 분석하여 맞춤형 콘텐츠를 추천합니다.',
    tags: ['Next.js', 'Python', 'FastAPI', 'OpenAI'],
    image: '/images/project3.jpg',
    liveUrl: 'https://ai-learning.vercel.app',
    githubUrl: 'https://github.com/username/ai-learning',
    role: '기획, 개발'
  }
]

export default function ProjectsSummary() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* 섹션 헤더 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          주요 프로젝트
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          기획부터 배포까지 전 과정을 담당한 대표적인 프로젝트들입니다.
          각각 다른 도메인과 기술 스택으로 다양한 경험을 쌓았습니다.
        </p>
      </div>

      {/* 프로젝트 카드들 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              {/* 프로젝트 이미지 - 임시로 placeholder 사용 */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-lg flex items-center justify-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 opacity-20">
                  {project.id}
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>

                {/* 역할 표시 */}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">담당 역할:</span> {project.role}
                </div>
              </CardHeader>

              <CardContent>
                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 링크 버튼들 */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Link href={`/portfolio/projects/${project.id}`}>
                      상세보기
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 더 보기 버튼 */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button size="lg" variant="outline" asChild className="group border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
          <Link href="/portfolio/projects">
            모든 프로젝트 보기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
