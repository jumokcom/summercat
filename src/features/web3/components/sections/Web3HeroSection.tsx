'use client'

import { motion } from 'framer-motion'
import { Zap, Coins, Shield, Network } from 'lucide-react'

export default function Web3HeroSection() {
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
          <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          <Coins className="h-8 w-8 text-green-600 dark:text-green-400" />
          <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <Network className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          Web3 Tower
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          블록체인, DeFi, NFT 등<br />
          탈중앙화 웹 기술의 미래를 탐구합니다
        </motion.p>

        <motion.div 
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium"
          variants={itemVariants}
        >
          <Zap className="h-5 w-5" />
          <span>🚧 개발 예정</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
