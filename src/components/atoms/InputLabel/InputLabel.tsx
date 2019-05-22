import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';

export interface IInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: ${colors.neutral.neutral900};
  display: block;
`;

const InputLabel = (props: IInputLabelProps) => <Label {...props} />;

export default InputLabel;
