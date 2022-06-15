import React, { ReactElement } from 'react';
import Text from '../../../atoms/Text/Text';
import { colors } from '../../../../constants';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../constants';
import Heading from '../../../atoms/Heading/Heading';
import { useThemeContext } from '../../../styles/Theme';
import { useViewport } from '../../../../hooks/useViewport';
import { minMedia } from '../../../../helpers/responsiveness';

interface ProductTemplateTitleProps {
  title?: string;
  subtitle?: string;
  content?: ReactElement;
  dataAutomation?: string;
}

const ProductTemplateTitleBackground = styled.header`
  background-color: ${({ theme }) => theme?.productTemplate?.title?.backgroundColor ?? colors.greyLightest};
  ${minMedia.desktop`
    ${css`
      border-radius: 12px;
    `}
  `}
`;

const ProductTemplateTitleContainer = styled.div.attrs({
  className: 'px-0 m:px-4',
})`
  margin: 0 auto;
`;

const ProductTemplateTitleInnerContainer = styled.div`
  padding-bottom: 195px;
`;

const ProductTemplateTitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 612px;
`;

export function ProductTemplateTitle({
  title,
  subtitle,
  content,
  dataAutomation = 'ZA.ProductTemplateTitle',
}: ProductTemplateTitleProps) {
  const { width = 0 } = useViewport();
  const theme = useThemeContext();
  return (
    <ProductTemplateTitleBackground data-automation={dataAutomation} theme={theme}>
      <ProductTemplateTitleContainer>
        <ProductTemplateTitleInnerContainer className="pt-7 m:pt-9 mx-6 m:mx-0">
          {title && (
            <Heading as="h1" size={width > breakpoints.phone ? 'h1' : 'h2'} align="center">
              {title}
            </Heading>
          )}
          <ProductTemplateTitleWrapper>
            {subtitle && (
              <Text as="p" size="lead" align="center" className="mt-4">
                {subtitle}
              </Text>
            )}
          </ProductTemplateTitleWrapper>
          {content}
        </ProductTemplateTitleInnerContainer>
      </ProductTemplateTitleContainer>
    </ProductTemplateTitleBackground>
  );
}
