// Notes 페이지 (/portfolio/notes)
// - 개인 학습 노트 + 가벼운 블로그
// - 노트 목록 표시
// - 카테고리별 필터링
// - 검색 기능
// - 노트 상세 페이지 링크

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-portfolio-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Notes</h1>
        <p className="text-portfolio-300">개인 학습 노트와 블로그 포스트를 확인하세요.</p>
      </div>
    </div>
  )
}
