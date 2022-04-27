import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 3rem 0;
  text-align: center;
  background: ${({ theme }) => theme.colors.FooterColor};

  p {
    font-size: .875rem;

    a {
      text-decoration: none;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.FontColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;