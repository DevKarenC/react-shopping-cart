import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }
`;

export { GlobalStyle };
