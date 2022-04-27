import styled from 'styled-components';

const Container = styled.div`
  max-width: calc(1000px + 3rem);
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 360px) {
    padding: 0 1.15rem;
  }
`;

export default Container;
