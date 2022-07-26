import React from 'react';
import styled, { css } from 'styled-components';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { colors, breakpoints, spacing } from '../../../../constants';
import { minMedia, maxEqualToMedia } from '../../../../helpers/responsiveness';

import Button from '../../../atoms/Button/Button';
import Icon from '../../../atoms/Icon/Icon';
import { useViewport } from '../../../../hooks/useViewport';

const StyledButton = styled(Button)`
  ${maxEqualToMedia.desktop`
    &:hover:not(:disabled) {
      background: none;
    }
  `}

  ${minMedia.desktop`
    ${css`
      margin-left: ${spacing[2]};
    `}
  `}
`;

const Content = styled.div`
  ${maxEqualToMedia.desktop`
    position: absolute;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  `}
`;

const StyledIcon = styled(Icon)`
  display: block;
  ${minMedia.desktop`
    display: none;
  `}
`;

const NavbarAction = ({
  children = 'Sign in',
  onClick = () => window.location.assign('https://home.zopa.com/'),
  ...rest
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const { width } = useViewport();

  return (
    <StyledButton onClick={onClick} styling={width && width >= breakpoints.desktop ? 'primary' : 'link'} {...rest}>
      <Content>{children}</Content>
      <StyledIcon variant={faUser} color={colors.white} size="lg" width="20px" height="20px" />
    </StyledButton>
  );
};

export default NavbarAction;
