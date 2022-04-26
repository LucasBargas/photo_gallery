import React, { useEffect, useRef } from 'react';
import SearchPhotosInput from './HeaderSearchPhotos.styles';

const HeaderSearchPhotos = ({ searchValue, setSearchValue }) => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <SearchPhotosInput>
      <input
        placeholder='Buscar fotos...' 
        type="text"
        ref={input}
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)} 
      />
    </SearchPhotosInput>
  )
}

export default HeaderSearchPhotos;
