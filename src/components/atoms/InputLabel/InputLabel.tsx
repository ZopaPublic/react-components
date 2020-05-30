import React, { HTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../../constants';

export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Define the associated input identifier
   */
  htmlFor: string;
}

const InputLabel = styled.label<InputLabelProps>`
  display: block;
  margin: 0 0 10px;
  letter-spacing: 0;
  color: ${colors.greyDarkest};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.bold};
  font-size: ${typography.sizes.text.body};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistInputLabel: FC<InputLabelProps> = (props) => <InputLabel {...props} />;

export default InputLabel;
