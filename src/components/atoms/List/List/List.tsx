import React, { HTMLAttributes } from 'react';
import { colors } from '../../../../constants';
import styled from 'styled-components';

const ListComponent = styled.ul<ListProps>`
  padding-left: 28px;
  counter-reset: list-counter;

  & > li:not(.has-icon):before {
    padding: 0;
    left: -25px;
    display: inline-block;
    position: absolute;

    ${({ as = 'ul' }) =>
      as === 'ul'
        ? `
        top: 8px;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background-color: ${colors.greyDark};
    `
        : `
        top: 1px;
      content: counter(list-counter) ". ";
      color: ${colors.greyDark};
      font-size: 15px;
    `}
  }

  & > li.has-icon svg {
    padding: 0;
    left: -28px;
    top: 4px;
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
  }
`;

export interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  children?: React.ReactNode;
  as?: 'ul' | 'ol';
}

const List = ({ ...props }: ListProps) => <ListComponent {...props} />;

export default List;
