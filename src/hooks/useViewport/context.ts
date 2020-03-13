import { createContext } from 'react';
import { IViewportSize } from './types';

export const ViewportContext = createContext<IViewportSize>({ width: undefined, height: undefined });
