import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: ${theme.colors.alternative};
    text-decoration: none;
  }

  a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }
`
export default GlobalStyle
