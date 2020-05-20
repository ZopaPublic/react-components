import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import InputText from '../../atoms/InputText/InputText';
import { InputProps } from '../../types';

export interface SearchInputProps {
  isOpen?: boolean;
}

export const SearchInput = styled(InputText)<SearchInputProps & InputProps>`
  margin: 0;
  padding: 8px 32px 8px 16px;
  ${({ hasError }) => !hasError && 'margin-bottom: 0'};
  ${({ isOpen }) =>
    isOpen &&
    css`
      box-shadow: 0 4px 1px 2px rgba(28, 33, 57, 0.15);
      border-radius: 6px 6px 0 0;
      border-color: ${colors.actionPlain};
      border-bottom: 0;

      /* Hack to simulate a border in the bottom in the input as :after
         pseudo-elements doesn't work with inputs */
      background: linear-gradient(${colors.greyLightest}, ${colors.greyLightest});
      background-size: 95% 1px;
      background-position: bottom center;
      background-repeat: no-repeat;
      &:focus {
        border-bottom: 0;
      }
    `};
`;

export const SearchInputWrap = styled.div`
  position: relative;
`;

export const SearchArrowWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  cursor: pointer;
  display: flex;
`;
