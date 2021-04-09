import { createGlobalStyle } from 'styled-components/macro';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --gutter: 16px;
    --tab-bar-size: 50px;
    --button-size: 44px;

    // FONT
    --font-size-large-title: 31px;
    --font-size-title-1: 25px;
    --font-size-title-2: 19px;
    --font-size-title-3: 17px;
    --font-size-body: 14px;
    --font-size-callout: 13px;
    --font-size-subhead: 12px;
    --font-size-footnote: 12px;
    --font-size-caption: 11px;

    --line-height-large-title: 38px;
    --line-height-title-1: 31px;
    --line-height-title-2: 24px;
    --line-height-title-3: 22px;
    --line-height-body: 19px;
    --line-height-callout: 18px;
    --line-height-subhead: 16px;
    --line-height-footnote: 16px;
    --line-height-caption: 13px;

    // COLORS
    --label-color-primary: #dfdedf;
    --label-color-secondary: #8d8d93;
    --label-color-tertiary: #464649;
    --label-color-quartenary: #2a2a2c;

    --background-primary: #000;
    --background-secondary: #1c1c1f;
    --background-transparent: #28282899;
    --background-separator: #323235;

    --system-accent: #34c759;

    --system-darkcyan: #008b8b;
    --system-darkgray: #a9a9a9;
    --system-darksalmon: #e9967a;
    --system-tan: #d2b48c;
    --system-skyblue: #87ceeb;
    --system-steelblue: #4682b4;
    --system-coral: #ff7f50;
    --system-darkseagreen: #8fbc8f;
    --system-dodgerblue: #1e90ff;
    --system-goldenrod: #daa520;
    --system-hotpink: #ff69b4;
    --system-indianred: #cd5c5c;
    --system-salmon: #fa8072;
    --system-seagreen: #2e8b57;
    --system-blueviolet: #8a2be2;
    --system-limegreen: #32cd32;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: var(--label-color-primary);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    font-family: 'Open Sans', sans-serif;
    background-color: var(--background-primary);
  }
`;

export default GlobalStyles;
