import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Light from './styles/Themes/Light';
import Dark from './styles/Themes/Dark';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <p>Olá</p>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;
