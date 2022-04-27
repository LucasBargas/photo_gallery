import { useEffect, useRef } from 'react';
import SearchPhotosInput from './HeaderSearchPhotos.styles';
import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

const HeaderSearchPhotos = ({ searchValue, setSearchValue }) => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleClearInput = () => {
    setSearchValue('');
  }

  return (
    <SearchPhotosInput>
      <input
        placeholder='Buscar fotos...' 
        type="text"
        ref={input}
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)} 
      />
      <button id='loupeBtn'><BiSearch /></button>
      {searchValue.length > 0 && <button id='clearBtn' onClick={handleClearInput}><IoClose /></button>}
    </SearchPhotosInput>
  )
}

export default HeaderSearchPhotos;
