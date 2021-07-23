import type { AppProps } from 'next/app'
import '../styles/globals.style.ts'
import GlobalStyle from '../styles/globals.style'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
