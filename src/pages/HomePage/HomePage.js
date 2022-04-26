import React from 'react';
import FilterSection from './FilterSection/FilterSection';
import Header from './Header/Header';

const HomePage = ({ setIsDark, isDark }) => {
  return (
    <>
      <Header setIsDark={setIsDark} isDark={isDark} />
      <FilterSection />
    </>
  )
}

export default HomePage;
