import React from 'react';
import { useState } from 'react';

import { ThemeContext } from './components/ThemeContext';
import Button from './components/Button';

import Home from './pages/home/index';

import './App.css';

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Button onClick={themeToggler} label={'Change Theme'} className={'theme-changer-button'} />
      </ThemeContext.Provider>
      <Home />
    </div>
  );
}

export default App;