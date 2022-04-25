import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  body {
    button, input {
      outline: none;
      border: none;
    }

    button {
      cursor: pointer;
    }

    ul, li {
      list-style: none;
    }
  }
`;

export default GlobalStyles;
