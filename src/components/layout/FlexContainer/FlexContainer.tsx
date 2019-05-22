import React from 'react';
import styled from 'styled-components';
import grid from '../../../constants/grid';

export interface IFlexContainerProps {
  gutter?: number;
}

export interface IFlexContainer extends React.HTMLAttributes<HTMLDivElement>, IFlexContainerProps {}

const defaultProps: Partial<IFlexContainer> = {
  gutter: grid.gutter,
};

const StyledFlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  max-width: 100%;
  padding-right: ${props => props.gutter}px;
  padding-left: ${props => props.gutter}px;
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

const FlexContainer = (props: IFlexContainer) => <StyledFlexContainer {...props} />;
FlexContainer.defaultProps = defaultProps;

export default FlexContainer;
