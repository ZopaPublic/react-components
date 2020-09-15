import React from 'react';
import styled from 'styled-components';

import { breakpoints, colors, Heading, Text, useViewport } from '../../../index';

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

export function ProductTemplateHeader(props: ProductTemplateHeaderProps) {
  const { width = 0 } = useViewport();
  return (
    <ProductTemplateHeaderBackground data-automation={props['data-automation'] ?? 'PAGE_HEADER'}>
      <ProductTemplateHeaderContainer>
        <ProductTemplateHeaderInnerContainer className="pt-7 mx-6 m:mx-0">
          {props.title && (
            <Heading as="h1" size={width > breakpoints.phone ? 'h1' : 'h2'} align="center">
              {props.title}
            </Heading>
          )}
          {props.subtitle ? (
            <Text as="p" size="lead" align="center" className="mt-4">
              {props.subtitle}
            </Text>
          ) : null}
        </ProductTemplateHeaderInnerContainer>
      </ProductTemplateHeaderContainer>
    </ProductTemplateHeaderBackground>
  );
}
