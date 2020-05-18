import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { typography } from '../../../constants/typography';

export interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Border gets red if this is set to true.
   */
  hasError?: boolean;
  /**
   * Border gets green if this is set to true.
   */
  isValid?: boolean;
}

export const Option = styled.option``;

const StyledDropdown = styled.select<IDropdownProps>`
  appearance: none;
  min-width: 100px;
  user-select: none;
  background: transparent;
  padding-right: 32px;
  padding-left: 16px;
  height: 50px;
  border-radius: 4px;
  font-weight: ${typography.weights.regular};
  border: 1px solid ${getBorderColorByStatus};
  box-shadow: 0 0 4px 0 transparent;
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;

  &:focus {
    outline-width: 0;
    border: 1px solid ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
  }
`;

const Dropdown = forwardRef<HTMLSelectElement, IDropdownProps>((props, ref) => <StyledDropdown ref={ref} {...props} />);

export default Dropdown;
