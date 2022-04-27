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
    font-family: ${({ theme }) => theme.fonts.OpenSans};
    background: ${({ theme }) => theme.colors.PrimaryColor};
    color: ${({ theme }) => theme.colors.FontColor};

    button, input {
      outline: none;
      font-family: ${({ theme }) => theme.fonts.OpenSans};
      color: ${({ theme }) => theme.colors.FontColor};
    }

    button {
      border: none;
      display: inline-block;
      cursor: pointer;
    }

    input {
      border: 1px solid ${({ theme }) => theme.colors.BorderColor};
      color: ${({ theme }) => theme.colors.InputColor};
    }

    ul, li {
      list-style: none;
    }
  }
`;

export default GlobalStyles;
