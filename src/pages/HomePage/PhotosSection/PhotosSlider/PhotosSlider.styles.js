import styled from 'styled-components';

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
  opacity: ${({ slider }) => (slider ? '1' : '0')};
  pointer-events: ${({ slider }) => (slider ? 'all' : 'none')};
  transition: .4s;
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

  @media (max-width: 1024px) {
    max-width: 85%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
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
      box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, .74);
    }
  }
`;

export const SliderController = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 600;
  width: 100%;

  @media (max-width: 1024px) {
    padding-top: .25rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    position: static;
    text-align: center;
    justify-content: space-around;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: transparent;
    height: 52px;
    width: 52px;

    &#slidePrev {
      @media (max-width: 1536px) {
        left: -160px;
      }

      @media (max-width: 1440px) {
        left: -180px;
      }

      @media (max-width: 1366px) {
        left: -70px;
      }

      @media (max-width: 1280px) {
        left: -90px;
      }

      @media (max-width: 1024px) {
        left: 30px;
      }

      @media (max-width: 820px) {
        left: 20px;
      }
    }

    &#slideNext {
      @media (max-width: 1536px) {
        right: -160px;
      }

      @media (max-width: 1440px) {
        right: -180px;
      }

      @media (max-width: 1366px) {
        right: -70px;
      }

      @media (max-width: 1280px) {
        right: -90px;
      }

      @media (max-width: 1024px) {
        right: 30px;
      }

      @media (max-width: 820px) {
        right: 20px;
      }
    }

    svg {
      color: #ffffff;
      font-size: 2rem;
    }
  }
`; 

export const PhotosSliderButtons = styled.div`
  display: flex;
  gap: .5rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 35px;
    height: 40px;

    svg {
      font-size: 1.5rem;
      color: #ffffff;
      text-shadow: 0px 1px 13px rgba(0,0,0,0.6);
    }
  }
`;