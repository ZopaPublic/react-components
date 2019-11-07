import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import grid, { TGridBreakpoints } from '../../../constants/grid';

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

const genHidden = (breakpoint: TGridBreakpoints) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: none;
  }
`;

const genFillWidth = (breakpoint: TGridBreakpoints) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const genAutoWidth = (breakpoint: TGridBreakpoints) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
`;

const genRelativeWidth = (breakpoint: TGridBreakpoints, colWidth: TColWidth, cols: IFlexColProps['cols']) => css`
  @media (min-width: ${grid.breakpoints[breakpoint]}px) {
    display: block;
    ${typeof colWidth === 'number' && typeof cols === 'number'
      ? `
    flex: 0 0 ${(colWidth / cols) * 100}%;
    max-width: ${(colWidth / cols) * 100}%;
    `
      : null}
  }
`;

const getWidth = (breakpoint: TGridBreakpoints, colWidth: TColWidth, cols: IFlexColProps['cols']) => {
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
      .sort((a, b) => {
        // Note: TS infers `a` and `b` as strings, hence the type assertion here.
        return grid.breakpoints[a as TGridBreakpoints] - grid.breakpoints[b as TGridBreakpoints];
      })
      .filter(breakpoint => Object.keys(props).includes(breakpoint))
      .map(breakpoint => {
        // Note: TS infers `breakpoint` as string again... hence more type assertion here.
        const colWidth = props[breakpoint as TGridBreakpoints] || 'auto';
        return getWidth(breakpoint as TGridBreakpoints, colWidth, props.cols);
      })}
`;

const FlexCol: FC<IFlexColProps> = props => <StyledFlexCol {...props} />;

FlexCol.defaultProps = {
  align: 'auto',
};

export default FlexCol;
