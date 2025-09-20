'use client'

// import { Card, CardContent } from '@/shared/components/ui/card'
// import { Button } from '@/shared/components/ui/button'
// import { Badge } from '@/shared/components/ui/badge'
// import { 
//   FileText, 
//   ArrowRight, 
//   Calendar,
//   Tag,
//   TrendingUp
// } from 'lucide-react'
// import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// 기술 태그 데이터 - 실제로는 API나 데이터베이스에서 가져올 예정
const techTags = [
  { name: 'TypeScript', count: 15, color: 'from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40' },
  { name: 'React', count: 12, color: 'from-cyan-100 to-cyan-200 dark:from-cyan-900/40 dark:to-cyan-800/40' },
  { name: 'Next.js', count: 10, color: 'from-gray-100 to-gray-200 dark:from-gray-900/40 dark:to-gray-800/40' },
  { name: 'TailwindCSS', count: 8, color: 'from-teal-100 to-teal-200 dark:from-teal-900/40 dark:to-teal-800/40' },
  { name: 'Node.js', count: 6, color: 'from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40' },
  { name: 'Supabase', count: 4, color: 'from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40' },
  { name: 'Prisma', count: 3, color: 'from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40' },
  { name: 'Vercel', count: 2, color: 'from-violet-100 to-violet-200 dark:from-violet-900/40 dark:to-violet-800/40' }
]

export default function NotesCounter() {
  // const [displayCount, setDisplayCount] = useState(0)
  const [tagPositions, setTagPositions] = useState<{ x: number; y: number }[]>([])
  const [isClient, setIsClient] = useState(false)

  // 클라이언트 사이드에서만 실행
  useEffect(() => {
    setIsClient(true)
    
    // 동적 워드클라우드 배치 함수
    const generateWordCloudPositions = (tags: { count: number }[]) => {
      const positions: { x: number; y: number }[] = []
      const usedPositions = new Set<string>()
      
      // 태그를 개수 순으로 정렬 (큰 것부터)
      const sortedTags = [...tags].sort((a, b) => b.count - a.count)
      
      sortedTags.forEach((tag, index) => {
        let attempts = 0
        let position: { x: number; y: number }
        
        do {
          if (index === 0) {
            // 첫 번째 태그는 중앙에 배치
            position = { x: 50, y: 50 }
          } else {
            // 나머지는 중앙에서 원형으로 배치하되, 겹치지 않도록 조정
            const angle = (index * 360) / sortedTags.length + (Math.random() - 0.5) * 30
            const radius = 25 + (index * 5) + Math.random() * 10
            
            const x = 50 + radius * Math.cos(angle * Math.PI / 180)
            const y = 50 + radius * Math.sin(angle * Math.PI / 180)
            
            position = { 
              x: Math.max(15, Math.min(85, x)), 
              y: Math.max(15, Math.min(85, y)) 
            }
          }
          
          attempts++
        } while (usedPositions.has(`${position.x},${position.y}`) && attempts < 50)
        
        usedPositions.add(`${position.x},${position.y}`)
        positions.push(position)
      })
      
      return positions
    }

    // 태그를 개수 순으로 정렬하고 위치 계산
    const sortedTags = [...techTags].sort((a, b) => b.count - a.count)
    const positions = generateWordCloudPositions(sortedTags)
    setTagPositions(positions)
  }, [])

  // 총 태그 수 계산
  // const totalTagCount = techTags.reduce((sum, tag) => sum + tag.count, 0)

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
          기술 태그 워드클라우드
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          노트에서 사용한 기술들의 사용 빈도에 따라 크기가 달라집니다.
          자주 사용하는 기술일수록 더 크게 표시됩니다.
        </p>
      </div>

      <div className="flex justify-center">
        {/* 카테고리별 분포만 표시 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          {/* 동적 기술 태그 워드클라우드 */}
          <div className="relative h-full min-h-[500px] flex items-center justify-center overflow-hidden">
            {isClient && tagPositions.length > 0 && (() => {
              const sortedTags = [...techTags].sort((a, b) => b.count - a.count)
              
              return sortedTags.map((tag, index) => {
                // 개수에 따른 크기 계산 (최소 0.8, 최대 2.5)
                const maxCount = Math.max(...sortedTags.map(t => t.count))
                const minCount = Math.min(...sortedTags.map(t => t.count))
                const sizeRatio = (tag.count - minCount) / (maxCount - minCount)
                const scale = 0.8 + (sizeRatio * 1.7) // 0.8 ~ 2.5
                
                // 미리 계산된 위치 사용
                const position = tagPositions[index]
                
                return (
                  <motion.div
                    key={tag.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: scale }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${position.x}%`,
                      top: `${position.y}%`
                    }}
                  >
                    <div className={`bg-gradient-to-br ${tag.color} rounded-full border-2 border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer group flex items-center justify-center`}
                         style={{ 
                           width: `${60 + (tag.count * 4)}px`, 
                           height: `${60 + (tag.count * 4)}px`,
                           minWidth: '60px',
                           minHeight: '60px'
                         }}>
                      <div className="text-center px-2">
                        <div className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                             style={{ fontSize: `${Math.max(10, tag.count * 1.5)}px` }}>
                          {tag.count}
                        </div>
                        <div className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                          {tag.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            })()}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
