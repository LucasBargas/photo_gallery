import styled from 'styled-components';
import { css } from 'styled-components';

export const PhotosSliderContainer = styled.div`
  padding: 2rem 0;
`;

export const PhotosSliderArea = styled.div`
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

export const PhotosSliderContent = styled.div`
  max-width: 100%;
  display: flex;
  transition: transform .3s ease;

  figure {
    flex-shrink: 0;
    width: 100%;
    padding: 0 1rem;

    img {
      width: 100%;
    }
  }
`;