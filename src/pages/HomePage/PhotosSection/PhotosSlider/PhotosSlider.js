import { useEffect, useRef, useState } from 'react';
import Container from '../../../../styles/Container';
import * as S from './PhotosSlider.styles';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const PhotosSlider = ({ active, setActive, photosFilter, slider, setSlider }) => {
  const [position, setPosition] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const { width } = slideRef.current.getBoundingClientRect();
      setPosition(-(width * active));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  const slidePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    } else if (active === 0) {
      setActive(photosFilter.length - 1);
    }
  }

  const slideNext = () => {
    if (active < photosFilter.length - 1) {
      setActive(active + 1);
    } else if (active === photosFilter.length - 1) {
      setActive(0);
    }
  }

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setSlider(false);
  }

  const handleExpand = () => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }

    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  return (
    <S.PhotosSliderContainer slider={slider} onClick={handleOutsideClick}>
      <Container>
        <S.PhotosSliderArea>
          <S.PhotosSliderContent
            ref={slideRef} 
            style={{ transform: `translateX(${position}px)` }}
          >
            {photosFilter.map(({ id, photo, category }) => (
              <figure key={`photo ${id}`}>
                <img src={photo} alt={category} />
              </figure>
            ))}
          </S.PhotosSliderContent>
            
          <S.SliderController>
            <button id='slidePrev' onClick={slidePrev}>
              <FaChevronLeft />
            </button>
            <button id='slideNext' onClick={slideNext}>
              <FaChevronRight />
            </button>
          </S.SliderController>
        </S.PhotosSliderArea>
      </Container>

      <S.PhotosSliderButtons>
        <button onClick={handleExpand}><AiOutlineExpandAlt /></button>
        <button onClick={() => setSlider(false)}><IoClose /></button>
      </S.PhotosSliderButtons>
    </S.PhotosSliderContainer>
  )
}

export default PhotosSlider;
