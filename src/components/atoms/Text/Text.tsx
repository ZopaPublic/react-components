import React, { HTMLAttributes } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { typography } from '../../../constants/typography';
import { colors, TColors } from '../../../constants/colors';

export interface ITextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The weight of the rendered text.
   * @default 'regular'
   */
  weight?: 'regular' | 'bold';
  /**
   * The size you want to render your text at, currently only `13px` | `15px` and `18px` supported.
   * @default 'body'
   */
  size?: keyof typeof typography.sizes.text;
  /**
   * The HTML5 tag you want to render your text on, currently only `<span>` and `<p>` are supported.
   * @default 'span'
   */
  as?: 'span' | 'p';
  /**
   * Whether to add some margin below the rendered text or not. Use it to give meaningful white-space.
   * @default false
   */
  mb?: boolean;
  /**
   * Whether to render the text in all caps or not.
   * @default false
   */
  capitalize?: boolean;
  /**
   * Where the rendered text should be aligned to.
   * @default 'left'
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Accepts a subset of the Zopa brand colors.
   * @default `colors.greyDarkest`
   */
  color?: TColors['white'] | TColors['grey'] | TColors['greyDarkest'] | TColors['success'] | TColors['alert'];
}

const lineHeightMap = {
  lead: '26px',
  body: '22px',
  small: '18px',
};

const Text = styled.span<ITextProps>`
  margin: 0;
  letter-spacing: 0;
  color: ${({ color = colors.greyDarkest }) => color};

  ${({ mb = false }) =>
    mb &&
    `
    display: block;
    margin-bottom:   24px
  `};

  font-size: ${({ size = 'body', capitalize }) => typography.sizes.text[capitalize ? 'small' : size]};
  line-height: ${({ size = 'body' }) => lineHeightMap[size]};
  font-weight: ${({ weight = 'regular', capitalize }) => typography.weights[capitalize ? 'bold' : weight]};

  font-family: ${typography.primary};
  text-align: ${({ align }) => align};
  text-transform: ${({ capitalize }) => capitalize && 'uppercase'};
`;

const TextWrap: FC<ITextProps> = React.forwardRef<HTMLSpanElement, ITextProps>((props, ref) => (
  <Text {...props} ref={ref} />
));

export default TextWrap;
