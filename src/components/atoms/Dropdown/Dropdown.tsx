import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import chevronDown from '../../../content/images/chevron-down.svg';
import { getBorderColorByStatus } from '../../../helpers/utils';

export const DEFAULT_COLOR = colors.neutral.medium;

export interface IDropdownProps {
  /**
   * Border gets red if this is set to true.
   */
  hasError?: boolean;
  /**
   * Border gets green if this is set to true.
   */
  isValid?: boolean;
}

const Option = styled.option``;

const Dropdown = styled.select<IDropdownProps>`
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

export default Dropdown;
export { Option };
