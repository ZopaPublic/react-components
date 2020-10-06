import React, { ReactNode } from 'react';

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
  contentWidth?: number;
}

function ProductTemplate({ title, subtitle, children, prevStep, progress, contentWidth = 6 }: ProductTemplateProps) {
  return (
    <FlexContainer data-automation="ZA.ProductTemplate" className="mb-10 mt-8">
      <FlexRow>
        <FlexCol>
          <ProductTemplateHeader prevStep={prevStep} progress={progress} />
          <ProductTemplateTitle title={title} subtitle={subtitle} />
          <FlexRow justify="center">
            <FlexCol m={10} xl={contentWidth}>
              {children}
            </FlexCol>
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}

export default ProductTemplate;
