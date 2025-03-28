import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en" className="min-w-[328px]">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <div className="flex justify-center w-full absolute bottom-2 left-0 right-0 min-w-[278px]">
          <footer
            style={{
              width: 'clamp(250px, 70%, 45ch)',
            }}
            className="text-sm max-sm:flex-wrap flex justify-between p-4 shadow-md border-1 
        border-gray-100 rounded-md gap-x-2"
          >
            <div>Copyright © 2024-2025 ZouAoran</div>
            <div className="whitespace-nowrap">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                首页
              </Link>{' '}
              |{' '}
              <Link
                href="https://github.com/aoran997"
                className="text-gray-500 hover:text-primary-400 transition-colors"
              >
                Github
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </Html>
  )
}
