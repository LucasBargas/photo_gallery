import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BorderColor};
  background: ${({ theme }) => theme.colors.PrimaryColor};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    padding-top: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }
`;