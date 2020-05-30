import React from 'react';
import styled from 'styled-components';
import { ContainerSizes } from '../../types';

export interface SizedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSizes;
}

const mapSizeToMaxWith: Record<ContainerSizes, string> = {
  fullLength: '100%',
  long: '336px',
  medium: '222px',
  short: '148px',
} as const;

const Container = styled.div<SizedContainerProps>`
  max-width: ${({ size = 'medium' }) => mapSizeToMaxWith[size]};
  width: 100%;
`;

const SizedContainer = ({ size = 'fullLength', ...rest }: SizedContainerProps) => <Container size={size} {...rest} />;

export default SizedContainer;
