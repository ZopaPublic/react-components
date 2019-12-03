import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { colors } from '../../../constants/colors';

export interface IInputLabelProps {
  htmlFor: string;
  children: ReactNode;
}

const StyledLabel = styled(Text).attrs({
  forwardedAs: 'label',
  weight: 'semibold',
  color: colors.neutral.dark,
  size: 'base',
  mb: false,
})<IInputLabelProps>`
  display: block;
`;

const InputLabel = (props: IInputLabelProps) => <StyledLabel {...props} />;

export default InputLabel;
