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

  &:focus {
    outline-width: 0;
    border: 2px solid ${colors.base.secondary};
    transition: border 0.2s;
  }

  ::-webkit-input-placeholder {
    color: ${colors.neutral.medium};
  }

  &:disabled {
    background-color: ${colors.neutral.light};
  }
`;

const InputText = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default InputText;
