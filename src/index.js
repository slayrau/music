import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalFonts from 'src/styled/fonts';
import GlobalStyles from 'src/styled/global-styles';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
