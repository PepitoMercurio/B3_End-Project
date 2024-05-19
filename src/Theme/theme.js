import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  body: '#d1d1d1',
  text: '#333',
  secondary: '#bfbfbf',
};

const darkTheme = {
  body: '#333',
  text: '#f4f4f4',
  secondary: '#222',
};

const ToggleButton = ({ themeToggler, currentTheme }) => {
  return (
    <button onClick={themeToggler}>
      Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

const ThemeToggler = ({children}) => {
  console.log(children);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      
      <div style={{ backgroundColor: theme === 'light' ? lightTheme.body : darkTheme.body }}>
        <ToggleButton themeToggler={themeToggler} currentTheme={theme} />
      </div>
      
      {children}
     
    </ThemeProvider>
  );
};

export default ThemeToggler;