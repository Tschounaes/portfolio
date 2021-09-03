import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from  'react-redux';

import App from './App';
import store from './store_redux';
import { GlobalStyle, DefaultTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);

