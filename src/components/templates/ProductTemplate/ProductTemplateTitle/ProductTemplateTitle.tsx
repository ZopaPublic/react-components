import React from 'react';
import styled, { css } from 'styled-components';

import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { useViewport } from '../../../../hooks/useViewport';
import Heading from '../../../atoms/Heading/Heading';
import Text from '../../../atoms/Text/Text';
import { minMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateTitleProps {
  title: string;
  subtitle?: string;
  dataAutomation?: string;
}

const ProductTemplateTitleBackground = styled.header`
  background-color: ${colors.greyLightest};
  /* Make the following element overlay the ProductTitle by 160px */
  margin-bottom: -160px;
  ${minMedia.desktop`
    ${css`
      border-radius: 12px;
    `}
  `}
`;

const ProductTemplateTitleContainer = styled.div.attrs({
  className: 'px-0 m:px-4',
})`
  max-width: 612px;
  margin: 0 auto;
`;

const ProductTemplateTitleInnerContainer = styled.div`
  padding-bottom: 195px;
`;

export function ProductTemplateTitle({
  title,
  subtitle,
  dataAutomation = 'ZA.ProductTemplateTitle',
}: ProductTemplateTitleProps) {
  const { width = 0 } = useViewport();
  return (
    <ProductTemplateTitleBackground data-automation={dataAutomation}>
      <ProductTemplateTitleContainer>
        <ProductTemplateTitleInnerContainer className="pt-7 m:pt-9 mx-6 m:mx-0">
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
        </ProductTemplateTitleInnerContainer>
      </ProductTemplateTitleContainer>
    </ProductTemplateTitleBackground>
  );
}
