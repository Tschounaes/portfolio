import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { GlobalStyle, DefaultTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={DefaultTheme}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,700;1,400&family=Roboto:ital,wght@0,100;0,400;1,400&display=swap" rel="stylesheet" />
        <GlobalStyle />
        <App />
      </ThemeProvider>
      
  </React.StrictMode>,
  document.getElementById('root')
);