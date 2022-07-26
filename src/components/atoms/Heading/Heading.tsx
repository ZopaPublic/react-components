import { grid } from '../../../constants';
import styled, { css } from 'styled-components';
import React, { HTMLAttributes } from 'react';
import { Colors } from '../../../constants/colors';
import { useThemeContext, AppThemeProps, AppTheme } from '../../styles/Theme';

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export interface OptionalHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
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

interface HeadingPropsWithAs extends OptionalHeadingProps {
  children?: React.ReactNode;
  /**
   * The HTML5 tag you want to render your heading, it's used to determine the size of the heading as well.
   * @default 'required if 'forwardedAs' is not provided.'
   */
  as: HeadingTags;
}

interface HeadingPropsWithForwardedAs extends OptionalHeadingProps {
  /**
   * The HTML5 tag you want to render your heading, it's used to determine the size of the heading as well.
   * To be used if Component has been wrapped in styled components.
   * @default 'required if 'as' is not provided.'
   */
  forwardedAs: HeadingTags;
}

export type HeadingProps = HeadingPropsWithAs | HeadingPropsWithForwardedAs;

const StyledHeading = styled.h1<HeadingPropsWithAs & AppThemeProps>`
  ${({ as, size, theme }) => {
    if (as) {
      const tag = size || (as === 'span' ? 'h4' : as);
      return css`
        font-size: ${theme.typography.heading.sizes[tag]};
        line-height: ${theme.typography.lineHeight[tag]};
        letter-spacing: ${theme.typography.letterSpacingMap[tag]};
      `;
    }
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

export const Heading = (props: HeadingProps) => {
  const theme = useThemeContext();
  const headingProps = props as HeadingPropsWithAs;
  if (!headingProps?.as) {
    console.warn('Heading component is missing the as prop');
  }
  return <StyledHeading {...headingProps} theme={theme} />;
};

export default Heading;
