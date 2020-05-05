import React, { FC, HTMLAttributes } from 'react';
import deprecate from 'util-deprecate';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Icon from '../Icon/Icon';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Box = styled.div`
  display: inline-flex;
  padding: 16px;
  border: 1px solid ${colors.greyLighter};
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  margin-top: 6px;
  margin-right: 16px;
`;

const AlertBox: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => (
  <Box {...rest}>
    <IconContainer>
      <Icon variant={faExclamationTriangle} />
    </IconContainer>
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
