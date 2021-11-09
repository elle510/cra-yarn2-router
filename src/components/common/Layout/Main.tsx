import React from 'react';

type MainProps = {
  children?: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="alyac-mpi-layout-main">
      Main <br />
      {children}
    </div>
  );
};

export default Main;
