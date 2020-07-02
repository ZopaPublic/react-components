import { css } from 'styled-components';
import { spacing as spacingSizes, grid } from '../../constants';
import { GridBreakpoints } from '../../constants/grid';
import { Spacing } from '../../constants/spacing';

type SpacingTypes = 'margin' | 'padding';

const createTopLevelSizes = (type: SpacingTypes) => {
  const sizes: Spacing = type === 'margin' ? { ...spacingSizes, auto: 'auto' } : spacingSizes;

  return Object.keys(sizes).reduce(
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
        [`${type}Right`]: sizes[size],
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
};

const createResponsiveSizes = (type: SpacingTypes) => {
  const sizes: Spacing = type === 'margin' ? { ...spacingSizes, auto: 'auto' } : spacingSizes;

  return Object.keys(grid.breakpoints)
    .filter((v) => v !== 'xs')
    .reduce(
      (mediaQueries, breakpoint) => ({
        ...mediaQueries,
        [`@media screen and (min-width: ${grid.breakpoints[breakpoint as GridBreakpoints]}px)`]: {
          ...Object.keys(sizes).reduce(
            (classNames, size) => ({
              ...classNames,
              [`.${breakpoint}\\:${type[0]}-${size}`]: {
                [type]: sizes[size],
              },
              [`.${breakpoint}\\:${type[0]}y-${size}`]: {
                [`${type}Top`]: sizes[size],
                [`${type}Bottom`]: sizes[size],
              },
              [`.${breakpoint}\\:${type[0]}x-${size}`]: {
                [`${type}Right`]: sizes[size],
                [`${type}Left`]: sizes[size],
              },
              [`.${breakpoint}\\:${type[0]}t-${size}`]: {
                [`${type}Top`]: sizes[size],
              },
              [`.${breakpoint}\\:${type[0]}r-${size}`]: {
                [`${type}Right`]: sizes[size],
              },
              [`.${breakpoint}\\:${type[0]}b-${size}`]: {
                [`${type}Bottom`]: sizes[size],
              },
              [`.${breakpoint}\\:${type[0]}l-${size}`]: {
                [`${type}Left`]: sizes[size],
              },
            }),
            {},
          ),
        },
      }),
      {},
    );
};

export const spacing = css`
  ${css(createTopLevelSizes('margin'))}
  ${css(createResponsiveSizes('margin'))}
  ${css(createTopLevelSizes('padding'))}
  ${css(createResponsiveSizes('padding'))}
`;
