import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import CheckMark from '../../icons/CheckMark/CheckMark';
import Text from '../Text/Text';

type TStyling = 'confirmed' | 'default' | 'invalid' | 'waiting';
type IBgColors = { [S in TStyling]: string };
type IFontColors = { [S in TStyling]: string };

interface IBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * The style you want to assign to your badge.
   */
  styling?: TStyling;
}

const backgroundColors: IBgColors = {
  confirmed: colors.successLight,
  default: colors.greyLight,
  invalid: colors.alertLight,
  waiting: colors.warningLight,
};

const StyledBadge = styled(Text).attrs({
  size: 'small',
  forwardedAs: 'span',
})<IBadgeProps>`
  color: ${colors.greyDarkest};
  background-color: ${({ styling = 'default' }) => styling && backgroundColors[styling]};
  display: inline-block;
  padding: 4px 10px;
  white-space: nowrap;
  border-radius: 4px;
`;

const StyledCheckMark = styled(CheckMark)`
  display: inline-block;
  margin-right: 5px;
`;

const Badge: React.FC<IBadgeProps> = ({ children, styling, ...rest }) => {
  return (
    <StyledBadge styling={styling} {...rest}>
      {styling === 'confirmed' && <StyledCheckMark color={colors.greyDarkest} />}
      {children}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  styling: 'default',
};

export default Badge;
