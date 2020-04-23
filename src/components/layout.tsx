import React from 'react';

import { Global } from './global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}

      <Global />
    </>
  );
};

export default Layout;
