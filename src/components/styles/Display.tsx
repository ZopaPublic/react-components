import { css } from 'styled-components';
import { grid } from '../../constants';
import { GridBreakpoints } from '../../constants/grid';

const displayProperties = [
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'table',
  'inline-table',
  'table-caption',
  'table-cell',
  'table-column',
  'table-column-group',
  'table-footer-group',
  'table-header-group',
  'table-row-group',
  'table-row',
  'flow-root',
  'grid',
  'inline-grid',
  'contents',
  'list-item',
  'none',
];

/**
 * Build ClassNames for display properties
 */
const createTopLevelDisplay = () =>
  displayProperties.reduce(
    (acc, property) => ({
      ...acc,
      [`.${property === 'none' ? 'hidden' : property}`]: { display: property },
    }),
    {},
  );

/**
 * Build ClassNames for display properties
 * at different breakpoints
 */
const createResponsiveDisplay = () =>
  Object.keys(grid.breakpoints)
    .filter((v) => v !== 'xs')
    .reduce(
      (mediaQueries, breakpoint) => ({
        ...mediaQueries,
        [`@media screen and (min-width: ${grid.breakpoints[breakpoint as GridBreakpoints]}px)`]: {
          ...displayProperties.reduce(
            (acc, property) => ({
              ...acc,
              [`.${breakpoint}\\:${property === 'none' ? 'hidden' : property}`]: { display: property },
            }),
            {},
          ),
        },
      }),
      {},
    );

export const display = css`
  ${css(createTopLevelDisplay())}
  ${css(createResponsiveDisplay())}
`;
