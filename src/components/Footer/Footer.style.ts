import styled from 'styled-components'
import { theme } from './../../styles/theme'

export const Container = styled.footer`
	display: flex;
	flex-direction: row;
	width: 100vw;
	align-items: center;
	justify-content: center;
	padding: 50px;
	border-top: 1px solid ${theme.colors.lightGrey};
`
