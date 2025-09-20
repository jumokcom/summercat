// Projects 목록 페이지 (/portfolio/projects)
// - 프로젝트 그리드 레이아웃
// - 프로젝트 카드들 표시
// - 기술 스택별 필터링
// - 상태별 필터링 (완성/개발중/예정)
// - 프로젝트 상세 페이지 링크

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-portfolio-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-portfolio-300">제가 작업한 프로젝트들을 확인하세요.</p>
      </div>
    </div>
  )
}
