import React from 'react';
import { useViewport, IUseViewportOptions } from './useViewport';
import { ViewportContext } from './context';

const ViewportProvider: React.FC<IUseViewportOptions> = ({ children, ...rest }) => {
  const size = useViewport(rest);
  return <ViewportContext.Provider value={size}>{children}</ViewportContext.Provider>;
};

export { ViewportProvider, ViewportContext };
