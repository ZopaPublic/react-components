import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { colors } from '../../../constants/colors';

export interface IInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const StyledLabel = styled(Text)`
  display: block;
`;

const InputLabel = (props: IInputLabelProps) => (
  <StyledLabel {...props} weight="semibold" forwardedAs="label" color={colors.neutral.dark} size="base" />
);

export default InputLabel;
