// About 페이지 (/portfolio/about)
// - 개인 상세 프로필
// - 자기소개
// - 기술 스택 상세 정보
// - 경력 타임라인
// - 연락처 정보
// - 이력서 다운로드 링크

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-portfolio-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p className="text-portfolio-300">저에 대한 자세한 정보를 확인하세요.</p>
      </div>
    </div>
  )
}
