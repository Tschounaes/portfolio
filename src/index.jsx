import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { GlobalStyle, DefaultTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
      
  </React.StrictMode>,
  document.getElementById('root')
);