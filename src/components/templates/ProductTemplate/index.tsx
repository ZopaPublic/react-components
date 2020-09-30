import React from 'react';

import { ProductTemplateCard } from './ProductTemplateCard/ProductTemplateCard';
import ProductTemplateComponent, { ProductTemplateProps } from './ProductTemplate/ProductTemplate';

interface ProductTemplateStatic {
  Card: typeof ProductTemplateCard;
}

const ProductTemplate: ProductTemplateStatic & React.FC<ProductTemplateProps> = (props) => (
  <ProductTemplateComponent {...props} />
);

ProductTemplate.Card = ProductTemplateCard;

export default ProductTemplate;
