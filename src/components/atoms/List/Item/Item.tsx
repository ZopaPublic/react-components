import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon/Icon';

export interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
  icon?: typeof Icon | ReactNode;
}

const ItemComponent = styled.li`
  position: relative;
  counter-increment: list-counter;
  list-style: none;
  padding: 0;
`;

const Item = ({ icon, className = '', children, ...rest }: ItemProps) => (
  <ItemComponent className={`${icon ? 'has-icon ' : ''}${className}`} {...rest}>
    {icon}
    {children}
  </ItemComponent>
);

export default Item;
