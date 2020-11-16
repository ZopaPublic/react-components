import React, { ReactNode, UIEvent } from 'react';
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
  onBackPressed?: (event: UIEvent) => void;
}

function ProductTemplate({
  title,
  subtitle,
  children,
  prevStep,
  progress,
  onBackPressed,
  contentWidth = 6,
}: ProductTemplateProps) {
  const containerClassnames = classnames('mb-10 m:mt-8', {
    'mt-6': !prevStep,
    'mt-4': prevStep,
  });

  const showHeader = !!prevStep || !!onBackPressed || !!progress;

  return (
    <FlexContainer data-automation="ZA.ProductTemplate" className={containerClassnames} gutter={0}>
      <FlexRow gutter={0}>
        <FlexCol>
          {showHeader ? (
            <ProductTemplateHeader prevStep={prevStep} progress={progress} onBackPressed={onBackPressed} />
          ) : null}
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
