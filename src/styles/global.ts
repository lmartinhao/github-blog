import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: COLOR;
    color: COLOR;
    font-family: 'Nunito';
    background: ${(props) => props.theme["blue-900"]};
    color: ${(props) => props.theme["blue-300"]};
  }
`
