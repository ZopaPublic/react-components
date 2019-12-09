import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import chevronDown from '../../../content/images/chevron-down.svg';
import { getBorderColorByStatus } from '../../../helpers/utils';

export const DEFAULT_COLOR = colors.neutral.medium;

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

const Dropdown = styled.select.attrs({
  as: 'select',
})<IDropdownProps>`
  appearance: none;

  background: transparent url(${chevronDown}) no-repeat calc(100% - 13px) center;
  background-size: 13px;

  border: 2px solid ${getBorderColorByStatus};
  border-radius: 4px;
  padding: 8px 32px 8px 16px;
  height: 46px;
  min-width: 100px;
  user-select: none;

  &:focus {
    outline-width: 0;
    border: 2px solid ${colors.base.secondary};
    transition: border 0.2s;
  }
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistDropdown: FC<IDropdownProps> = props => <Dropdown {...props} />;

export default Dropdown;
