import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { typography } from '../../../constants/typography';

const sizeToTagMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
};

const {
  sizes: { heading: headingSizes },
} = typography;

interface IStyledHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  size?: keyof typeof sizeToTagMap;
}

const StyledHeading = styled(Text)<IStyledHeadingProps>`
  font-size: ${({ as = 'h3', size }) => (size ? headingSizes[sizeToTagMap[size]] : headingSizes[as])};
  letter-spacing: -1px;
`;

const Heading: FC<IStyledHeadingProps> = props => <StyledHeading {...props} />;

export default Heading;
