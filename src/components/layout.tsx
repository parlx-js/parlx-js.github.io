import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Global } from './global';

import { theme } from '../constants/theme';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}

      <Global />
    </ThemeProvider>
  );
};

export default Layout;
