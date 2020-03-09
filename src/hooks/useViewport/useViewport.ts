import { useLayoutEffect, useState, useContext } from 'react';
import throttle from 'lodash.throttle';
import { ViewportContext } from './ViewportProvider';

export interface IUseViewportOptions {
  /**
   * The timeout supplied to `lodash.throttle` in case the viewport dimensions are read directly.
   */
  timeout?: number;
}

function readViewport() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return {
    height,
    width,
  };
}

export function useViewport({ timeout = 300 }: IUseViewportOptions = {}) {
  const contextSize = useContext(ViewportContext);
  if (contextSize !== undefined) return contextSize;

  const [size, setSize] = useState(contextSize || readViewport());
  const onResize = throttle(() => setSize(readViewport()), timeout);

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
}
