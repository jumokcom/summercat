'use client'

import { Building } from '@/features/hub/hooks/useGameState'

interface BuildingComponentProps {
  building: Building
  isNear: boolean
  isDarkMode: boolean
}

export default function BuildingComponent({ building, isNear, isDarkMode }: BuildingComponentProps) {
  return (
    <div className="absolute">
      {/* 건물 그림자 */}
      <div
        className="absolute bg-black opacity-20 rounded-lg"
        style={{
          left: building.x + 5,
          top: building.y + 5,
          width: building.width,
          height: building.height
        }}
      />
      
      {/* 건물 본체 */}
      <div
        className={`
          absolute border-4 flex flex-col items-center justify-center rounded-lg shadow-xl
          ${isDarkMode 
            ? 'border-gray-600 bg-gradient-to-br from-gray-800 to-gray-700' 
            : 'border-gray-700 bg-gradient-to-br from-gray-100 to-gray-300'
          }
          ${isNear ? 'ring-4 ring-yellow-400 ring-opacity-80' : ''}
        `}
        style={{
          left: building.x,
          top: building.y,
          width: building.width,
          height: building.height
        }}
      >
        <div className="text-3xl mb-2">{building.icon}</div>
        <div className={`text-xs font-bold text-center px-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {building.name.split(' ')[0]}
        </div>
        {building.progress !== undefined && (
          <div className={`w-16 h-1 rounded-full mt-1 overflow-hidden ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}>
            <div 
              className={`h-full rounded-full transition-all duration-300 ${isDarkMode ? 'bg-green-400' : 'bg-green-500'}`}
              style={{ width: `${building.progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
