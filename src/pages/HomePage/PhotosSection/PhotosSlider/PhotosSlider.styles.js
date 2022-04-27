import styled from 'styled-components';

export const PhotosSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .9);
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
    padding: 0 1.5rem;

    img {
      width: 100%;
    }
  }
`;