import styled, { css }  from 'styled-components';

export const ToggleButtonArea = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;

    &#lightTheme, &#darkTheme {
      cursor: pointer;
      font-size: .75rem;
    }
  }
`;

export const ToggleButton = styled.div`
  background: red;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 .25rem;
  position: relative;

  &::after {
    content: '';
    background: white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;


    ${({ isDark }) => isDark && css`
      right: 0;
    `}

    ${({ isDark }) => isDark === false && css`
      left: 0;
    `}
  }
`;