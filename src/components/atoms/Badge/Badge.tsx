import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import Text from '../Text/Text';
import { typography } from '../../../constants/typography';

type Styling = 'confirmed' | 'default' | 'invalid' | 'waiting';
type ColorMapField = { bg: string; text: string };
type ColorMap = Record<Styling, ColorMapField>;

interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * The style you want to assign to your badge.
   */
  styling?: Styling;
}

const colorMap: ColorMap = {
  confirmed: {
    bg: colors.successLight,
    text: colors.success,
  },
  default: {
    bg: colors.greyLight,
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
  font-weight: ${typography.weights.semiBold};
`;

const Badge: React.FC<BadgeProps> = ({ children, styling, ...rest }) => {
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
