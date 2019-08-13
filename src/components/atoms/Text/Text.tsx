import React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';

export interface ITextProps extends HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  /**
   * The weight of the rendered text. Avoid the use of `semibold` as for now.
   * @default 400
   */
  weight?: keyof typeof typography.weights;
  /**
   * The size you want to render your text at, currently only `12px` | `14px` | `16px` supported.
   * @default 'medium'
   */
  size?: keyof typeof typography.sizes.text;
  /**
   * The HTML5 tag you want to render your text on, currently only `<span>` and `<p>` are supported.
   * @default span
   */
  as?: 'span' | 'p' | 'label';
  /**
   * Whether to add some margin below the rendered text or not. Use it to give meaningful white-space.
   * @default false
   */
  mb?: boolean;
}

const Text = styled.span<ITextProps>`
  margin: 0;
  letter-spacing: 0;

  ${({ mb = false }) =>
    mb &&
    `
    display: block;
    margin-bottom:   24px
  `};

  line-height: ${typography.lineHeight};
  font-family: ${typography.primary};
  font-weight: ${({ weight = 'regular' }) => typography.weights[weight]};
  font-size: ${({ size = 'medium' }) => {
    return typography.sizes.text[size];
  }};
`;

const TextWrap: React.FunctionComponent<ITextProps> = props => <Text {...props} />;

export default TextWrap;
