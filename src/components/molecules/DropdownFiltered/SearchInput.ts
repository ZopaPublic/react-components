import styled, { css } from 'styled-components';
import { colors } from '../../../constants';
import InputText from '../../atoms/InputText/InputText';
import { InputProps } from '../../types';

export interface SearchInputProps {
  isOpen?: boolean;
}

export const SearchInput = styled(InputText)<SearchInputProps & InputProps>`
  input {
    ${({ hasError }) => !hasError && 'margin-bottom: 0'};
    ${({ isOpen }) =>
      isOpen &&
      css`
        box-shadow: 0 0 4px 0 ${colors.brand};
        border-radius: 8px 8px 0 0;
        border-color: ${colors.brand};
      `};
  }
  input + span {
    cursor: pointer;
  }
  input:disabled + span {
    cursor: not-allowed;
  }
`;
