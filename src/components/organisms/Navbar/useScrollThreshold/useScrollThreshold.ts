import { useEffect, useState } from 'react';

/**
 * Use this hook when you want to act according whether the user has
 * scrolled past a certain point or not.
 *
 * @param threshold The point we want to know whether the user has
 *                  scrolled to or not. (default 2)
 */
export default function useScrollThreshold(threshold = 2) {
  const [overThreshold, setOverThreshold] = useState(
    typeof window === 'undefined' ? false : window.scrollY > threshold,
  );

  const onScroll = () => {
    window.requestAnimationFrame(() => setOverThreshold(window.scrollY > threshold));
  };

  useEffect(() => {
    setOverThreshold(window.scrollY > threshold);
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return overThreshold;
}
