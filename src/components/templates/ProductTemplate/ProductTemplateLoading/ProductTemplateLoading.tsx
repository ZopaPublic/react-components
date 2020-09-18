import React from 'react';

interface ProductTemplateLoadingProps {
  children: React.ReactNode;
}
export function ProductTemplateLoading({ children }: ProductTemplateLoadingProps) {
  return <div data-automation="ZA.ProductTemplateLoading">{children}</div>;
}
