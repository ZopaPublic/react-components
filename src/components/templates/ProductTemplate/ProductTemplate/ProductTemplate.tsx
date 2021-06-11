import React, { MouseEventHandler, ReactElement } from 'react';
import classnames from 'classnames';

import { ProgressProps } from '../../../molecules/Progress/Progress';
import { ProductTemplateTitle } from '../ProductTemplateTitle/ProductTemplateTitle';
import { ProductTemplateHeader } from '../ProductTemplateHeader/ProductTemplateHeader';
import FlexContainer from '../../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import styled from 'styled-components';
import grid from '../../../../constants/grid';

export interface ProductTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  content?: ReactElement;
  prevStep?: ReactElement | string;
  progress?: Pick<ProgressProps, 'currentStep' | 'totalSteps'>;
  contentWidth?: number;
  onBackPressed?: MouseEventHandler<HTMLAnchorElement>;
}

function overlayElementAbove(marginTop: number) {
  return `
    margin-top: -${marginTop - 24}px;
    @media (min-width: ${grid.breakpoints.m}px) {
      margin-top: -${marginTop}px;
    }
    `;
}

const StyledFlexRow = styled(FlexRow)<{ hasTitle: boolean }>(({ hasTitle }) =>
  hasTitle ? 'margin-top: -160px' : overlayElementAbove(227),
);

function ProductTemplate({
  title,
  subtitle,
  content,
  children,
  prevStep,
  progress,
  onBackPressed,
  contentWidth = 6,
}: ProductTemplateProps) {
  const containerClassnames = classnames('mb-8 m:mb-9 m:mt-8', {
    'mt-6': !prevStep,
    'mt-4': prevStep,
  });

  const showHeader = !!prevStep || !!onBackPressed || !!progress;

  return (
    <FlexContainer data-automation="ZA.ProductTemplate" className={containerClassnames} gutter={0}>
      <FlexRow gutter={0}>
        {showHeader ? (
          <FlexCol>
            <ProductTemplateHeader prevStep={prevStep} progress={progress} onBackPressed={onBackPressed} />
          </FlexCol>
        ) : null}
        <FlexCol>
          <ProductTemplateTitle title={title} subtitle={subtitle} content={content} />
        </FlexCol>
        <FlexCol>
          <StyledFlexRow hasTitle={!!title || !!subtitle} justify="center" gutter={0}>
            <FlexCol m={10} xl={contentWidth}>
              {children}
            </FlexCol>
          </StyledFlexRow>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}

export default ProductTemplate;
