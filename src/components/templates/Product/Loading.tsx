import React from 'react';

interface ProductTemplateLoadingProps {
  children: React.ReactNode;
}
export function ProductTemplateLoading(props: ProductTemplateLoadingProps) {
  return <div data-automation="ZA.ProductTemplateLoading">{props.children}</div>;
}
