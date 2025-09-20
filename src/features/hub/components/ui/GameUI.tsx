'use client'

interface GameUIProps {
  isDarkMode: boolean
}

export default function GameUI({ isDarkMode }: GameUIProps) {
  return (
    <>
      {/* 타이틀 */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg text-center">
          Summer Cat World
        </h1>
        <p className="text-white text-center text-sm mt-1 opacity-90">
          Move with WASD/Arrow keys • Press E to interact
        </p>
      </div>

      {/* 하단 정보 */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'text-gray-200' : 'text-white'}`}>
        <div className="text-sm opacity-80">
          Developed by Summer Cat
        </div>
      </div>
    </>
  )
}
