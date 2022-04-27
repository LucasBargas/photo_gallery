import React, { useEffect } from 'react';
import * as S from './PhotosSection.styles';
import Container from '../../../styles/Container';
import photos from './photos';

const PhotosSection = ({ searchValue, checked }) => {
  const photosFilter = photos.filter(({ category, defaultCategory }) => {
    return checked.length ? category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && (checked.indexOf(category) !== -1 || checked.indexOf(defaultCategory) !== -1) : searchValue.length && category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()); 
  })

  useEffect(() => {
    console.log(searchValue)
  }, [searchValue]);

  if (searchValue.length || checked.length > 0 ) {
    return (
      <S.PhotosSectionContainer>
        <Container>
          <S.PhotosArea>
            {photosFilter.map(({ photo, id }) => (
              <S.PhotoCard key={`photo ${id}`}>
                <img src={photo} alt="" />
              </S.PhotoCard>
            ))}
          </S.PhotosArea>
        </Container>
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
