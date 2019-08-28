import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { typography } from '../../../constants/typography';
import { colors, THeadingHexColors } from '../../../constants/colors';

const {
  sizes: { heading: headingSizes },
} = typography;

interface IStyledHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The HTML5 tag you want to render your heading, it's used to determine the size of the heading as well.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Whether to add some margin below the rendered heading or not. Applied by default.
   */
  mb?: boolean;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Text />`.
   */
  color?: THeadingHexColors;
}

const StyledHeading = styled(Text)<IStyledHeadingProps>`
  color: ${({ color = colors.neutral.dark }) => color};
  font-size: ${({ as }) => headingSizes[as]};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.semibold};
  line-height: ${typography.lineHeights.heading};
  letter-spacing: -0.5px;
  margin: 0;

  ${({ mb = true }) => mb && 'margin-bottom: 24px'};
`;

const Heading: FC<IStyledHeadingProps> = props => <StyledHeading {...props} />;

export default Heading;
