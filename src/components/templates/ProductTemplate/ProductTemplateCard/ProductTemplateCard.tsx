import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import { colors, grid } from '../../../../constants';
import Card from '../../../organisms/Card/Card/Card';

interface ProductTemplateCardProps {
  className?: string;
  children: React.ReactNode;
}

const StyledCard = styled(Card)`
  @media (max-width: ${grid.breakpoints.m}px) {
    border-radius: 0;
    box-shadow: 0 0 1px 0 ${colors.greyLight};
    border: none;
    border-bottom: 1px solid ${colors.greyLighter};
  }
`;

export function ProductTemplateCard({ children, className }: ProductTemplateCardProps) {
  return <StyledCard className={classnames('px-4 py-6 m:p-8', className || '')}>{children}</StyledCard>;
}
