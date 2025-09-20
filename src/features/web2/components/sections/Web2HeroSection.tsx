'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Server, Globe } from 'lucide-react'

export default function Web2HeroSection() {
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-center space-x-4 mb-8" variants={itemVariants}>
          <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
          <Server className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <Globe className="h-8 w-8 text-orange-600 dark:text-orange-400" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          Web2 Labs
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          전통적인 웹 기술과 현대적인 도구들을 활용한<br />
          다양한 실험과 프로젝트들을 탐구합니다
        </motion.p>

        <motion.div 
          className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium"
          variants={itemVariants}
        >
          🚧 곧 공개될 예정입니다
        </motion.div>
      </motion.div>
    </div>
  )
}
