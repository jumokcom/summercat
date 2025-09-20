// 공통 유틸리티 함수들
// - cn: 클래스명 병합 함수 (clsx + tailwind-merge)
// - formatDate: 날짜 포맷팅 함수
// - formatRelativeTime: 상대적 시간 표시 함수
// - 기타 공통으로 사용되는 유틸리티 함수들

/**
 * 날짜를 포맷팅하는 함수
 * @param date - 포맷팅할 날짜
 * @param format - 포맷 옵션 ('short', 'long', 'relative')
 * @returns 포맷팅된 날짜 문자열
 */
export function formatDate(date: Date | string, format: 'short' | 'long' | 'relative' = 'short'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (format === 'relative') {
    return formatRelativeTime(dateObj)
  }
  
  const options: Intl.DateTimeFormatOptions = format === 'long' 
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short', day: 'numeric' }
  
  return dateObj.toLocaleDateString('ko-KR', options)
}

/**
 * 상대적 시간을 표시하는 함수
 * @param date - 기준 날짜
 * @returns 상대적 시간 문자열
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return '방금 전'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}일 전`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}개월 전`
  
  return `${Math.floor(diffInSeconds / 31536000)}년 전`
}

/**
 * 문자열을 URL에 안전한 형태로 변환하는 함수
 * @param str - 변환할 문자열
 * @returns URL 안전한 문자열
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * 배열을 청크 단위로 나누는 함수
 * @param array - 나눌 배열
 * @param size - 청크 크기
 * @returns 청크로 나뉜 배열
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

// 기본 export
const sharedUtils = {
  formatDate,
  formatRelativeTime,
  slugify,
  chunk
}

export default sharedUtils