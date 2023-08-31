import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul,
  ul li {
    list-style: none;
  }

  a,
  button{
    cursor: pointer;
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  svg {
    font-size: inherit;
  }
  
  button {
    background-color: transparent;
    border: none;
  }

  body {
    font-family: 'Fira Code', monospace;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.primary};
    font-size: 16px;
  }
`