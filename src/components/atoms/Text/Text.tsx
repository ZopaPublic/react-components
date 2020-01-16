import React, { HTMLAttributes } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, INeutralColorSpec, ISemanticColorSpec } from '../../../constants/colors';

export interface ITextProps extends HTMLAttributes<HTMLSpanElement | HTMLLabelElement> {
  /**
   * The weight of the rendered text. Avoid the use of `semibold` as for now.
   */
  weight?: keyof typeof typography.weights;
  /**
   * The size you want to render your text at, currently only `14px` | `16px` and `20px` supported.
   */
  size?: keyof typeof typography.sizes.text | 'lead';
  /**
   * The HTML5 tag you want to render your text on, currently only `<span>` and `<p>` are supported.
   */
  as?: 'span' | 'p' | 'label';
  /**
   * Whether to add some margin below the rendered text or not. Use it to give meaningful white-space.
   */
  mb?: boolean;
  /**
   * Set the associated input for a label
   */
  htmlFor?: string;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Heading />`.
   */
  color?:
    | INeutralColorSpec['white']
    | INeutralColorSpec['nearDark']
    | INeutralColorSpec['dark']
    | ISemanticColorSpec['success']
    | ISemanticColorSpec['error'];
}

const Text = styled.span<ITextProps>`
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
  font-weight: ${({ weight = 'regular' }) => typography.weights[weight]};
  font-size: ${({ size = 'base' }) => (size === 'lead' ? typography.sizes.heading.h4 : typography.sizes.text[size])};
`;

const TextWrap: FC<ITextProps> = React.forwardRef<HTMLSpanElement, HTMLLabelElement, ITextProps>((props, ref) => (
  <Text {...props} ref={ref} />
));

TextWrap.defaultProps = {
  as: 'span',
};

export default TextWrap;
