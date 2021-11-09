import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="alyac-mpi-layout">
      <Header />
      <div className="alyac-mpi-layout-body">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;
