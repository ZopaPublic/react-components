import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { colors } from '../../../constants/colors';

export interface IInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const StyledLabel = styled(Text).attrs({
  forwardedAs: 'label',
  weight: 'semibold',
  color: colors.neutral.dark,
  size: 'base',
})<IInputLabelProps>`
  display: block;
`;

const InputLabel = ({ children, htmlFor }: IInputLabelProps) => <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;

export default InputLabel;
