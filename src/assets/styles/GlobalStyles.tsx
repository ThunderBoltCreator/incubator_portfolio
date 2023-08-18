import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  a,
  button {
    cursor: pointer;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: #041F31;
    color: ${({theme}) => theme.color.primary};
  }

  card {
    max-width: 500px;
    min-width: 200px;
    width: 100%;
  }
`