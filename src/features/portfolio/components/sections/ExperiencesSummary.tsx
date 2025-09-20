'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { Badge } from '@/shared/components/ui/badge'
import { 
  Users, 
  Heart, 
  Trophy, 
  ArrowRight,
  Calendar,
  MapPin,
  Code2
} from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// 임시 데이터 - 나중에 lib/data.ts에서 가져올 예정
const featuredExperiences = [
  {
    id: 1,
    category: '학생회 활동',
    title: '컴퓨터공학과 학생회장',
    organization: '순천향대학교',
    period: '2023.03 - 2024.02',
    location: '아산, 충남',
    description: '학과 행사 기획 및 운영, 학생들의 목소리를 대변하여 학과 발전에 기여했습니다. 프로젝트 관리와 팀 리더십 경험을 쌓았습니다.',
    impact: '학과 만족도 20% 향상, 15개 행사 성공적 진행',
    skills: ['리더십', '기획', '소통', '프로젝트 관리'],
    icon: Users,
    color: 'text-blue-600 bg-blue-100 dark:bg-blue-950 dark:text-blue-400'
  },
  {
    id: 2,
    category: '봉사활동',
    title: '코딩 교육 봉사',
    organization: '지역아동센터',
    period: '2022.06 - 2023.12',
    location: '천안, 충남',
    description: '초등학생들에게 스크래치 프로그래밍을 가르치며 코딩의 즐거움을 전파했습니다. 복잡한 개념을 쉽게 설명하는 능력을 기를 수 있었습니다.',
    impact: '30명의 학생들이 기초 프로그래밍 습득',
    skills: ['교육', '소통', '인내심', '창의적 문제해결'],
    icon: Heart,
    color: 'text-red-600 bg-red-100 dark:bg-red-950 dark:text-red-400'
  },
  {
    id: 3,
    category: '공모전',
    title: '대학생 창업 경진대회 우수상',
    organization: '교육부',
    period: '2023.09',
    location: '서울',
    description: '대학생을 위한 스터디 매칭 플랫폼을 기획하고 프로토타입을 개발하여 우수상을 수상했습니다. 팀워크와 창의적 사고를 발휘한 경험입니다.',
    impact: '전국 200팀 중 상위 10팀 선정',
    skills: ['창업', '기획', '팀워크', '프레젠테이션'],
    icon: Trophy,
    color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-950 dark:text-yellow-400'
  },
  {
    id: 4,
    category: '인턴십',
    title: '프론트엔드 개발 인턴',
    organization: '테크 스타트업',
    period: '2024.01 - 2024.06',
    location: '서울',
    description: 'React와 TypeScript를 활용한 웹 애플리케이션 개발에 참여했습니다. 실제 서비스에 기여하며 실무 경험을 쌓았습니다.',
    impact: '3개 기능 개발 완료, 코드 리뷰 프로세스 개선',
    skills: ['React', 'TypeScript', '실무', '협업', '코드리뷰'],
    icon: Code2,
    color: 'text-green-600 bg-green-100 dark:bg-green-950 dark:text-green-400'
  },
  {
    id: 5,
    category: '해커톤',
    title: '대학생 해커톤 대상',
    organization: '한국IT기업협회',
    period: '2023.11',
    location: '부산',
    description: '24시간 해커톤에서 AI를 활용한 스마트 도시 솔루션을 개발했습니다. 창의적 아이디어와 빠른 프로토타이핑으로 대상을 수상했습니다.',
    impact: '전국 50팀 중 1위, 상금 500만원',
    skills: ['AI', '프로토타이핑', '창의성', '팀워크', '발표'],
    icon: Trophy,
    color: 'text-purple-600 bg-purple-100 dark:bg-purple-950 dark:text-purple-400'
  }
]

export default function ExperiencesSummary() {
  const [activeIndex, setActiveIndex] = useState(1) // 중간 카드부터 시작
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCardClick = (index: number) => {
    if (isAnimating || index === activeIndex) return
    
    setIsAnimating(true)
    setActiveIndex(index)
    
    // 애니메이션 완료 후 상태 리셋
    setTimeout(() => {
      setIsAnimating(false)
    }, 600) // 애니메이션 duration과 맞춤
  }


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
          주요 경험
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          개발 외적인 다양한 활동을 통해 리더십, 협업, 소통 능력을 키웠습니다.
          이러한 경험들이 더 나은 개발자로 성장하는 밑거름이 되고 있습니다.
        </p>
      </div>

      {/* 3D 카드 스택 컨테이너 */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">

        {/* 카드들 */}
        <AnimatePresence>
          {featuredExperiences.map((experience, index) => {
            const IconComponent = experience.icon
            const totalCards = featuredExperiences.length
            
            // 활성 카드로부터의 거리 계산 (순환 고려)
            let distance = (index - activeIndex + totalCards) % totalCards
            if (distance > totalCards / 2) {
              distance -= totalCards
            }
            
            // 카드 위치 계산 - 항상 위아래로 2개씩 보이도록
            let cardStyle = {}
            
            if (distance === 0) {
              // 활성 카드
              cardStyle = {
                zIndex: 30,
                scale: 1,
                y: 0,
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }
            } else if (distance === -1) {
              // 바로 위 카드
              cardStyle = {
                zIndex: 25,
                scale: 0.9,
                y: -100,
                opacity: 0.5,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }
            } else if (distance === 1) {
              // 바로 아래 카드
              cardStyle = {
                zIndex: 25,
                scale: 0.9,
                y: 100,
                opacity: 0.5,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }
            } else if (distance === -2) {
              // 위에서 두 번째 카드
              cardStyle = {
                zIndex: 20,
                scale: 0.8,
                y: -180,
                opacity: 0.25,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }
            } else if (distance === 2) {
              // 아래에서 두 번째 카드
              cardStyle = {
                zIndex: 20,
                scale: 0.8,
                y: 180,
                opacity: 0.25,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }
            } else {
              // 더 멀리 있는 카드들
              cardStyle = {
                zIndex: 10,
                scale: 0.6,
                y: distance < 0 ? -250 : 250,
                opacity: 0.1,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
              }
            }

            const isActive = distance === 0

            return (
              <motion.div
                key={experience.id}
                className="absolute w-full max-w-7xl"
                initial={false}
                animate={cardStyle}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.2,
                  ease: "easeInOut"
                }}
                whileHover={isActive ? { scale: 1.02 } : {}}
                onClick={() => handleCardClick(index)}
                style={{
                  cursor: isActive ? 'default' : 'pointer'
                }}
              >
                <Card className={`transition-all duration-300 group bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 ${
                  isActive 
                    ? 'shadow-2xl ring-2 ring-blue-500/20' 
                    : 'shadow-lg hover:shadow-xl'
                }`}>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-10 gap-3 h-full">
                      {/* 1/10: 아이콘 */}
                      <div className="flex items-center justify-center">
                        <div className={`p-3 rounded-lg ${experience.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      {/* 1/10: 카테고리 + 제목 */}
                      <div className="flex flex-col justify-center space-y-3">
                        <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-fit">
                          {experience.category}
                        </Badge>
                        <CardTitle className={`text-sm font-bold transition-colors text-gray-900 dark:text-white ${
                          isActive 
                            ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' 
                            : ''
                        }`}>
                          {experience.title}
                        </CardTitle>
                      </div>

                      {/* 1/10: 기관명 */}
                      <div className="flex items-center pl-2">
                        <CardDescription className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {experience.organization}
                        </CardDescription>
                      </div>

                      {/* 1/10: 기간과 위치 */}
                      <div className="flex flex-col justify-center space-y-1">
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <MapPin className="h-3 w-3" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* 2/10: 설명 */}
                      <div className="col-span-2 flex items-center">
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                          {experience.description}
                        </p>
                      </div>

                      {/* 2/10: 성과 */}
                      <div className="col-span-2 flex items-center">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 w-full">
                          <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                            성과
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">
                            {experience.impact}
                          </div>
                        </div>
                      </div>

                      {/* 2/10: 스킬 */}
                      <div className="col-span-2 flex items-center">
                        <div className="flex flex-wrap gap-1 w-full">
                          {experience.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>

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
          <Link href="/portfolio/experiences">
            모든 경험 보기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
