import React, { useEffect, useRef, useState } from 'react';
import SearchPhotosInput from './HeaderSearchPhotos.styles';

const HeaderSearchPhotos = () => {
  const [searchValue, setSearchValue] = useState('');
  const input = useRef();

  if (searchValue.length) console.log(searchValue);

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
