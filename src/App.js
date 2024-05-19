import Routes from './config/routes';
import ThemeToggler from "./Theme/theme";
import ThemeProvider from "./Theme/theme";
import React, { useState } from 'react';

function App() {

  return (
    <ThemeProvider >
    <Routes />
    </ThemeProvider>
  
);

    
  
}

export default App;
