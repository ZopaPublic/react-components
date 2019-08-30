import React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, TTextHexColors } from '../../../constants/colors';

export interface ITextProps extends HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  /**
   * The weight of the rendered text. Avoid the use of `semibold` as for now.
   */
  weight?: keyof typeof typography.weights;
  /**
   * The size you want to render your text at, currently only `12px` | `14px` | `16px` supported.
   */
  size?: keyof typeof typography.sizes.text;
  /**
   * The HTML5 tag you want to render your text on, currently only `<span>` and `<p>` are supported.
   */
  as?: 'span' | 'p' | 'label';
  /**
   * Whether to add some margin below the rendered text or not. Use it to give meaningful white-space.
   */
  mb?: boolean;
  /**
   * Accepts a subset of the Zopa brand colors. Same as the ones accepted by `<Heading />`.
   */
  color?: TTextHexColors;
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
  font-size: ${({ size = 'medium' }) => {
    return typography.sizes.text[size];
  }};
`;

const TextWrap: React.FunctionComponent<ITextProps> = props => <Text {...props} />;

TextWrap.defaultProps = {
  as: 'span',
};

export default TextWrap;
