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
    const sectionElements = document.querySelectorAll('section[id]')
    const sectionIds = Array.from(sectionElements)
      .map((section) => section.getAttribute('id'))
      .filter(Boolean) as string[]

    const handleScroll = () => {
      if (isScrolling) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionElements.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'projects')
          setCurrentIndex(index)
        }
      })
    }

    const handleWheel = (event: WheelEvent) => {
      if (!sectionIds.length) return

      const direction = event.deltaY > 0 ? 1 : -1
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sectionIds.length - 1)

      if (nextIndex === currentIndex) return

      event.preventDefault()
      setIsScrolling(true)

      const nextSection = document.getElementById(sectionIds[nextIndex])
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionIds[nextIndex])
        setCurrentIndex(nextIndex)
      }

      setTimeout(() => {
        setIsScrolling(false)
      }, 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isScrolling, currentIndex])

  const scrollToSection = (sectionId: string) => {
    const sectionIndex = sections.findIndex((section) => section.id === sectionId)
    const element = document.getElementById(sectionId)

    if (element) {
      setIsScrolling(true)
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setCurrentIndex(sectionIndex >= 0 ? sectionIndex : 0)

      setTimeout(() => {
        setIsScrolling(false)
      }, 800)
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
