import React from 'react';
import * as S from './Header.styles';
import Container from '../../../styles/Container';
import HeaderToggleTheme from './HeaderToggleTheme/HeaderToggleTheme';

const Header = ({ setIsDark, isDark }) => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <HeaderToggleTheme setIsDark={setIsDark} isDark={isDark} />

          <p>Olá</p>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  )
}

export default Header;
