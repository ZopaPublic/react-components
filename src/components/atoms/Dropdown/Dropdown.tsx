import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import chevronDown from '../../../content/images/chevron-down.svg';
import { getBorderColorByStatus } from '../../../helpers/utils';

export const DEFAULT_COLOR = colors.neutral.neutral75;

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

export interface IOption extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const Option: React.FunctionComponent<IOption> = styled.option``;
const Dropdown: React.FunctionComponent<IDropdownProps> = styled.select<IDropdownProps>`
  appearance: none;

  background: transparent url(${chevronDown}) no-repeat calc(100% - 13px) center;
  background-size: 13px;

  border: 2px solid ${getBorderColorByStatus};
  border-radius: 4px;
  padding: 8px 32px 8px 16px;
  font-size: 20px;
  height: 46px;
  min-width: 100px;

  &:focus {
    outline-width: 0;
    border: 2px solid ${colors.extended.blue500};
    transition: border 0.2s;
  }
`;

export default Dropdown;
export { Option };
