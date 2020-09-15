import React, { ReactNode } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import { Card, breakpoints, Heading, Text, colors, useViewport } from '../../../index';

interface ProductTemplateCardProps {
  notification?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  children: React.ReactNode;
}

const StyledCard = styled(Card)`
  @media (max-width: ${breakpoints.phone}px) {
    border-radius: 0;
  }
`;

function SizedHeading(props: { children: ReactNode }) {
  const { width = 0 } = useViewport();
  return width > breakpoints.phone ? (
    <Heading as="h2" size="h3">
      {props.children}
    </Heading>
  ) : (
    <Heading as="h2" size="h4">
      {props.children}
    </Heading>
  );
}

export function ProductTemplateCard(props: ProductTemplateCardProps) {
  return (
    <StyledCard className={classnames('px-4 py-6 m:p-8', props.className ? props.className : '')}>
      {props.notification ? props.notification : null}
      <SizedHeading>{props.title}</SizedHeading>
      {props.subtitle ? (
        <Text className="mt-2" color={colors.greyDark}>
          {props.subtitle}
        </Text>
      ) : null}
      {props.children}
    </StyledCard>
  );
}
