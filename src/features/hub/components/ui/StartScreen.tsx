'use client'

import { motion } from 'framer-motion'

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-20 bg-black bg-opacity-70">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Summer Cat World
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          SummerCat의 창의적인 웹 세계에서 다양한 기술과 서비스를 탐험하고 발견해보세요
        </p>
        
        <motion.div
          className="inline-block text-2xl font-bold text-yellow-400 cursor-pointer"
          animate={{
            opacity: [1, 0.3, 1],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onClick={onStart}
        >
          PRESS SPACE TO START
        </motion.div>
      </motion.div>
    </div>
  )
}
