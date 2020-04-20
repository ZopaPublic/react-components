import { css, createGlobalStyle } from 'styled-components';
import { spacing as sizes } from '../../constants/spacing';
import grid, { TGridBreakpoints } from '../../constants/grid';

type TSpacingPositions = 't' | 'r' | 'b' | 'l';
type TSpacingPositionNames = 'top' | 'right' | 'bottom' | 'left';
type TSpacingTypes = 'margin' | 'padding';
type TSpacingBuilderCallback = (pos: string, index: number, position: string, size: number) => string;

const positions: Record<TSpacingPositions, TSpacingPositionNames> = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
};

const spacingCssFactory = (callback: TSpacingBuilderCallback): string =>
  Object.keys(positions)
    .map(shortHandPosition =>
      sizes
        .map((sizingValue, sizingIndex) =>
          callback(shortHandPosition, sizingIndex, positions[shortHandPosition as TSpacingPositions], sizingValue),
        )
        .join(' '),
    )
    .join(' ');

const spacing = (type: TSpacingTypes) => css`
  ${spacingCssFactory(
    (shortHandPosition, sizingIndex, position, sizingValue) =>
      `.${type.substr(0, 1)}${shortHandPosition}-${sizingIndex} { ${type}-${position}: ${sizingValue}px; }`,
  )}

  ${Object.keys(grid.breakpoints)
    .map(
      breakpoint => `
      @media screen and (min-width: ${grid.breakpoints[breakpoint as TGridBreakpoints]}px) {
        ${spacingCssFactory(
          (shortHandPosition, sizingIndex, position, sizingValue) => `
        .${breakpoint as TGridBreakpoints}${CSS.escape(':')}${type.substr(0, 1)}${shortHandPosition}-${sizingIndex} {
          ${type}-${position}: ${sizingValue}px;
        }
      `,
        )}
      }
    `,
    )
    .join(' ')}
`;

export const Margin = createGlobalStyle`${spacing('margin')}`;
export const Padding = createGlobalStyle`${spacing('padding')}`;
