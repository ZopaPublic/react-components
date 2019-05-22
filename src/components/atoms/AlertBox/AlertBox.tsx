import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import * as Colors from '../../../constants/colors';
import Alert from '../../icons/Alert/Alert';

export interface IAlertBoxProps extends React.HTMLAttributes<HTMLElement> {
  icon?: FunctionComponent;
}

const Box = styled.div`
  display: inline-flex;
  padding: 16px;
  line-height: 24px;
  border: 1px solid ${Colors.neutral.neutral50};
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  margin-top: 6px;
  margin-right: 16px;
`;

const renderAlertIcon = () => <Alert />;

const AlertBox: FunctionComponent<IAlertBoxProps> = ({ children, className, icon, style }) => (
  <Box className={className} style={style}>
    <IconContainer>{icon || renderAlertIcon()}</IconContainer>
    {children}
  </Box>
);

export default AlertBox;
