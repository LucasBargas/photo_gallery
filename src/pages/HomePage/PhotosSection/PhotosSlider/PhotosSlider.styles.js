import styled, { keyframes } from 'styled-components';

const animationSlider = keyframes`
  to {
    opacity: 1;
  }
`;

export const PhotosSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .9);
  opacity: 0;
  animation: ${animationSlider} .4s forwards;
`;

export const PhotosSliderArea = styled.div`
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1536px) {
    max-width: 100%;
  }

  @media (max-width: 1366px) {
    max-width: 76%;
  }
`;

export const PhotosSliderContent = styled.div`
  max-width: 100%;
  display: flex;
  transition: transform .3s ease;

  figure {
    flex-shrink: 0;
    width: 100%;
    padding: 0 .5rem;

    img {
      width: 100%;
      border-radius: 4px;
    }
  }
`;

export const SliderController = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 600;
  width: 100%;

  button {
    position: relative;

    &#slidePrev {
      left: -90px;
    }

    &#slideNext {
      right: -90px;
    }
  }
`; 