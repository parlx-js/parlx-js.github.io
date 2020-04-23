import { createGlobalStyle } from 'styled-components';

import { theme } from '../constants/theme';

export const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: ${theme.font.family.body};
    background-color: ${theme.colors.background};
    font-size: ${theme.font.size.default};
    color: ${theme.colors.text};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
