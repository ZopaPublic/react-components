import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { typography } from '../../../constants/typography';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { IInput } from '../../types';

const Input = styled.input<IInput>`
  border: 2px solid ${getBorderColorByStatus};
  border-radius: 4px;
  padding: 0 10px;
  height: 48px;
  font-weight: ${typography.weights.semibold};
  width: 100%;
  -webkit-appearance: none;
  outline: none;

  &:focus {
    border: 2px solid ${colors.actionPlain};
    transition: border 0.2s;
  }

  &::placeholder {
    /* Firefox applies by default 0.5 opacity to the placeholder, 'normalize.css' stopped normalising this due to a Microsoft Edge bug */
    /* @see https://github.com/necolas/normalize.css/issues/741  */
    color: ${colors.greyLight};
    opacity: 1;
  }

  &:disabled {
    background-color: ${colors.greyLighter};
  }
`;

const InputText = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default InputText;
