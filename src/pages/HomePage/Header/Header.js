import * as S from './Header.styles';
import Container from '../../../styles/Container';
import HeaderToggleTheme from './HeaderToggleTheme/HeaderToggleTheme';
import HeaderSearchPhotos from './HeaderSearchPhotos/HeaderSearchPhotos';

const Header = ({ setIsDark, isDark, searchValue, setSearchValue }) => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <h1>Galeria de Fotos</h1>
          <HeaderToggleTheme setIsDark={setIsDark} isDark={isDark} />
          <HeaderSearchPhotos searchValue={searchValue} setSearchValue={setSearchValue} />
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  )
}

export default Header;
