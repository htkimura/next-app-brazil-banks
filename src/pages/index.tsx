import Link from 'next/link'
import * as H from './Home.style'
import Layout from '../components/Layout'
import { BANKS } from './routes'

export default function Home() {
	return (
		<Layout>
			<H.Container>
				<H.Main>
					<h1>
						Uso prático da API{' '}
						<a href="https://brasilapi.com.br/" target="_blank" rel="noopener noreferrer">
							BrasilAPI
						</a>
					</h1>

					<p>
						Este é um projeto desenvolvido em Next.js para explorar as funcionalidades da
						tecnologia, consumindo uma API externa.
					</p>

					<H.Grid>
						<Link href={BANKS} passHref>
							<H.Card href="https://nextjs.org/docs">
								<h2>Bancos &rarr;</h2>
								<p>Encontre todos os bancos do Brasil.</p>
							</H.Card>
						</Link>
					</H.Grid>
				</H.Main>
			</H.Container>
		</Layout>
	)
}
