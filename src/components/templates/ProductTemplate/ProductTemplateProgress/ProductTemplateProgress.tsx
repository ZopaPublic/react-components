import React from 'react';
import styled from 'styled-components';

import Progress, { ProgressProps } from '../../../molecules/Progress/Progress';
import { grid } from '../../../../constants';

interface ProductTemplateProgressProps {
  progress: Pick<ProgressProps, 'currentStep' | 'totalSteps'>;
}

const ProgressContainer = styled.div.attrs({ className: 'mx-auto pt-1' })`
  max-width: 525px;

  @media (min-width: ${grid.breakpoints.l}px) {
    max-width: 612px;
  }
`;

export function ProductTemplateProgress({ progress }: ProductTemplateProgressProps) {
  return (
    <ProgressContainer>
      <Progress currentStep={progress?.currentStep || 0} totalSteps={progress?.totalSteps || 0} />
    </ProgressContainer>
  );
}
