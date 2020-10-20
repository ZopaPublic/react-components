import React, { ReactNode } from 'react';
import classnames from 'classnames';

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
  const containerClassnames = classnames('mb-10 m:mt-8', {
    'mt-6': !prevStep,
    'mt-4': prevStep,
  });
  return (
    <FlexContainer data-automation="ZA.ProductTemplate" className={containerClassnames} gutter={0}>
      <FlexRow gutter={0}>
        <FlexCol>
          {!!prevStep || !!progress ? <ProductTemplateHeader prevStep={prevStep} progress={progress} /> : null}
          <ProductTemplateTitle title={title} subtitle={subtitle} />
          <FlexRow justify="center" gutter={0}>
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
