import React, { HTMLAttributes } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../../constants';
import { Colors } from '../../../constants/colors';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The weight of the rendered text.
   * @default 'regular'
   */
  weight?: 'regular' | 'bold' | 'semiBold';
  /**
   * The size you want to render your text at, currently only `13px` | `15px` and `18px` supported.
   * @default 'body'
   */
  size?: keyof typeof typography.sizes.text;
  /**
   * The HTML5 tag you want to render your text on, currently only `<span>` and `<p>` are supported.
   * @default 'span'
   */
  as?: 'span' | 'p' | 'figcaption';
  /**
   * Whether to render the text in all caps or not.
   * @default false
   */
  capitalize?: boolean;
  /**
   * Where the rendered text should be aligned to.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'right' | 'center';
  /**
   * Accepts a subset of the Zopa brand colors.
   * @default `colors.greyDarkest`
   */
  color?:
    | Colors['white']
    | Colors['grey']
    | Colors['greyDark']
    | Colors['greyDarkest']
    | Colors['success']
    | Colors['alert']
    | 'inherit';
}

const {
  sizes: { lineHeight: lineHeightMap },
} = typography;

const Text = styled.span<TextProps>`
  margin: 0;
  letter-spacing: 0;
  color: ${({ color = colors.greyDarkest }) => color};

  font-size: ${({ size = 'body', capitalize }) => typography.sizes.text[capitalize ? 'small' : size]};
  line-height: ${({ size = 'body' }) => lineHeightMap[size]};
  font-weight: ${({ weight = 'regular', capitalize }) => {
    return typography.weights[capitalize ? 'bold' : weight];
  }};
  font-family: ${typography.primary};
  text-align: ${({ align = 'inherit' }) => align};
  text-transform: ${({ capitalize }) => capitalize && 'uppercase'};

  ${({ className = '', as }) =>
    (!as || as === 'span') &&
    className.split(' ').some((clss) => /[mp](:[mp])?[tblrxy]?-\d+/.test(clss)) &&
    `
    display: block
  `}
`;

const TextWrap: FC<TextProps> = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => (
  <Text {...props} ref={ref} />
));

export default TextWrap;
