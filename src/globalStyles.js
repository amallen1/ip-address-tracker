import * as styled from "styled-components";

//had to change so that prettier would format it
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

  html,
  body {
    height: 100vh;
  }

  body {
    font-family: "Rubik", sans-serif;
  }
`;
