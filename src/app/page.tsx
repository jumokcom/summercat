import {
  PortfolioHeader,
  HeroSection,
  ProjectsSummary,
  WorkFlow,
  ExperiencesSummary,
  KeywordsSection,
  NotesCounter,
  SectionNavigation,
  PortfolioFooter
} from '@/components/portfolio'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-portfolio-900 text-white">
      <PortfolioHeader />

      <main className="space-y-0">
        <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-900 to-portfolio-800">
          <HeroSection />
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSummary />
          </div>
        </section>

        <section id="work-flow" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WorkFlow />
          </div>
        </section>

        <section id="experiences" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ExperiencesSummary />
          </div>
        </section>

        <section id="keywords" className="h-screen flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <KeywordsSection />
          </div>
        </section>

        <section id="notes" className="h-screen flex flex-col bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex-1 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <NotesCounter />
            </div>
          </div>

          <div className="flex-shrink-0">
            <PortfolioFooter />
          </div>
        </section>
      </main>

      <SectionNavigation />
    </div>
  )
}