import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 3rem 0;
  text-align: center;
  background: ${({ theme }) => theme.colors.FooterColor};
  font-size: .875rem;

  a {
    display: inline-block;
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.FontColor};

    &:last-of-type {
      margin-top: .25rem;
    }
 
    &:hover {
      text-decoration: underline;
    }
  }
`;