import React, { useState } from 'react';
import FilterSection from './FilterSection/FilterSection';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HomePageContainer  from './HomePage.styles';
import PhotosSection from './PhotosSection/PhotosSection';

const HomePage = ({ setIsDark, isDark }) => {
  const [searchValue, setSearchValue] = useState('');
  const [checked, setChecked] = useState(['Todos']);

  return (
    <HomePageContainer>
      <Header 
        setIsDark={setIsDark} 
        isDark={isDark} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />
      
      <main>
        <FilterSection checked={checked} setChecked={setChecked} />
        <PhotosSection
          searchValue = {searchValue}
          checked={checked}
        />
      </main>

      <Footer />
    </HomePageContainer>
  )
}

export default HomePage;
