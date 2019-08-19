import React, { forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
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
  margin: 4px 0;
  user-select: none;

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

const InputText = forwardRef((props: IInput, ref) => {
  return <Input {...props} ref={ref} />;
});

export default InputText;
