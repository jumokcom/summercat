'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', label: '히어로' },
  { id: 'projects', label: '주요 프로젝트' },
  { id: 'work-flow', label: '개발 플로우' },
  { id: 'experiences', label: '주요 경험' },
  { id: 'keywords', label: '핵심 키워드' },
  { id: 'notes', label: '노트 & 블로그' },
]

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolling, setIsScrolling] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const sectionIds = Array.from(sections).map(section => section.getAttribute('id')).filter(Boolean) as string[]

    const handleScroll = () => {
      if (isScrolling) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'projects')
          setCurrentIndex(index)
        }
      })
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling) return

      setIsScrolling(true)

      if (e.deltaY > 0 && currentIndex < sectionIds.length - 1) {
        // 아래로 스크롤
        const nextIndex = currentIndex + 1
        const nextSection = document.getElementById(sectionIds[nextIndex])
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sectionIds[nextIndex])
          setCurrentIndex(nextIndex)
        }
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // 위로 스크롤
        const prevIndex = currentIndex - 1
        const prevSection = document.getElementById(sectionIds[prevIndex])
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sectionIds[prevIndex])
          setCurrentIndex(prevIndex)
        }
      }

      setTimeout(() => setIsScrolling(false), 0)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('wheel', handleWheel, { passive: false })
    handleScroll() // 초기 실행

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isScrolling, currentIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-16 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="space-y-6">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="block"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id ? 'bg-white' : 'bg-white/40'
              }`}
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
