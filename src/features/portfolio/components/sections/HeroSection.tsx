'use client'

import { Code2, Lightbulb, Rocket, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay: 1 }
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-center space-x-4 mb-8" variants={itemVariants}>
          <motion.div variants={iconVariants}>
            <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <Code2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </motion.div>
          <motion.div variants={iconVariants}>
            <Rocket className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          기획부터 배포까지,<br />
          <span className="text-blue-600 dark:text-blue-400">웹 개발의 모든 과정</span>을<br />
          책임집니다
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          빠른 프로토타이핑과 사용자 중심 개발로<br />
          아이디어를 현실로 만드는 만능 개발자입니다
        </motion.p>

        {/* 프로세스 시각화 */}
        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {[
            { step: '01', title: '기획', desc: '요구사항 분석', color: 'text-blue-600 dark:text-blue-400' },
            { step: '02', title: '디자인', desc: 'UI/UX 설계', color: 'text-green-600 dark:text-green-400' },
            { step: '03', title: '개발', desc: '빠른 구현', color: 'text-orange-600 dark:text-orange-400' },
            { step: '04', title: '배포', desc: '서비스 런칭', color: 'text-purple-600 dark:text-purple-400' },
          ].map((item) => (
            <motion.div 
              key={item.step}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-3xl font-bold ${item.color} mb-2`}>
                {item.step}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 스크롤 유도 화살표 */}
        <motion.div 
          className="mt-20 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="text-gray-400 dark:text-gray-500"
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="h-12 w-12" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
