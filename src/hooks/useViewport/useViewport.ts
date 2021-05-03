import { useEffect, useState, useContext } from 'react';
import throttle from 'lodash.throttle';
import { ViewportContext } from './context';
import { ViewportSize } from './types';

export interface UseViewportOptions {
  /**
   * The timeout supplied to `lodash.throttle` in case the viewport dimensions are read directly.
   */
  timeout?: number;
}

function readViewport(): ViewportSize {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return {
    height,
    width,
  };
}

export function useViewport({ timeout = 300 }: UseViewportOptions = {}): ViewportSize {
  const contextSize = useContext(ViewportContext);
  if (contextSize.width !== undefined) {
    return contextSize;
  }

  const [size, setSize] = useState({ width: 0, height: 0 } as ViewportSize);
  const onResize = throttle(() => setSize(readViewport()), timeout);

  useEffect(() => {
    setSize(readViewport());
    window.addEventListener('resize', onResize);

    return () => {
      onResize.cancel();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
}
