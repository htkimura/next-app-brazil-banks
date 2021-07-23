import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div`
	min-height: 75vh;
	height: 75vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Main = styled.main`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* height: 100%; */
	h1 {
		margin: 0;
		line-height: 1.15;
		font-size: 4rem;
		text-align: center;
	}
	& > p {
		text-align: center;
		line-height: 1.5;
		font-size: 1.5rem;
	}
`
export const Card = styled.a`
	margin: 1rem;
	padding: 1.5rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid ${theme.colors.lightGrey};
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
	width: 45%;

	&:hover {
		text-decoration: none;
	}
	&:hover,
	&:focus,
	&:active {
		color: #0070f3;
		border-color: #0070f3;
	}
	h2 {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
	}
	p {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.5;
	}
`

export const Grid = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 800px;
	margin-top: 3rem;
`
