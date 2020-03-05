import { useLayoutEffect, useState } from 'react';
import throttle from 'lodash.throttle';

interface IUseViewportOptions {
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
