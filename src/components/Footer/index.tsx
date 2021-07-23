import React from 'react'
import * as F from './Footer.style'

const Footer = () => {
	return (
		<F.Container>
			<span>
				Feito com 💖 por{' '}
				<a href="http://github.com/htkimura" target="_blank" rel="noopener noreferrer">
					Henry Kimura
				</a>
			</span>
		</F.Container>
	)
}

export default Footer
