import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { useThemeContext, AppTheme } from '../../styles/Theme';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /**
   * The weight of the rendered text.
   * @default 'regular'
   */
  weight?: 'regular' | 'bold' | 'semiBold';
  /**
   * The size you want to render your text at, currently only `13px` | `15px` and `18px` supported.
   * @default 'body'
   */
  size?: keyof AppTheme['typography']['text']['sizes'];
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
  color?: string;
}

const Text = styled.span<TextProps & { theme: AppTheme }>`
  margin: 0;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacingMap.text};

  color: ${({ color, theme }) => color || theme.typography.text.color};
  font-size: ${({ theme, size = 'body', capitalize }) => theme.typography.text.sizes[capitalize ? 'small' : size]};
  line-height: ${({ theme, size = 'body' }) => theme.typography.lineHeight[size]};
  font-weight: ${({ theme, weight = 'regular', capitalize }) => {
    return theme.typography.weights[capitalize ? 'bold' : weight];
  }};

  font-family: ${({ theme }) => theme.typography.primary};
  text-align: ${({ align = 'inherit' }) => align};
  text-transform: ${({ capitalize }) => capitalize && 'uppercase'};

  ${({ className = '', as }) =>
    (!as || as === 'span') &&
    className.split(' ').some((clss) => /[mp](:[mp])?[tblrxy]?-\d+/.test(clss)) &&
    `
    display: block
  `}
`;

const TextWrap = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const theme = useThemeContext();
  return <Text {...props} ref={ref} theme={theme} />;
});

export default TextWrap;
