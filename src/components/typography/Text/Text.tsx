import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import * as fonts from '../../../constants/fonts';

const sizes = {
  l: '18px',
  m: '16px',
  s: '14px',
  xl: '20px',
  xs: '12px',
};

export type TTextSize = keyof typeof sizes;

const fontWeights = {
  bold: 600,
  normal: 400,
};

export type TTextFontWeight = keyof typeof fontWeights;

export interface IStyledTextProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  color: string;
  fw: TTextFontWeight;
  size: TTextSize;
}

const StyledSpan = styled.span<IStyledTextProps>`
  margin: 0;
  letter-spacing: 0;
  line-height: 24px;
  font-family: ${fonts.openSans};
  font-weight: ${({ fw }) => fontWeights[fw]};
  font-size: ${({ size }) => sizes[size]};
  color: ${({ color }) => color};
`;

export type TTextTag = 'span' | 'p';

export interface ITextProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  /**
   * font weight
   * @default 400
   */
  fw?: TTextFontWeight;
  /**
   * size
   * @default 14px
   */
  size?: TTextSize;
  /**
   * color
   * @default colors.neutral.neutral900
   */
  color?: string;
  /**
   * rendered tag
   * @default span
   */
  as?: TTextTag;
}

const Text = ({ fw = 'normal', size = 'n', color = colors.neutral.neutral900, as = 'span', ...rest }) => (
  <StyledSpan fw={fw} size={size} color={color} as={as} {...rest} />
);

export default Text;
