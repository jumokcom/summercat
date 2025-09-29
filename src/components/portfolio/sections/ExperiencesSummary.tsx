'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Calendar, MapPin, Users, Heart, Trophy, Code2 } from 'lucide-react'
import Link from 'next/link'
import { experiences } from '@/lib/data'
import type { ExperienceIconName } from '@/lib/types'

const experienceIconMap: Record<ExperienceIconName, LucideIcon> = {
  Users,
  Heart,
  Trophy,
  Code2,
}

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
          {experiences.map((experience, index) => {
            const totalCards = experiences.length
            const IconComponent = experienceIconMap[experience.iconName]
            
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
                          {IconComponent ? <IconComponent className="h-5 w-5" /> : null}
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
