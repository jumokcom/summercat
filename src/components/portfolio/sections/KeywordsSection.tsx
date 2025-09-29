'use client'

import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Target, Users2 } from 'lucide-react'
import { motion } from 'framer-motion'

import { keywords } from '@/lib/data'
import type { KeywordIconName } from '@/lib/types'

const keywordIconMap: Record<KeywordIconName, LucideIcon> = {
  Zap,
  Target,
  Users2,
}

export default function KeywordsSection() {
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
          핵심 키워드
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          저를 가장 잘 표현하는 세 가지 키워드입니다.
          이 가치들을 바탕으로 개발하고 협업합니다.
        </p>
      </div>

      {/* 키워드 카드들 */}
      <div className="grid md:grid-cols-3 gap-6">
        {keywords.map((item, index) => {
          const IconComponent = keywordIconMap[item.iconName]
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
            >
              <Card className={`h-full bg-gradient-to-br ${item.bgGradient} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-6 text-center space-y-4">
                  {/* 아이콘 */}
                  <motion.div 
                    className={`mx-auto p-4 rounded-full ${item.color} w-fit`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </motion.div>

                  {/* 키워드 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.keyword}
                    </h3>
                    <Badge variant="outline" className="mb-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      #{item.keyword.replace(' ', '')}
                    </Badge>
                  </div>

                  {/* 설명 */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* 추가 메시지 */}
      <motion.div 
        className="text-center bg-gray-50 dark:bg-gray-800/30 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          이러한 가치들이 제 개발 철학의 기반이 되며,
          <br />
          매 프로젝트마다 이를 실천하며 성장해나가고 있습니다.
        </p>
      </motion.div>
    </motion.div>
  )
}
