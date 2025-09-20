'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface SettingsModalProps {
  showSettings: boolean
  onClose: () => void
}

export default function SettingsModal({ showSettings, onClose }: SettingsModalProps) {
  return (
    <AnimatePresence>
      {showSettings && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              게임 설정과 사이트 옵션들을 관리할 수 있습니다.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
