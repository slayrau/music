import React from 'react';
import ReactDOM from 'react-dom';

import GlobalFonts from 'src/styled/fonts';
import GlobalStyles from 'src/styled/global-styles';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
