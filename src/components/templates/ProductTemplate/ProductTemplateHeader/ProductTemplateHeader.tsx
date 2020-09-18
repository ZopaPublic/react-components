import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { useViewport } from '../../../../hooks/useViewport';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';

interface ProductTemplateHeaderProps {
  title: string;
  subtitle?: string;
  ['data-automation']?: string;
}

const ProductTemplateHeaderBackground = styled.header`
  background-color: ${colors.greyLightest};
  /* Make the following element overlay the ProductHeader by 160px */
  margin-bottom: -160px;
  border-radius: 12px;
`;

const ProductTemplateHeaderContainer = styled.div.attrs({
  className: 'px-0 m:px-4',
})`
  max-width: 612px;
  margin: 0 auto;
`;

const ProductTemplateHeaderInnerContainer = styled.div`
  padding-bottom: 195px;
`;

export function ProductTemplateHeader({
  title,
  subtitle,
  'data-automation': dataAutomation = 'PAGE_HEADER',
}: ProductTemplateHeaderProps) {
  const { width = 0 } = useViewport();
  return (
    <ProductTemplateHeaderBackground data-automation={dataAutomation}>
      <ProductTemplateHeaderContainer>
        <ProductTemplateHeaderInnerContainer className="pt-7 mx-6 m:mx-0">
          {title && (
            <Heading as="h1" size={width > breakpoints.phone ? 'h1' : 'h2'} align="center">
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text as="p" size="lead" align="center" className="mt-4">
              {subtitle}
            </Text>
          )}
        </ProductTemplateHeaderInnerContainer>
      </ProductTemplateHeaderContainer>
    </ProductTemplateHeaderBackground>
  );
}
