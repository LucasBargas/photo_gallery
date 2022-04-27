import styled from 'styled-components';

export const PhotosSectionContainer = styled.section`
  padding: 1.5rem 0;

  @media (max-width: 480px) {
    padding: 2.5rem 0;
  }
`;

export const PhotosArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .75rem;
  

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoCard = styled.figure`
  overflow: hidden;
  border-radius: 4px;

  img {
    display: block;
    width: 100%;
    cursor: pointer;
    transition: .4s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ErrorFilter = styled.div`
  padding-top: .75rem;
`;