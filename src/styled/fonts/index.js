import { createGlobalStyle } from 'styled-components/macro';

import OpenSansRegular from './OpenSans-Regular.woff2';
import OpenSansBold from './OpenSans-Bold.woff2';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(${OpenSansRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(${OpenSansBold}) format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;

export default GlobalFonts;
