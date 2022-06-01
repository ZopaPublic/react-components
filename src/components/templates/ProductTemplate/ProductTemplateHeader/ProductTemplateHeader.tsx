import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

import { ProgressProps } from '../../../molecules/Progress/Progress';
import { ProductTemplateNavigation } from '../ProductTemplateNavigation/ProductTemplateNavigation';
import { ProductTemplateProgress } from '../ProductTemplateProgress/ProductTemplateProgress';

interface ProductTemplateHeaderProps {
  prevStep?: ReactElement | string;
  progress?: Pick<ProgressProps, 'currentStep' | 'totalSteps'>;
  onBackPressed?: MouseEventHandler<HTMLAnchorElement>;
}

const ProductTemplateHeaderContainer = styled.section`
  position: relative;
  min-height: 30px;
`;

export function ProductTemplateHeader({ prevStep, progress, onBackPressed }: ProductTemplateHeaderProps) {
  return (
    <ProductTemplateHeaderContainer
      className={`mx-4 m:mx-0 ${progress ? 'mb-6' : 'mb-3'}`}
      data-automation="ZA.ProductTemplateHeader"
    >
      {(!!prevStep || !!onBackPressed) && (
        <ProductTemplateNavigation prevStep={prevStep} onBackPressed={onBackPressed} />
      )}
      {progress && <ProductTemplateProgress progress={progress} />}
    </ProductTemplateHeaderContainer>
  );
}
