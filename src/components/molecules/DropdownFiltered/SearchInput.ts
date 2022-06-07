import styled, { css } from 'styled-components';
import InputText from '../../atoms/InputText/InputText';
import { InputProps } from '../../types';
import { AppTheme } from '../../styles/Theme';

export interface SearchInputProps {
  isOpen?: boolean;
}

export const SearchInput = styled(InputText)<SearchInputProps & InputProps & { theme: AppTheme }>`
  input {
    ${({ hasError }) => !hasError && 'margin-bottom: 0'};
    ${({ isOpen }) =>
      isOpen &&
      css`
        box-shadow: ${({ theme }) => theme.input.searchInput.boxShadow};
        border-radius: ${({ theme }) => theme.input.searchInput.borderRadiusInput};
        border-color: ${({ theme }) => theme.input.searchInput.borderColor};
      `};
  }
  input + span {
    cursor: pointer;
  }
  input:disabled + span {
    cursor: not-allowed;
  }
`;
