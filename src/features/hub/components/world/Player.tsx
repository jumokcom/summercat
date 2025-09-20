'use client'

import { motion } from 'framer-motion'
import { Position } from '@/features/hub/hooks/useGameState'

interface PlayerProps {
  position: Position
  direction: string
}

export default function Player({ position, direction }: PlayerProps) {
  const getPlayerChar = () => {
    switch(direction) {
      case 'up': return '⬆️'
      case 'down': return '⬇️' 
      case 'left': return '⬅️'
      case 'right': return '➡️'
      default: return '🧙‍♂️'
    }
  }

  return (
    <motion.div
      className="absolute z-20 text-2xl"
      style={{
        left: position.x - 12,
        top: position.y - 12
      }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {getPlayerChar()}
    </motion.div>
  )
}
