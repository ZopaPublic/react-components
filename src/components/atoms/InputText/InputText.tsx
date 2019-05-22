import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import { statusColors } from '../../../constants/colors';
import { IInput } from '../../types';

export const getBorderColorByStatus = ({ hasError, isValid }: IInput) =>
  hasError ? statusColors.error : isValid ? statusColors.valid : colors.neutral.neutral75;

const Input = styled.input<IInput>`
  border: 2px solid ${getBorderColorByStatus};
  border-radius: 4px;
  padding: 0 10px;
  font-size: 20px;
  height: 48px;
  font-weight: 600;
  width: 100%;
  margin: 4px 0;
  &:focus {
    outline-width: 0;
    border: 2px solid ${colors.extended.blue500};
    transition: border 0.2s;
  }

  ::-webkit-input-placeholder {
    color: ${colors.neutral.neutral400};
  }

  &:disabled {
    background-color: ${colors.neutral.neutral10};
  }
`;

const InputText = (props: IInput) => {
  return <Input {...props} />;
};

export default InputText;
