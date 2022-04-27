import { useState } from 'react';
import * as S from './PhotosSection.styles';
import Container from '../../../styles/Container';
import photos from './photos';
import PhotosSlider from './PhotosSlider/PhotosSlider';

const PhotosSection = ({ searchValue, checked }) => {
  const [active, setActive] = useState(0);
  const [slider, setSlider] = useState(null);

  const handlePhotoClick = ({ target }) => {
    const i = Number(target.closest('figure').id);
    setActive(i);
    setSlider(true);
  }

  const photosFilter = photos.filter(({ category, defaultCategory }) => {
    return checked.length ? category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && (checked.indexOf(category) !== -1 || checked.indexOf(defaultCategory) !== -1) : searchValue.length && category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()); 
  })

  if (searchValue.length || checked.length > 0 ) {
    return (
      <S.PhotosSectionContainer>
        <Container>
          <S.PhotosArea>
            {photosFilter.map(({ id, photo, category}, index) => (
              <S.PhotoCard key={`photo ${id}`} id={index} onClick={handlePhotoClick}>
                <img src={photo} alt={category} />
              </S.PhotoCard>
            ))}
          </S.PhotosArea>
        </Container>
        {slider && (
          <PhotosSlider active={active} setActive={setActive} photosFilter={photosFilter} setSlider={setSlider} />
        )}
      </S.PhotosSectionContainer>
    )
  } else {
    return (
      <S.ErrorFilter>
        <Container>
          <p>Você precisa filtrar a categoria de fotos desejada ou pesquisar por uma.</p>
        </Container>
      </S.ErrorFilter>
    )
  }

  
}

export default PhotosSection;
