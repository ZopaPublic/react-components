import React, { HTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors } from '../../../constants/colors';

export interface IInputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Define the associated input identifier
   */
  htmlFor: string;
}

const InputLabel = styled.label<IInputLabelProps>`
  display: block;
  margin: 0 0 10px;
  letter-spacing: 0;
  color: ${colors.greyDarkest};
  line-height: ${typography.lineHeights.text};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.semibold};
  font-size: ${typography.sizes.text['base']};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistInputLabel: FC<IInputLabelProps> = props => <InputLabel {...props} />;

export default InputLabel;
