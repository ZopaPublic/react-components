import React from 'react';

import { ProductTemplateProgress } from './ProductTemplateProgress/ProductTemplateProgress';
import { ProductTemplateCard } from './ProductTemplateCard/ProductTemplateCard';
import ProductTemplateComponent, { ProductTemplateProps } from './ProductTemplate/ProductTemplate';

interface ProductTemplateStatic {
  Progress: typeof ProductTemplateProgress;
  Card: typeof ProductTemplateCard;
}

const ProductTemplate: ProductTemplateStatic & React.FC<ProductTemplateProps> = (props) => (
  <ProductTemplateComponent {...props} />
);

ProductTemplate.Card = ProductTemplateCard;
ProductTemplate.Progress = ProductTemplateProgress;

export default ProductTemplate;
