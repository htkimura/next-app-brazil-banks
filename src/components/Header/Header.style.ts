import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.header`
	display: flex;
	flex-direction: row;
	padding: 20px 50px;
	border-bottom: 1px solid ${theme.colors.lightGrey};
`
export const Logo = styled.header`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	user-select: none;

	img {
		width: 50px;
	}

	span {
		font-size: 26pt;
	}
	span.brasil {
		font-weight: 700;
	}
	span.banks {
		color: #272554;
	}
`
