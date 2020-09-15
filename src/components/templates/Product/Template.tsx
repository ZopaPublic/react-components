import React from 'react';
import styled from 'styled-components';

import { ProductTemplateHeader } from './Header';
import { ProductTemplateLoading } from './Loading';
import { ProductTemplateProgress } from './Progress';
import { ProductTemplateCard } from './Card';
import { ZopaFooter } from '../../..';

interface ProductTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ProductTemplate = (props: ProductTemplateProps) => {
  return (
    <section data-automation="ZA.ProductTemplate">
      <ProductTemplateHeader title={props.title} subtitle={props.subtitle} />
      <ProductTemplateContainer> {props.children} </ProductTemplateContainer>
      <ZopaFooter />
    </section>
  );
};

const ProductTemplateContainer = styled.div.attrs({
  className: 'px-0 m:px-4',
})`
  max-width: 612px;
  margin: 0 auto;
`;

ProductTemplate.Loading = ProductTemplateLoading;
ProductTemplate.Progress = ProductTemplateProgress;
ProductTemplate.Card = ProductTemplateCard;

export default ProductTemplate;
