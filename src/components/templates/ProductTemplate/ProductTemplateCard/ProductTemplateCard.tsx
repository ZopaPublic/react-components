import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import { maxMedia } from '../../../../helpers/responsiveness';
import { colors } from '../../../../constants';
import Card from '../../../organisms/Card/Card/Card';

interface ProductTemplateCardProps {
  className?: string;
  children: React.ReactNode;
}

const StyledCard = styled(Card)`
  ${maxMedia.phone`
    border-radius: 0;
    box-shadow: 0 0 1px 0 ${colors.greyLight}, 0 0 -1px 0 ${colors.greyLighter};
    border: none;
  `}
`;

export function ProductTemplateCard({ children, className }: ProductTemplateCardProps) {
  return <StyledCard className={classnames('px-4 py-6 m:p-8', className || '')}>{children}</StyledCard>;
}
