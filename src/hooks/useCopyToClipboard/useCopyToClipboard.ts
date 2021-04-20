import { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

export const useCopyToClipboard = (resetInterval = 2000) => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  const handleCopy = (text: string) => {
    copy(text);
    setCopied(true);
  };

  return { isCopied, handleCopy };
};
