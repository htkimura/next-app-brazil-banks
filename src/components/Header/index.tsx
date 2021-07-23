import React from 'react'
import Image from 'next/image'
import * as H from './Header.style'
import logo from '../../../public/logo.svg'
import Link from 'next/link'
import { HOME } from '../../pages/routes'

const Header = () => {
	return (
		<H.Container>
			<Link href={HOME} passHref>
				<H.Logo>
					<Image src={logo} alt="Brasil API Logo" />
					&nbsp;
					<span className="brasil">Brasil</span>
					&nbsp;
					<span className="banks">Banks</span>
				</H.Logo>
			</Link>
		</H.Container>
	)
}

export default Header
