import React from 'react';

import { ProductTemplateCard } from './ProductTemplateCard/ProductTemplateCard';
import ProductTemplateComponent, { ProductTemplateProps } from './ProductTemplate/ProductTemplate';
import { ProductTemplateHeader } from './ProductTemplateHeader/ProductTemplateHeader';

interface ProductTemplateStatic {
  Card: typeof ProductTemplateCard;
  Header: typeof ProductTemplateHeader;
}

const ProductTemplate: ProductTemplateStatic & React.FC<ProductTemplateProps> = (props) => (
  <ProductTemplateComponent {...props} />
);

ProductTemplate.Card = ProductTemplateCard;
ProductTemplate.Header = ProductTemplateHeader;

export default ProductTemplate;
