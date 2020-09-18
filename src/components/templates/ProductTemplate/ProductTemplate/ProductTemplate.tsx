import React from 'react';
import styled from 'styled-components';

import { ProductTemplateHeader } from '../ProductTemplateHeader/ProductTemplateHeader';

export interface ProductTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function ProductTemplate({ title, subtitle, children }: ProductTemplateProps) {
  return (
    <section data-automation="ZA.ProductTemplate">
      <ProductTemplateHeader title={title} subtitle={subtitle} />
      <ProductTemplateContainer>{children}</ProductTemplateContainer>
    </section>
  );
}

const ProductTemplateContainer = styled.div.attrs({
  className: 'px-0 m:px-4',
})`
  max-width: 612px;
  margin: 0 auto;
`;

export default ProductTemplate;
