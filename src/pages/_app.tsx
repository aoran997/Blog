import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App(appProps: AppProps) {
  return (
    <div className="x">
      <appProps.Component {...appProps.pageProps} />
    </div>
  )
}
