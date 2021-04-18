import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Global } from '../styles/global';
import { theme } from '../styles/theme';

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}

    <Global />
  </ThemeProvider>
);

export default Layout;
