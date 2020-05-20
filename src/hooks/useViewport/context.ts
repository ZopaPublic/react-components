import { createContext } from 'react';
import { ViewportSize } from './types';

export const ViewportContext = createContext<ViewportSize>({ width: undefined, height: undefined });
