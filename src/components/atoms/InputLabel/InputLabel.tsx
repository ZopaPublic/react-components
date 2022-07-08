import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../../constants';
import { AppTheme, useThemeContext } from '../../styles/Theme';

export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  /**
   * Define the associated input identifier
   */
  htmlFor: string;
}

const StyledInputLabel = styled.label<InputLabelProps & { theme: AppTheme }>`
  display: block;
  margin: ${({ theme }) => theme.label.margin};
  letter-spacing: 0;
  color: ${colors.greyDarkest};
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${typography.weights.semiBold};
  font-size: ${typography.sizes.text.body};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const InputLabel = (props: InputLabelProps) => {
  const theme = useThemeContext();

  return <StyledInputLabel {...props} theme={theme} />;
};

export default InputLabel;
