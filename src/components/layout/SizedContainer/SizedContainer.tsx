import React from 'react';
import styled from 'styled-components';
import { TContainerSizes } from '../../types';

export interface ISizedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default 'fullLength'
   */
  size?: TContainerSizes;
}

const mapSizeToMaxWith: { [index in TContainerSizes]: string } = {
  fullLength: '100%',
  long: '336px',
  medium: '222px',
  short: '148px',
};

const Container = styled.div<ISizedContainerProps>`
  max-width: ${({ size }) => (size && mapSizeToMaxWith[size]) || mapSizeToMaxWith.fullLength};
  width: 100%;
`;

const SizedContainer = (props: ISizedContainerProps) => <Container {...props} />;

export default SizedContainer;
