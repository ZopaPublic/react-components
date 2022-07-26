import React from 'react';

import { ProductTemplateCard } from './ProductTemplateCard/ProductTemplateCard';
import ProductTemplateComponent, { ProductTemplateProps } from './ProductTemplate/ProductTemplate';

const ProductTemplate = ({ children, ...rest }: ProductTemplateProps) => (
  <ProductTemplateComponent {...rest}>{children}</ProductTemplateComponent>
);

export default Object.assign(ProductTemplate, { Card: ProductTemplateCard });
