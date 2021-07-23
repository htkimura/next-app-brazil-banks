import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.style.ts'
import GlobalStyle from '../styles/globals.style'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Brasil Banks</title>
				<meta
					name="description"
					content="Uma aplicação criada em Next.js para praticar o desenvolvimento nesta tecnologia. Capaz de adquirir informações referentes a bancos do Brasil vindas da BrasilAPI, uma API open-source brasileira."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
