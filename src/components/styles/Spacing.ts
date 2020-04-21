import { css } from 'styled-components';
import { spacing as sizes } from '../../constants/spacing';
import grid, { TGridBreakpoints } from '../../constants/grid';

type TSpacingPositionNames = 'top' | 'right' | 'bottom' | 'left' | 'x' | 'y';
type TSpacingTypes = 'margin' | 'padding';
type TSpacingFactoryCallback = (pos: string, index: number, position: string, size: number) => string;

const positions: TSpacingPositionNames[] = ['top', 'right', 'bottom', 'left', 'x', 'y'];

const spacingCssFactory = (callback: TSpacingFactoryCallback): string =>
  sizes
    .map((sizingValue, sizingIndex) =>
      positions.map(position => callback(position.substr(0, 1), sizingIndex, position, sizingValue)).join(''),
    )
    .join(' ');

const propertyFactory = (type: TSpacingTypes, sizingValue: number, position: string): string => {
  if (position == 'y') {
    return `
        ${type}-top: ${sizingValue}px;
        ${type}-bottom: ${sizingValue}px;
      `;
  }

  if (position == 'x') {
    return `
        ${type}-left: ${sizingValue}px;
        ${type}-right: ${sizingValue}px;
      `;
  }

  return `${type}-${position}: ${sizingValue}px;`;
};

export const spacing = (type: TSpacingTypes) => css`

  ${sizes
    .map((sizingValue, sizingIndex) => `.${type.substr(0, 1)}-${sizingIndex} { ${type}: ${sizingValue}px; }`)
    .join('')}

  ${spacingCssFactory(
    (shortHandPosition, sizingIndex, position, sizingValue) => `
      .${type.substr(0, 1)}${shortHandPosition}-${sizingIndex} {
        ${propertyFactory(type, sizingValue, position)}
      }`,
  )}

  ${Object.keys(grid.breakpoints)
    .map(
      breakpoint => `
      @media screen and (min-width: ${grid.breakpoints[breakpoint as TGridBreakpoints]}px) {

        ${sizes
          .map(
            (sizingValue, sizingIndex) =>
              `.${breakpoint as TGridBreakpoints}${CSS.escape(':')}${type.substr(
                0,
                1,
              )}-${sizingIndex} { ${type}: ${sizingValue}px; }`,
          )
          .join('')}

        ${spacingCssFactory(
          (shortHandPosition, sizingIndex, position, sizingValue) => `
        .${breakpoint as TGridBreakpoints}${CSS.escape(':')}${type.substr(0, 1)}${shortHandPosition}-${sizingIndex} {
          ${propertyFactory(type, sizingValue, position)}
        }
      `,
        )}
      }
    `,
    )
    .join(' ')}
`;
