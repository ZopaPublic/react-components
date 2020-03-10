import React, { createContext } from 'react';
import { useViewport, IUseViewportOptions } from './useViewport';

interface IViewportSize {
  width: number | undefined;
  height: number | undefined;
}

type TViewportContext = IViewportSize;

const ViewportContext = createContext<TViewportContext>({ width: undefined, height: undefined });

const ViewportProvider: React.FC<IUseViewportOptions> = ({ children, ...rest }) => {
  const size = useViewport(rest);
  return <ViewportContext.Provider value={size}>{children}</ViewportContext.Provider>;
};

export { ViewportProvider, ViewportContext };
