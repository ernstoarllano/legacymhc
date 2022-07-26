import '@fontsource/oxygen/300.css'
import '@fontsource/oxygen/400.css'
import '@fontsource/oxygen/700.css'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
