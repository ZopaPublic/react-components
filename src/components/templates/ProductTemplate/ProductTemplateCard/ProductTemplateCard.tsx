import React, { ReactNode } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { useViewport } from '../../../../hooks/useViewport';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';
import Card from '../../../organisms/Card/Card/Card';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { maxMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateCardProps {
  notification?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  children: React.ReactNode;
}

const StyledCard = styled(Card)`
  ${maxMedia.phone`
    border-radius: 0;
  `}
`;

const SizedHeading: React.FC = ({ children }) => {
  const { width = 0 } = useViewport();
  return (
    <Heading as="h2" size={width > breakpoints.phone ? 'h3' : 'h4'}>
      {children}
    </Heading>
  );
};

export function ProductTemplateCard({
  children,
  className,
  notification = null,
  title,
  subtitle,
}: ProductTemplateCardProps) {
  return (
    <StyledCard className={classnames('px-4 py-6 m:p-8', className || '')}>
      {notification}
      <SizedHeading>{title}</SizedHeading>
      {subtitle && (
        <Text className="mt-2" color={colors.greyDark}>
          {subtitle}
        </Text>
      )}
      {children}
    </StyledCard>
  );
}
