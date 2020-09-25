import React from 'react';
import styled from 'styled-components';

import Progress, { ProgressProps } from '../../../molecules/Progress/Progress';
import { minMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateProgressProps {
  prevStepUrl?: string;
  progress?: Pick<ProgressProps, 'currentStep' | 'totalSteps'>;
  children: React.ReactNode;
}

const BackWrapper = styled.div`
  ${minMedia.desktop`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
  `}
`;

const ProductTemplateProgressContainer = styled.div`
  position: relative;
  min-height: 30px;
`;

export function ProductTemplateProgress({ prevStepUrl, progress, children }: ProductTemplateProgressProps) {
  if (!prevStepUrl || !progress) {
    return null;
  }

  return (
    <ProductTemplateProgressContainer data-automation="ZA.ProductTemplateProgress" className="l:mt-10 l:mb-4">
      {prevStepUrl && <BackWrapper className="my-4 l:mt-0 l:mb-7 pl-2">{children}</BackWrapper>}
      {progress && <Progress currentStep={progress?.currentStep || 0} totalSteps={progress?.totalSteps || 0} />}
    </ProductTemplateProgressContainer>
  );
}
