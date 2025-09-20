import {
  HeroSection,
  ProjectsSummary,
  WorkFlow,
  ExperiencesSummary,
  KeywordsSection,
  NotesCounter,
  SectionNavigation,
  PortfolioFooter
} from '@/features/portfolio'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-portfolio-900 text-white">
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-900 to-portfolio-800">
        <HeroSection />
      </section>

      {/* Main Content Sections */}
      <div className="space-y-0">
        {/* 주요 프로젝트 3개 요약 */}
        <section id="projects" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSummary />
          </div>
        </section>

        {/* 개발 플로우 */}
        <section id="work-flow" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WorkFlow />
          </div>
        </section>

        {/* 주요 활동 요약 (3개) */}
        <section id="experiences" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ExperiencesSummary />
          </div>
        </section>

        {/* 핵심 키워드 3개 */}
        <section id="keywords" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <KeywordsSection />
          </div>
        </section>

        {/* Notes 수 표시 + Footer */}
        <section id="notes" className="h-screen flex flex-col bg-white/5 backdrop-blur-sm border border-white/10">
          {/* Notes Counter 영역 - 상단에 배치 */}
          <div className="flex-1 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <NotesCounter />
            </div>
          </div>
          
          {/* Footer 영역 - 하단에 고정 */}
          <div className="flex-shrink-0">
            <PortfolioFooter />
          </div>
        </section>
      </div>

      {/* 섹션 네비게이션 */}
      <SectionNavigation />
    </div>
  )
}
