import { createGlobalStyle } from "styled-components";

//inserindo os estilos globais
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif
  }
`;