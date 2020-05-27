import React from 'react';
import styled, { css } from 'styled-components';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { colors, breakpoints, spacing } from '../../../../constants';
import { minMedia, maxMedia } from '../../../../helpers/responsiveness';

import Button from '../../../atoms/Button/Button';
import Icon from '../../../atoms/Icon/Icon';
import { useViewport } from '../../../../hooks/useViewport';

export interface NavbarAction extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * CTA text
   */
  ctaText?: string;
}

const StyledButton = styled(Button)`
  ${maxMedia.desktop`
    padding: 0;
    display: block;
    width: 100%;
    height: 100%;

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

const NavbarAction: React.FC<NavbarAction> = ({
  ctaText = 'Sign in',
  onClick = () => window.location.assign('https://home.zopa.com/'),
}) => {
  const { width } = useViewport();

  return (
    <StyledButton onClick={onClick} styling={width && width >= breakpoints.desktop ? 'primary' : 'link'}>
      {width && width >= breakpoints.desktop ? ctaText : <Icon variant={faUser} color={colors.white} size="lg" />}
    </StyledButton>
  );
};

export default NavbarAction;
