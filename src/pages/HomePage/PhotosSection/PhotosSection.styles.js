import styled from 'styled-components';
import { css } from 'styled-components';

export const PhotosSectionContainer = styled.section`
  padding: 1.5rem 0;
`;

export const PhotosArea = styled.div`
  ${({ checked, searchValue }) => (checked.length > 0 || searchValue.length) && css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .75rem;
  `}
  
`;

export const PhotoCard = styled.figure`
  img {
    display: block;
    width: 100%;
  }
`;

export const ErrorFilter = styled.div`

`;