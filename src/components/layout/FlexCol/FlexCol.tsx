import React from 'react';
import styled, { css } from 'styled-components';
import grid from '../../../constants/grid';

export type TAlignSelf = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'auto';
export type TColWidth = number | 'fill' | 'auto' | 'hidden';

export interface IFlexColProps {
  align?: TAlignSelf;
  cols?: number;
  gutter?: number;
  l?: TColWidth;
  m?: TColWidth;
  s?: TColWidth;
  xl?: TColWidth;
  xs?: TColWidth;
}

export interface IFlexCol extends React.HTMLAttributes<HTMLDivElement>, IFlexColProps {}

const genHidden = breakpoint => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: none;
  }
`;

const genFillWidth = breakpoint => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const genAutoWidth = breakpoint => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
`;

const genRelativeWidth = (breakpoint, colWidth, cols) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex: 0 0 ${(colWidth / cols) * 100}%;
    max-width: ${(colWidth / cols) * 100}%;
  }
`;

const getWidth = (breakpoint, colWidth, cols) => {
  if (colWidth === 'hidden') {
    return genHidden(breakpoint);
  }
  if (colWidth === 'auto') {
    return genAutoWidth(breakpoint);
  }
  if (colWidth === 'fill') {
    return genFillWidth(breakpoint);
  }
  return genRelativeWidth(breakpoint, colWidth, cols);
};

const StyledFlexCol = styled.div<IFlexCol>`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${({ gutter }) => gutter}px;
  padding-left: ${({ gutter }) => gutter}px;
  align-self: ${({ align }) => align};
  ${props =>
    Object.keys(grid.breakpoints)
      .sort((a, b) => grid.breakpoints[a] - grid.breakpoints[b])
      .filter(breakpoint => Object.keys(props).includes(breakpoint))
      .map(breakpoint => getWidth(breakpoint, props[breakpoint], props.cols))}
`;

const FlexCol = props => <StyledFlexCol {...props} />;

FlexCol.defaultProps = {
  align: 'auto',
};

export default FlexCol;
