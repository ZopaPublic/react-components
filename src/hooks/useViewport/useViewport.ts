import { useLayoutEffect, useState } from 'react';
import throttle from 'lodash.throttle';

function readViewport() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return {
    height,
    width,
  };
}

export function useViewport() {
  const [size, setSize] = useState(readViewport());
  const onResize = throttle(() => setSize(readViewport()), 300);

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
}
