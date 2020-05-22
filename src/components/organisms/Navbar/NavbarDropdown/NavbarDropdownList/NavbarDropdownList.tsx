import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../constants';

export type AlignedTo = 'left' | 'right';

export interface NavbarDropdownListProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Determines whether it's aligned to left or right
   */
  alignedTo: AlignedTo;
}

const NavbarDropdownList = styled.ul<NavbarDropdownListProps>`
  position: relative;
  list-style-type: none;
  margin: 0;
  background-color: ${colors.white};
  box-shadow: inset 0 0 0 1px rgba(214, 215, 222, 0.75), 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  padding: 16px;
  border-radius: 4px;
  min-width: 150px;
  &:after {
    z-index: 1;
    content: '';
    top: 1px;
    ${({ alignedTo }) => alignedTo}: 16px;
    position: absolute;
    width: 15px;
    height: 15px;
    transform: translateY(-50%) rotate(135deg);
    background-color: inherit;
    box-shadow: -1px 1px 0 0 ${colors.greyLighter};
  }
`;

export default NavbarDropdownList;
