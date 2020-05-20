import React from 'react';
import { useViewport, UseViewportOptions } from './useViewport';
import { ViewportContext } from './context';

const ViewportProvider: React.FC<UseViewportOptions> = ({ children, ...rest }) => {
  const size = useViewport(rest);
  return <ViewportContext.Provider value={size}>{children}</ViewportContext.Provider>;
};

export { ViewportProvider, ViewportContext };
