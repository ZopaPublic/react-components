import React, { FC } from 'react';
import styled from 'styled-components';
import FlexCol, { FlexColProps } from '../../../layout/FlexCol/FlexCol';

const StyledFlexCol = styled(FlexCol)`
  text-align: center;
`;

const SlideContent = styled.div<{ minHeight?: number }>`
  ${({ minHeight }) => {
    if (minHeight !== undefined) {
      return `min-height: ${minHeight}px`;
    }
  }}
`;

export type SlideProps = FlexColProps & {
  index?: number;
  minHeight?: number;
  slidesCount?: number;
  activeSlide?: number;
};

const Slide: FC<SlideProps> = ({ index, minHeight = 150, slidesCount, activeSlide, children, ...rest }) => {
  const isActive = index === activeSlide;

  return (
    <StyledFlexCol xs={isActive ? slidesCount : 'hidden'} m={1} align="flex-start" {...rest}>
      <SlideContent minHeight={minHeight}>{children}</SlideContent>
    </StyledFlexCol>
  );
};

export default Slide;
