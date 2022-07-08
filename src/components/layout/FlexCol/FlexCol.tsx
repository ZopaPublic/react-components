import React from 'react';
import styled, { css } from 'styled-components';
import { grid } from '../../../constants';
import { GridBreakpoints } from '../../../constants/grid';

export type AlignSelf = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'auto';
export type ColWidth = number | 'fill' | 'auto' | 'hidden';

export interface FlexColProps {
  align?: AlignSelf;
  cols?: number;
  gutter?: number;
  l?: ColWidth;
  m?: ColWidth;
  s?: ColWidth;
  xl?: ColWidth;
  xs?: ColWidth;
}

export interface FlexCol extends React.HTMLAttributes<HTMLDivElement>, FlexColProps {}

const genHidden = (breakpoint: GridBreakpoints) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: none;
  }
`;

const genFillWidth = (breakpoint: GridBreakpoints) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const genAutoWidth = (breakpoint: GridBreakpoints) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
`;

const genRelativeWidth = (breakpoint: GridBreakpoints, colWidth: ColWidth, cols: FlexColProps['cols']) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    ${typeof colWidth === 'number' && typeof cols === 'number'
      ? `
    flex: 0 0 ${(colWidth / cols) * 100}%;
    max-width: ${(colWidth / cols) * 100}%;
    `
      : null};
  }
`;

const getWidth = (breakpoint: GridBreakpoints, colWidth: ColWidth, cols: FlexColProps['cols']) => {
  switch (colWidth) {
    case 'hidden':
      return genHidden(breakpoint);
    case 'auto':
      return genAutoWidth(breakpoint);
    case 'fill':
      return genFillWidth(breakpoint);
    default:
      return genRelativeWidth(breakpoint, colWidth, cols);
  }
};

const StyledFlexCol = styled.div<FlexCol>`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${({ gutter }) => gutter}px;
  padding-left: ${({ gutter }) => gutter}px;
  align-self: ${({ align }) => align};
  ${(props) =>
    Object.keys(grid.breakpoints)
      .sort((a, b) => {
        // Note: TS infers `a` and `b` as strings, hence the type assertion here.
        return grid.breakpoints[a as GridBreakpoints] - grid.breakpoints[b as GridBreakpoints];
      })
      .filter((breakpoint) => Object.keys(props).includes(breakpoint))
      .map((breakpoint) => {
        // Note: TS infers `breakpoint` as string again... hence more type assertion here.
        const colWidth = props[breakpoint as GridBreakpoints] || 'auto';
        return getWidth(breakpoint as GridBreakpoints, colWidth, props.cols);
      })}
`;

const FlexCol = ({ align = 'auto', ...rest }: FlexCol) => <StyledFlexCol {...rest} align={align} />;

export default FlexCol;
