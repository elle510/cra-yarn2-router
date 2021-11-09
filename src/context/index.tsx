import React from 'react';

import AppContext from './AppContext';

const ContextProvider = ({ children }: { children: React.ReactNode }) => (
  <AppContext>{children}</AppContext>
);

export default ContextProvider;
