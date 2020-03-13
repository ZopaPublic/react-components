import { useLayoutEffect, useState, useContext } from 'react';
import throttle from 'lodash.throttle';
import { ViewportContext } from './context';
import { IViewportSize } from './types';

export interface IUseViewportOptions {
  /**
   * The timeout supplied to `lodash.throttle` in case the viewport dimensions are read directly.
   */
  timeout?: number;
}

function readViewport(): IViewportSize {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return {
    height,
    width,
  };
}

export function useViewport({ timeout = 300 }: IUseViewportOptions = {}): IViewportSize {
  const contextSize = useContext(ViewportContext);
  if (contextSize.width !== undefined) return contextSize;

  const [size, setSize] = useState(readViewport());
  const onResize = throttle(() => setSize(readViewport()), timeout);

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
}
