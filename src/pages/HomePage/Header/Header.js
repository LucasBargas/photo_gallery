import * as S from './Header.styles';
import Container from '../../../styles/Container';
import HeaderToggleTheme from './HeaderToggleTheme/HeaderToggleTheme';
import HeaderSearchPhotos from './HeaderSearchPhotos/HeaderSearchPhotos';

const Header = ({ setIsDark, isDark, searchValue, setSearchValue }) => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <HeaderToggleTheme setIsDark={setIsDark} isDark={isDark} />
          <HeaderSearchPhotos searchValue={searchValue} setSearchValue={setSearchValue} />
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  )
}

export default Header;
