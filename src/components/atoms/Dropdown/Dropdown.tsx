import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../../constants';
import { getBorderColorByStatus, getInputTextColor } from '../../../helpers/utils';
import chevronDown from '../../../content/images/sort-solid.svg';
import { AppTheme, useThemeContext } from '../../styles/Theme';

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
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

const StyledDropdown = styled.select<DropdownProps & { theme: AppTheme }>`
  appearance: none;
  min-width: 100px;
  user-select: none;
  line-height: ${typography.sizes.lineHeight.body};
  background: transparent;
  padding-right: 32px;
  padding-left: 16px;
  height: 50px;
  border-radius: 8px;
  color: ${getInputTextColor};
  font-weight: ${typography.weights.regular};
  border: 1px solid ${getBorderColorByStatus};
  background: transparent url(${chevronDown}) no-repeat calc(100% - 13px) center;
  background-size: 8px;
  box-shadow: 0 0 4px 0 transparent;
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;
  font-size: ${typography.sizes.text.body};

  &:focus,
  &:hover {
    outline: none;
    outline-width: 0;
    border: 1px solid ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
  }

  &:disabled {
    border: 1px solid ${getBorderColorByStatus};
    box-shadow: 0 0 4px 0 transparent;
    background-color: ${colors.greyLightest};
    cursor: not-allowed;
  }
`;

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  const theme = useThemeContext();

  return <StyledDropdown ref={ref} theme={theme} {...props} />;
});

export default Dropdown;
