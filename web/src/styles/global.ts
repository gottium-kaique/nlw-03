import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #fff;
    background: #ebf2f5;
  }

  body, input, textarea, button {
    font: 600 18px Nunito, sans-serif;
  }

  ::selection {
    background: #3cdc8c;
    color: #fff;
  }
`

export default GlobalStyle
