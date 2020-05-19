import styled from 'styled-components';

import { colors } from '../../../../../constants/colors';
import { spacing } from '../../../../../constants/spacing';
import { breakpoints } from '../../../../../constants/breakpoints';

export type TAlignedTo = 'left' | 'right';

const NavbarDropdownList = styled.ul`
  margin: ${spacing[3]} 0 ${spacing[3]};
  padding: 0;

  list-style-type: none;
  border-bottom: 1px solid ${colors.greyLighter};

  @media (min-width: ${breakpoints.desktop}px) {
    background-color: ${colors.white};
    box-shadow: 0px 1px 0px 1px ${colors.greyLight};
    border: 1px solid ${colors.greyLighter};
    border-radius: 12px;

    min-width: 240px;
    margin: 0;
    padding: ${spacing[2]};

    &:after {
      z-index: 1;
      content: '';
      top: 1px;
      left: 50%;
      position: absolute;
      width: 25px;
      height: 25px;
      transform: translate(-50%, -50%) rotate(135deg);
      background-color: inherit;
      box-shadow: -1px 1px 0 0 ${colors.greyLighter};
    }
  }
`;

export default NavbarDropdownList;
