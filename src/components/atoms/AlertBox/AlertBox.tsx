import React, { FC, ReactElement, HTMLAttributes } from 'react';
import deprecate from 'util-deprecate';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Alert from '../../icons/Alert/Alert';

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
    <IconContainer>{icon || <Alert />}</IconContainer>
    {children}
  </Box>
);

/**
 * @deprecated `<AlertBox />` is deprecated and will be removed in: `4.0.0`. Use [`<Alert severity="warning" />`](#/Components/Atoms/Alert) instead.
 */
export default deprecate(
  AlertBox,
  `
  ❗️ [@zopauk/react-components]
  
  <AlertBox /> is deprecated and it will be removed in the next major version: 4.0.0.
  Use <Alert severity="warning" /> instead.
`,
);
