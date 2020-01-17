import React, { HTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, INeutralColorSpec, ISemanticColorSpec } from '../../../constants/colors';

export interface IInputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * The weight of the rendered text. Avoid the use of `semibold` as for now.
   */
  weight?: keyof typeof typography.weights;
  /**
   * The size you want to render your text at, currently only `14px` | `16px` and `20px` supported.
   */
  size?: keyof typeof typography.sizes.text | 'lead';
  /**
   * Whether to add some margin below the rendered text or not. Use it to give meaningful white-space.
   */
  mb?: boolean;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Heading />`.
   */
  color?:
    | INeutralColorSpec['white']
    | INeutralColorSpec['nearDark']
    | INeutralColorSpec['dark']
    | ISemanticColorSpec['success']
    | ISemanticColorSpec['error'];
  /**
   * Define the associated input identifier
   */
  htmlFor: string;
}

const InputLabel = styled.label<IInputLabelProps>`
  display: block;
  margin: 0;
  letter-spacing: 0;
  color: ${({ color = colors.neutral.dark }) => color};

  ${({ mb = false }) =>
    mb &&
    `
    display: block;
    margin-bottom:   24px
  `};

  line-height: ${typography.lineHeights.text};
  font-family: ${typography.primary};
  font-weight: ${typography.weights.semibold};
  font-size: ${({ size = 'base' }) => (size === 'lead' ? typography.sizes.heading.h4 : typography.sizes.text[size])};
`;

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidistInputLabel: FC<IInputLabelProps> = props => <InputLabel {...props} />;

export default InputLabel;
