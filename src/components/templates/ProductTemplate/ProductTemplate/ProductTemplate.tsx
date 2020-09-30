import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ProgressProps } from '../../../molecules/Progress/Progress';
import { ProductTemplateTitle } from '../ProductTemplateTitle/ProductTemplateTitle';
import { ProductTemplateHeader } from '../ProductTemplateHeader/ProductTemplateHeader';

export interface ProductTemplateProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  prevStep?: string | ReactNode;
  nextStep?: string | ReactNode;
  progress?: Pick<ProgressProps, 'currentStep' | 'totalSteps'>;
}

function ProductTemplate({ title, subtitle, children, prevStep, nextStep, progress }: ProductTemplateProps) {
  return (
    <ProductTemplateContainer data-automation="ZA.ProductTemplate">
      <ProductTemplateHeader nextStep={nextStep} prevStep={prevStep} progress={progress} />
      <ProductTemplateTitle title={title} subtitle={subtitle} />
      <ProductTemplateContent>{children}</ProductTemplateContent>
    </ProductTemplateContainer>
  );
}

const ProductTemplateContent = styled.div.attrs({
  className: 'px-0 m:px-4',
})`
  max-width: 612px;
  margin: 0 auto;
`;

const ProductTemplateContainer = styled.section.attrs({ className: 'mb-10' })`
  position: relative;
`;

export default ProductTemplate;
