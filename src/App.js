import React from 'react';
import { useState } from 'react';

import { ThemeContext } from './components/ThemeContext';

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
        <button onClick={themeToggler}>Choose Theme</button>
      <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;