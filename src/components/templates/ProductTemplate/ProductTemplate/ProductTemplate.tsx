import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ProgressProps } from '../../../molecules/Progress/Progress';
import { ProductTemplateTitle } from '../ProductTemplateTitle/ProductTemplateTitle';
import { ProductTemplateHeader } from '../ProductTemplateHeader/ProductTemplateHeader';
import FlexContainer from '../../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';

export interface ProductTemplateProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  prevStep?: string | ReactNode;
  progress?: Pick<ProgressProps, 'currentStep' | 'totalSteps'>;
  wideContent?: boolean;
}

function ProductTemplate({ title, subtitle, children, prevStep, progress, wideContent = false }: ProductTemplateProps) {
  return (
    <FlexContainer data-automation="ZA.ProductTemplate" className="mb-10">
      <FlexRow>
        <FlexCol>
          <ProductTemplateHeader prevStep={prevStep} progress={progress} />
          <ProductTemplateTitle title={title} subtitle={subtitle} />
          <ProductTemplateContent wideContent={wideContent}>{children}</ProductTemplateContent>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}

interface ProductTemplateContentProps {
  wideContent?: boolean;
}
const ProductTemplateContent = styled.div.attrs({
  className: 'px-0 m:px-4',
})<ProductTemplateContentProps>`
  max-width: ${({ wideContent }) => (wideContent ? '1043' : '612')}px;
  margin: 0 auto;
`;

export default ProductTemplate;
