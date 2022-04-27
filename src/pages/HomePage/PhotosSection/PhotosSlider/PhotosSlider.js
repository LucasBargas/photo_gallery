import React, { useEffect, useRef, useState } from 'react';
import Container from '../../../../styles/Container';
import * as S from './PhotosSlider.styles';

const PhotosSlider = ({ active, setActive, photosFilter }) => {
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
  }, [active])

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

  return (
    <S.PhotosSliderContainer>
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

          <button onClick={slidePrev}>Anterior</button>
          <button onClick={slideNext}>Próximo</button>
        </S.PhotosSliderArea>
      </Container>
    </S.PhotosSliderContainer>
  )
}

export default PhotosSlider;

