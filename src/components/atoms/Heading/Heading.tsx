import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, Colors } from '../../../constants/colors';
import grid from '../../../constants/grid';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export interface StyledHeadingProps {
  /**
   * The HTML5 tag you want to render your heading, it's used to determine the size of the heading as well.
   */
  as: HeadingTags;
  /**
   * Override the default size assigned to the rendered HTML tag.
   * @default `as`
   */
  size?: keyof typeof typography.sizes.heading;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Text />`.
   * @default `colors.greyDarkest`
   */
  color?: Colors['white'] | Colors['grey'] | Colors['greyDarkest'];
  /**
   * Where the rendered text should be aligned to.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'right' | 'center';
}

const {
  sizes: { heading: headingSizes },
} = typography;

const lineHeightMap = {
  display: '76px',
  h1: '54px',
  h2: '46px',
  h3: '36px',
  h4: '32px',
  h5: '26px',
  h6: '20px',
};

const letterSpacingMap = {
  display: '-2.86px',
  h1: '-1.25px',
  h2: '-0.85px',
  h3: '-0.45px',
  h4: '-0.25px',
  h5: '-0.02px',
  h6: '-0.01px',
};

const Heading = styled.h1<StyledHeadingProps>`
  ${({ as, size }) => {
    const tag = size || (as === 'span' ? 'h4' : as);
    return css`
      font-size: ${headingSizes[tag]};
      line-height: ${lineHeightMap[tag]};
      letter-spacing: ${letterSpacingMap[tag]};
    `;
  }};

  margin: 0;
  color: ${({ color = colors.greyDarkest }) => color};
  display: ${({ as }) => (as === 'span' ? 'block' : undefined)};
  text-align: ${({ align = 'inherit' }) => align};
  font-family: ${typography.primary};
  font-weight: ${({ as }) => typography.weights[['h1', 'display'].includes(as) ? 'extraBold' : 'bold']};

  ${({ as, size }) =>
    as === 'h1' &&
    size === 'display' &&
    css`
      @media screen and (max-width: ${grid.breakpoints.l}px) {
        font-size: ${headingSizes['h2']};
        line-height: ${lineHeightMap['h2']};
        letter-spacing: ${letterSpacingMap['h2']};
        font-weight: ${typography.weights['bold']};
      }
    `}
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistHeading: FC<StyledHeadingProps> = props => <Heading {...props} />;

export default Heading;
