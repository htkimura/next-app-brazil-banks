import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import * as L from './Layout.style'

const Layout = ({ children }) => {
	return (
		<L.Container>
			<Header />
			{children}
			<Footer />
		</L.Container>
	)
}

export default Layout
