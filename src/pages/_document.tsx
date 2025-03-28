import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <footer className="text-sm max-sm:flex-wrap absolute left-1/2 -translate-x-1/2 bottom-2 flex justify-between p-4 shadow-md border-1 border-gray-100 rounded-md gap-x-8">
          <div>Copyright © 2024-2025 ZouAoran</div>
          <div>
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
      </body>
    </Html>
  )
}
