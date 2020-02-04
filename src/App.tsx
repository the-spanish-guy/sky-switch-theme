import React from 'react';

import usePersistState from './utils/usePersistState';

import GlobalStyles from './styles/global';
import Header from './Components/Header/';
import Table from './Components/Table';
import Sky from './Components/Sky';

import { ThemeProvider, DefaultTheme } from "styled-components";
import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App = () => {

  const [theme, setTheme] = usePersistState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light )
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
        <Sky />
      </ThemeProvider>
    </div>
  );
}

export default App;
