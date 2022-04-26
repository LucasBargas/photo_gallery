import React from 'react';
import * as S from './HeaderToggleTheme.styles';

const HeaderToggleTheme = ({ setIsDark, isDark }) => {
  const handleToggleTheme = ({ target }) => {
    if (target.id === 'lightTheme') {
      setIsDark(false);

    } else if (target.id === 'darkTheme') {
      setIsDark(true);
      
    } else if (target.id === 'toggleButton') {
      setIsDark(!isDark);
    }
  } 

  return (
    <S.ToggleButtonArea>
      <span id='lightTheme' onClick={handleToggleTheme}>
        Light
      </span>

      <S.ToggleButton  id='toggleButton' isDark={isDark} onClick={handleToggleTheme}></S.ToggleButton>

      <span id='darkTheme' onClick={handleToggleTheme}>
        Dark
      </span>
    </S.ToggleButtonArea>
  )
}

export default HeaderToggleTheme;
