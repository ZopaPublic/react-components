import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import RoundIcon from '../../icons/RoundIcon/RoundIcon';

type TStyling = 'confirmed' | 'invalid' | 'waiting';

interface IBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * The style you want to assign to your badge.
   */
  styling?: TStyling;
}

const StyledBadge = styled(Text).attrs({
  size: 'small',
  forwardedAs: 'span',
})`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  white-space: nowrap;
  border-radius: 4px;
  width: max-content;
`;

const ChildWrap = styled.div`
  margin-left: 8px;
`;

const Badge: React.FC<IBadgeProps> = ({ children, styling, ...rest }) => {
  return (
    <StyledBadge {...rest}>
      <RoundIcon variant={styling} />
      <ChildWrap>{children}</ChildWrap>
    </StyledBadge>
  );
};

export default Badge;
