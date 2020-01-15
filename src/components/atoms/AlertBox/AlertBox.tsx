import React, { FC, ReactElement, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import RoundIcon from '../../icons/RoundIcon/RoundIcon';

export interface IAlertBoxProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactElement;
}

const Box = styled.div`
  display: inline-flex;
  padding: 16px;
  border: 1px solid ${colors.neutral.light};
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  margin-top: 6px;
  margin-right: 16px;
`;

const AlertBox: FC<IAlertBoxProps> = ({ children, icon, ...rest }) => (
  <Box {...rest}>
    <IconContainer>{icon || <RoundIcon variant="waiting" />}</IconContainer>
    {children}
  </Box>
);

export default AlertBox;
