import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'src/store';
import { MediaProvider } from 'src/contexts/media';
import { BreakpointsProvider } from 'src/contexts/breakpoints';

import GlobalFonts from 'src/styled/fonts';
import GlobalStyles from 'src/styled/global-styles';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MediaProvider>
          <BreakpointsProvider>
            <GlobalFonts />
            <GlobalStyles />
            <App />
          </BreakpointsProvider>
        </MediaProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
