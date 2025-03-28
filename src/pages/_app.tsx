import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MenuBox from '@/components/MenuBox'

export default function App(appProps: AppProps) {
  return (
    <div>
      <appProps.Component {...appProps.pageProps} />
      <MenuBox></MenuBox>
    </div>
  )
}
