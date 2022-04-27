import styled from 'styled-components';

export const PhotosSectionContainer = styled.section`
  padding: 1.5rem 0;
`;

export const PhotosArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .75rem;
  
`;

export const PhotoCard = styled.figure`
  overflow: hidden;

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