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

const ProductTemplateHeaderContainer = styled.div`
  position: relative;
  min-height: 30px;
`;

export function ProductTemplateHeader({ prevStep, progress, onBackPressed }: ProductTemplateHeaderProps) {
  return (
    <ProductTemplateHeaderContainer className="mx-4 mb-6 m:mx-0" data-automation="ZA.ProductTemplateHeader">
      {(!!prevStep || !!onBackPressed) && (
        <ProductTemplateNavigation prevStep={prevStep} onBackPressed={onBackPressed} />
      )}
      {progress && <ProductTemplateProgress progress={progress} />}
    </ProductTemplateHeaderContainer>
  );
}
