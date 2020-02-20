import React, { FC } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, INeutralColorSpec } from '../../../constants/colors';
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
   */
  size?: THeadingSizes;
  /**
   * Whether to add some margin below the rendered heading or not. Applied by default.
   */
  mb?: boolean;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Text />`.
   */
  color?: INeutralColorSpec['white'] | INeutralColorSpec['nearDark'] | INeutralColorSpec['dark'];
}

const Heading = styled.h1<IStyledHeadingProps>`
  color: ${({ color = colors.neutral.dark }) => color};
  
  font-size: ${({ as, size }) => (as === 'span' || size ? headingSizes[size || 'h4'] : headingSizes[as])};
  ${({ as }) => as === 'h1' && maxMedia.phone`font-size: 32px;`}
  ${({ as }) => as === 'span' && `display: block;`}

  
  font-family: ${typography.primary};
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.heading};
  letter-spacing: -0.5px;
  margin: 0;

  ${({ mb = true }) => mb && 'margin-bottom: 24px'};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistHeading: FC<IStyledHeadingProps> = props => <Heading {...props} />;

export default Heading;
