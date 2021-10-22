import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --very-dark-gray: hsl(0, 0%, 17%);
    --dark-gray: hsl(0, 0%, 59%);
    font-size: 18px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
  }
`;
