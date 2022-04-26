import React from 'react';
import Header from './Header/Header';

const HomePage = ({ setIsDark, isDark }) => {
  return (
    <>
      <Header setIsDark={setIsDark} isDark={isDark} />
    </>
  )
}

export default HomePage;
