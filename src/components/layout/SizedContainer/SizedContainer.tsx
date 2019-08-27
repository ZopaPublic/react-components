import React from 'react';
import styled from 'styled-components';
import { TContainerSizes } from '../../types';

export interface ISizedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TContainerSizes;
}

const mapSizeToMaxWith: { [index in TContainerSizes]: string } = {
  fullLength: '100%',
  long: '336px',
  medium: '222px',
  short: '148px',
};

const Container = styled.div<ISizedContainerProps>`
  max-width: ${({ size }) => mapSizeToMaxWith[size]};
  width: 100%;
`;

const SizedContainer = ({ size = 'fullLength', ...rest }: ISizedContainerProps) => <Container size={size} {...rest} />;

export default SizedContainer;
