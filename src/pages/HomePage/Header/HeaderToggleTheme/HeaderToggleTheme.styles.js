import styled, { css }  from 'styled-components';

export const ToggleButtonArea = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;

  span {
    display: inline-block;
    font-weight: 500;

    &#lightTheme, &#darkTheme {
      cursor: pointer;
      font-size: .75rem;
    }
  }
`;

export const ToggleButton = styled.div`
  background: ${({ theme }) => theme.colors.InputColor};
  width: 40px;
  height: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 .25rem;
  position: relative;
  ${({ theme }) => theme.colors.BorderColor};

  &::after {
    content: '';
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    ${({ theme }) => theme.colors.BorderColor};


    ${({ isDark }) => isDark && css`
      right: 0;
      background: ${({ theme }) => theme.colors.ToggleColor};
    `}

    ${({ isDark }) => isDark === false && css`
      left: 0;
      background: ${({ theme }) => theme.colors.ToggleColor};
    `}
  }
`;