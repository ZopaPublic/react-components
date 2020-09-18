import { ProductTemplateLoading } from './ProductTemplateLoading/ProductTemplateLoading';
import { ProductTemplateProgress } from './ProductTemplateProgress/ProductTemplateProgress';
import { ProductTemplateCard } from './ProductTemplateCard/ProductTemplateCard';
import ProductTemplateComponent, { ProductTemplateProps } from './ProductTemplate/ProductTemplate';
import React from 'react';

interface ProductTemplateStatic {
  Loading: typeof ProductTemplateLoading;
  Progress: typeof ProductTemplateProgress;
  Card: typeof ProductTemplateCard;
}

const ProductTemplate: ProductTemplateStatic & React.FC<ProductTemplateProps> = (props) => (
  <ProductTemplateComponent {...props} />
);

ProductTemplate.Card = ProductTemplateCard;
ProductTemplate.Loading = ProductTemplateLoading;
ProductTemplate.Progress = ProductTemplateProgress;

export default ProductTemplate;
