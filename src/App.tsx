import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';

import { Header } from './components/Header';

import light from './styles/Themes/light'
import dark from './styles/Themes/dark'
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}





