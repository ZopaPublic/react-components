import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../../constants';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { InputProps } from '../../types';

const Input = styled.input<InputProps>`
  width: 100%;
  -webkit-appearance: none;
  outline: none;
  border-radius: 8px;
  padding: 0 16px;
  height: 50px;
  font-size: ${typography.sizes.text.body};
  font-weight: ${typography.weights.regular};
  color: ${colors.greyDarkest}
  border: 1px solid ${getBorderColorByStatus};
  box-shadow: 0 0 4px 0 transparent;
  transition-property: border, box-shadow;
  transition: 0.2s ease-in-out;

  &:focus, &:hover {
    border: 1px solid ${colors.brand};
    box-shadow: 0 0 4px 0 ${colors.brand};
  }

  &::placeholder {
    /* Firefox applies by default 0.5 opacity to the placeholder, 'normalize.css' stopped normalising this due to a Microsoft Edge bug */
    /* @see https://github.com/necolas/normalize.css/issues/741  */
    color: ${colors.greyLight};
    opacity: 1;
  }

  &:disabled {
    background-color: ${colors.greyLightest};
    color: ${colors.grey}
  }
`;

const InputText = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default InputText;
