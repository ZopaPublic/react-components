import { grid } from '../../../constants';
import styled, { css } from 'styled-components';
import React, { FC, HTMLAttributes } from 'react';
import { Colors } from '../../../constants/colors';
import { useThemeContext, AppThemeProps, AppTheme } from '../../styles/Theme';

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export interface StyledHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The HTML5 tag you want to render your heading, it's used to determine the size of the heading as well.
   */
  as: HeadingTags;
  /**
   * Override the default size assigned to the rendered HTML tag.
   * @default `as`
   */
  size?: keyof AppTheme['typography']['heading']['sizes'];
  /**
   * Accepts a subset of the Zopa brand colors by default. Same as the ones accepted by `<Text />`.
   * @default `colors.greyDarkest`
   */
  color?: Colors['white'] | Colors['grey'] | Colors['greyDarkest'] | string;
  /**
   * Where the rendered text should be aligned to.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'right' | 'center';
}

const StyledHeading = styled.h1<StyledHeadingProps & AppThemeProps>`
  ${({ as, size, theme }) => {
    const tag = size || (as === 'span' ? 'h4' : as);
    return css`
      font-size: ${theme.typography.heading.sizes[tag]};
      line-height: ${theme.typography.lineHeight[tag]};
      letter-spacing: ${theme.typography.letterSpacingMap[tag]};
    `;
  }};

  margin: 0;
  color: ${({ color, theme }) => color || theme.typography.text.color};
  display: ${({ as }) => (as === 'span' ? 'block' : undefined)};
  text-align: ${({ align = 'inherit' }) => align};
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ as, theme }) => theme.typography.weights[['h1', 'display'].includes(as) ? 'extraBold' : 'bold']};

  ${({ as, size, theme }) =>
    as === 'h1' &&
    size === 'display' &&
    css`
      @media screen and (max-width: ${grid.breakpoints.l}px) {
        font-size: ${theme.typography.heading.sizes['h2']};
        line-height: ${theme.typography.lineHeight['h2']};
        letter-spacing: ${theme.typography.letterSpacingMap['h2']};
        font-weight: ${theme.typography.weights['bold']};
      }
    `}
`;

export const Heading: FC<StyledHeadingProps> = (props) => {
  const theme = useThemeContext();
  return <StyledHeading {...props} theme={theme} />;
};

export default Heading;
