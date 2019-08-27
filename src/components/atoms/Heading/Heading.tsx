import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { typography } from '../../../constants/typography';

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
   * @default false
   */
  mb?: boolean;
}

const StyledHeading = styled(Text)<IStyledHeadingProps>`
  font-size: ${({ as }) => headingSizes[as]};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.bold};
  line-height: ${typography.lineHeights.heading};
  letter-spacing: -0.5px;
  margin: 0;

  ${({ mb = true }) => mb && 'margin-bottom: 24px'};
`;

const Heading: FC<IStyledHeadingProps> = props => <StyledHeading {...props} />;

export default Heading;
