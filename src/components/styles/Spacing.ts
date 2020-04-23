import { css } from 'styled-components';
import { spacing as sizes } from '../../constants/spacing';
import grid, { TGridBreakpoints } from '../../constants/grid';

type TSpacingTypes = 'margin' | 'padding';

const createTopLevelSizes = (type: TSpacingTypes) =>
  Object.keys(sizes).reduce(
    (classNames, size) => ({
      ...classNames,
      [`.${type[0]}-${size}`]: {
        [type]: sizes[size],
      },
      [`.${type[0]}y-${size}`]: {
        [`${type}Top`]: sizes[size],
        [`${type}Bottom`]: sizes[size],
      },
      [`.${type[0]}x-${size}`]: {
        [`${type}Right`]: sizes[size],
        [`${type}Left`]: sizes[size],
      },
      [`.${type[0]}t-${size}`]: {
        [`${type}Top`]: sizes[size],
      },
      [`.${type[0]}r-${size}`]: {
        marginRight: sizes[size],
      },
      [`.${type[0]}b-${size}`]: {
        [`${type}Bottom`]: sizes[size],
      },
      [`.${type[0]}l-${size}`]: {
        [`${type}Left`]: sizes[size],
      },
    }),
    {},
  );

const createResponsiveSizes = (type: TSpacingTypes) =>
  Object.keys(grid.breakpoints).reduce(
    (mediaQueries, breakpoint) => ({
      ...mediaQueries,
      [`@media screen and (min-width: ${grid.breakpoints[breakpoint as TGridBreakpoints]}px)`]: {
        ...Object.keys(sizes).reduce(
          (classNames, size) => ({
            ...classNames,
            [`.${breakpoint}${CSS.escape(':')}${type[0]}-${size}`]: {
              [type]: sizes[size],
            },
            [`.${breakpoint}${CSS.escape(':')}${type[0]}y-${size}`]: {
              [`${type}Top`]: sizes[size],
              [`${type}Bottom`]: sizes[size],
            },
            [`.${breakpoint}${CSS.escape(':')}${type[0]}x-${size}`]: {
              [`${type}Right`]: sizes[size],
              [`${type}Left`]: sizes[size],
            },
            [`.${breakpoint}${CSS.escape(':')}${type[0]}t-${size}`]: {
              [`${type}Top`]: sizes[size],
            },
            [`.${breakpoint}${CSS.escape(':')}${type[0]}r-${size}`]: {
              [`${type}Right`]: sizes[size],
            },
            [`.${breakpoint}${CSS.escape(':')}${type[0]}b-${size}`]: {
              [`${type}Bottom`]: sizes[size],
            },
            [`.${breakpoint}${CSS.escape(':')}${type[0]}l-${size}`]: {
              [`${type}Left`]: sizes[size],
            },
          }),
          {},
        ),
      },
    }),
    {},
  );

export const spacing = css`
  ${css(createTopLevelSizes('margin'))}
  ${css(createResponsiveSizes('margin'))}
  ${css(createTopLevelSizes('padding'))}
  ${css(createResponsiveSizes('padding'))}
`;
