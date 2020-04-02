import React, { FC } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, TColors } from '../../../constants/colors';
import { maxMedia } from '../../../helpers/responsiveness';

const {
  sizes: { heading: headingSizes },
} = typography;

type THeadingSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IStyledHeadingProps {
  /**
   * The HTML5 tag you want to render your heading, it's used to determine the size of the heading as well.
   */
  as: THeadingSizes | 'span';
  /**
   * Override the default size assigned to the rendered HTML tag.
   * @default `as`
   */
  size?: THeadingSizes | 'display';
  /**
   * Whether to add some margin below the rendered heading or not. Applied by default.
   * @default true
   */
  mb?: boolean;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Text />`.
   * @default `colors.greyDarkest`
   */
  color?: TColors['white'] | TColors['grey'] | TColors['greyDarkest'];
}

const isExtraBold = (tag: THeadingSizes | 'span') => ['h1', 'display'].includes(tag);

const Heading = styled.h1<IStyledHeadingProps>`
  color: ${({ color = colors.greyDarkest }) => color};
  
  font-size: ${({ as, size }) => {
    if (as === 'span') return headingSizes[size || 'h4'];
    return headingSizes[size || as];
  }};

  line-height: ${({ size = '', as }) => {
    if (size === 'display' || ['h1', 'h2'].includes(as)) return typography.lineHeights.small;
    return typography.lineHeights.medium;
  }};

  ${({ as }) => as === 'h1' && maxMedia.phone`font-size: 32px;`}
  ${({ as }) => as === 'span' && `display: block;`}
  
  font-family: ${typography.primary};
  font-weight: ${({ as }) => (isExtraBold(as) ? typography.weights.extraBold : typography.weights.bold)};
  letter-spacing: -0.5px;
  margin: 0;

  ${({ mb = true }) => mb && 'margin-bottom: 24px'};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistHeading: FC<IStyledHeadingProps> = props => <Heading {...props} />;

export default Heading;
