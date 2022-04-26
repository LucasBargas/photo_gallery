import React, { useState } from 'react';
import FilterSection from './FilterSection/FilterSection';
import Header from './Header/Header';
import PhotosSection from './PhotosSection/PhotosSection';

const HomePage = ({ setIsDark, isDark }) => {
  const [searchValue, setSearchValue] = useState('');
  const [checked, setChecked] = useState(['Todos']);

  return (
    <>
      <Header 
        setIsDark={setIsDark} 
        isDark={isDark} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />
      <FilterSection checked={checked} setChecked={setChecked} />
      <PhotosSection
        searchValue = {searchValue}
        checked={checked}
      />
    </>
  )
}

export default HomePage;
