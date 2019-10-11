import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { colors } from '../../../constants/colors';

export interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const StyledLabel = styled(Text)`
  display: block;
`;

const Label = (props: ILabelProps) => (
  <StyledLabel {...props} weight="semibold" forwardedAs="label" color={colors.neutral.dark} size="base" />
);

export default Label;
