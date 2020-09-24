import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Card from '../../../organisms/Card/Card/Card';
import { maxMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateCardProps {
  className?: string;
  children: React.ReactNode;
}

const StyledCard = styled(Card)`
  ${maxMedia.phone`
    border-radius: 0;
  `}
`;

export function ProductTemplateCard({ children, className }: ProductTemplateCardProps) {
  return <StyledCard className={classnames('px-4 py-6 m:p-8', className || '')}>{children}</StyledCard>;
}
