import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from "@/context/AuthProvider"

import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Header />
        <div className="m-auto w-[90%]">
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </>
  )
}
