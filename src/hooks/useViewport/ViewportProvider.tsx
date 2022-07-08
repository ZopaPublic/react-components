import React from 'react';
import { useViewport, UseViewportOptions } from './useViewport';
import { ViewportContext } from './context';

interface ViewportProviderProps extends UseViewportOptions {
  children: React.ReactNode;
}

const ViewportProvider = ({ children, ...rest }: ViewportProviderProps) => {
  const size = useViewport(rest);
  return <ViewportContext.Provider value={size}>{children}</ViewportContext.Provider>;
};

export { ViewportProvider, ViewportContext };
