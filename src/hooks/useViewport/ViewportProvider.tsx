import React, { createContext } from 'react';
import { useViewport, IUseViewportOptions } from './useViewport';

interface IViewportSize {
  width: number;
  height: number;
}

type TViewportContext = IViewportSize | undefined;

const ViewportContext = createContext<TViewportContext>(undefined);

const ViewportProvider: React.FC<IUseViewportOptions> = ({ children, ...rest }) => {
  const size = useViewport(rest);
  return <ViewportContext.Provider value={size}>{children}</ViewportContext.Provider>;
};

export { ViewportProvider, ViewportContext };
