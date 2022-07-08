import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants';
import Text from '../Text/Text';

type Styling = 'confirmed' | 'default' | 'invalid' | 'waiting' | 'brand';
type ColorMapField = { bg: string; text: string };
type ColorMap = Record<Styling, ColorMapField>;

interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * The style you want to assign to your badge.
   */
  styling?: Styling;
}

const colorMap: ColorMap = {
  brand: {
    bg: colors.brandLight,
    text: colors.greyDarkest,
  },
  confirmed: {
    bg: colors.successLight,
    text: colors.successDark,
  },
  default: {
    bg: colors.greyLighter,
    text: colors.greyDarkest,
  },
  invalid: {
    bg: colors.alertLight,
    text: colors.alertDark,
  },
  waiting: {
    bg: colors.warningLight,
    text: colors.warningDark,
  },
};

const StyledBadge = styled(Text).attrs({
  size: 'small',
  forwardedAs: 'span',
})<BadgeProps>`
  ${({ styling = 'default' }) => css`
    background-color: ${colorMap[styling].bg};
    color: ${colorMap[styling].text};
  `};

  display: inline-block;
  padding: 3px 10px;
  white-space: nowrap;
  border-radius: 12px;
`;

const Badge = ({ children, styling, ...rest }: BadgeProps) => {
  return (
    <StyledBadge styling={styling} {...rest}>
      {children}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  styling: 'default',
};

export default Badge;
