import Routes from './config/routes';
import ThemeToggler from "./Theme/theme";
import ThemeProvider from "./Theme/theme";
import React, { useState } from 'react';

function App() {
  // const [theme, setTheme] = useState(
  //   localStorage.getItem('theme') || 'light'
  // );

  return (
    <ThemeProvider>
    <Routes />
    </ThemeProvider>
  
);

    
  
}

export default App;
