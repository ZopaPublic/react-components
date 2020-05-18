import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import Text from '../Text/Text';
import { typography } from '../../../constants/typography';

type TStyling = 'confirmed' | 'default' | 'invalid' | 'waiting';
type TColorMapField = { bg: string; text: string };
type TColorMap = { [S in TStyling]: TColorMapField };

interface IBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * The style you want to assign to your badge.
   */
  styling?: TStyling;
}

const colorMap: TColorMap = {
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
})<IBadgeProps>`
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

const Badge: React.FC<IBadgeProps> = ({ children, styling, ...rest }) => {
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
