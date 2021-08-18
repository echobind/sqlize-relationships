import type { AppProps } from 'next/app'
import { GraphqlProvider } from '../graphql'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphqlProvider>
      <Component {...pageProps} />
    </GraphqlProvider>
  )
}
export default MyApp
