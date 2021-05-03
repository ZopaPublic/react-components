import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon/Icon';

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  icon?: typeof Icon | ReactNode;
}

const ItemComponent = styled.li`
  position: relative;
  counter-increment: list-counter;
  list-style: none;
  padding: 0;
`;

const Item: FC<ItemProps> = ({ icon, className = '', children, ...rest }) => (
  <ItemComponent className={`${icon ? 'has-icon ' : ''}${className}`} {...rest}>
    {icon}
    {children}
  </ItemComponent>
);

export default Item;
