import Link from 'next/link'
import { Github, Mail } from 'lucide-react'

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-portfolio-700 bg-portfolio-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* 저작권 정보 */}
          <div className="text-sm text-portfolio-300">
            © {currentYear} Summer Cat. All rights reserved.
          </div>

          {/* 소셜 링크 */}
          <div className="flex items-center space-x-6 text-sm text-portfolio-400">
            {/* GitHub 링크 */}
            <Link 
              href="https://github.com/summercat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-portfolio-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>

            {/* 이메일 링크 */}
            <Link 
              href="mailto:summercat@example.com"
              className="flex items-center space-x-2 hover:text-portfolio-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>summercat@example.com</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
