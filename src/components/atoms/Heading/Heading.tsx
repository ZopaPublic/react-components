import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { typography } from '../../../constants/typography';

const {
  sizes: { heading: headingSizes },
} = typography;

interface IStyledHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4';
}

const StyledHeading = styled(Text)<IStyledHeadingProps>`
  font-size: ${({ as = 'h3' }) => headingSizes[as]};
  letter-spacing: -0.5px;
`;

const Heading: FC<IStyledHeadingProps> = props => <StyledHeading {...props} />;

export default Heading;
