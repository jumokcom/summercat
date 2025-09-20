'use client'

import { motion } from 'framer-motion'
import { Building } from '@/features/hub/hooks/useGameState'

interface InteractionPromptProps {
  building: Building
}

export default function InteractionPrompt({ building }: InteractionPromptProps) {
  return (
    <motion.div
      className="absolute z-25 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-xl border-2 border-yellow-400"
      style={{
        left: building.x + building.width/2 - 80,
        top: building.y - 80
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-sm font-bold text-gray-900 dark:text-white text-center">
        {building.name}
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-300 text-center mt-1">
        {building.description}
      </div>
      <div className="text-xs text-yellow-600 dark:text-yellow-400 text-center mt-2 font-semibold">
        Press E to Enter
      </div>
    </motion.div>
  )
}
