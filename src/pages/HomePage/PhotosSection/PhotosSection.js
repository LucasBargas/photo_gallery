import React from 'react';
import * as S from './PhotosSection.styles';
import Container from '../../../styles/Container';
import photos from './photos';

console.log(photos)

const PhotosSection = ({ searchValue, checked }) => {
  const photosFilter = photos.filter(({ category, defaultCategory }) => {
    return checked.length ? category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) && (checked.indexOf(category) !== -1 || checked.indexOf(defaultCategory) !== -1) : searchValue.length && category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()); 
  })

  return (
    <S.PhotosSectionContainer>
      <Container>
        <S.PhotosArea checked={checked} searchValue={searchValue}>
          {photosFilter.map(({ photo, id }) => (
            <S.PhotoCard key={`photo ${id}`}>
              <img src={photo} alt="" />
            </S.PhotoCard>
          ))}
          {(checked.length === 0 && searchValue.length === 0) && (
            <S.ErrorFilter>
              <p>Você precisa filtrar a categoria de fotos desejada ou pesquisar por uma.</p>
            </S.ErrorFilter>
          )}
        </S.PhotosArea>
      </Container>
    </S.PhotosSectionContainer>
  )
}

export default PhotosSection;
