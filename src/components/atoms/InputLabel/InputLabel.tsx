import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { colors } from '../../../constants/colors';

export interface IInputLabelProps {
  htmlFor: string;
  children: ReactNode;
}

const InputLabel = styled(Text).attrs({
  forwardedAs: 'label',
  weight: 'semibold',
  color: colors.neutral.dark,
  size: 'base',
  mb: false,
})<IInputLabelProps>`
  display: block;
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistInputLabel: FC<IInputLabelProps> = props => <InputLabel {...props} />;

export default InputLabel;
