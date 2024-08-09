import classnames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import { grid } from '../../../constants';
import { useThemeContext } from '../../styles/Theme';

export interface FlexContainerGutter {
  gutter?: number;
  enableClassname?: boolean;
}

export interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement>, FlexContainerGutter {}

const StyledFlexContainer = styled.div<FlexContainerProps>`
  width: 100%;
  max-width: 100%;
  padding-right: ${(props) => props.gutter}px;
  padding-left: ${(props) => props.gutter}px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${grid.breakpoints.s}px) {
    max-width: ${grid.width.s}px;
  }
  @media (min-width: ${grid.breakpoints.m}px) {
    max-width: ${grid.width.m}px;
  }
  @media (min-width: ${grid.breakpoints.l}px) {
    max-width: ${grid.width.l}px;
  }
  @media (min-width: ${grid.breakpoints.xl}px) {
    max-width: ${grid.width.xl}px;
  }
`;

const FlexContainer = ({ gutter = grid.gutter, enableClassname = false, ...rest }: FlexContainerProps) => {
  const themeContext = useThemeContext();
  return (
    <StyledFlexContainer
      gutter={gutter}
      className={enableClassname ? classnames(themeContext.flexContainer?.className) : undefined}
      {...rest}
    />
  );
};

export default FlexContainer;
