import React from 'react';
import styled from 'styled-components';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { minMedia } from '../../../../helpers/responsiveness';

import Link from '../../../atoms/Link/Link';
import { buttonStyle } from '../../../atoms/Button/Button';
import Icon from '../../../atoms/Icon/Icon';
import { useViewport } from '../../../../hooks/useViewport';

export interface NavbarAction {
  /**
   * CTA text
   */
  ctaText?: string;
}

const ButtonLink = styled(Link)`
  ${minMedia.desktop`
    ${buttonStyle}
    margin-left: 8px;
  `}

  &:hover {
    color: ${colors.white};
  }
`;

const NavbarAction: React.FC<NavbarAction> = ({ ctaText = 'Sign-in' }) => {
  const { width } = useViewport();

  return (
    <ButtonLink href="https://home.zopa.com/">
      {width && width >= breakpoints.desktop ? ctaText : <Icon variant={faUser} color={colors.white} fixedWidth />}
    </ButtonLink>
  );
};

export default NavbarAction;
