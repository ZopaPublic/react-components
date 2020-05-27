import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';

import Button from '../../../atoms/Button/Button';
import Icon from '../../../atoms/Icon/Icon';
import { useViewport } from '../../../../hooks/useViewport';

export interface NavbarAction extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * CTA text
   */
  ctaText?: string;
}

const NavbarAction: React.FC<NavbarAction> = ({
  ctaText = 'Sign-in',
  onClick = () => window.location.assign('https://home.zopa.com/'),
}) => {
  const { width } = useViewport();

  return (
    <Button onClick={onClick} className="ml-2" styling={width && width >= breakpoints.desktop ? 'primary' : 'link'}>
      {width && width >= breakpoints.desktop ? ctaText : <Icon variant={faUser} color={colors.white} fixedWidth />}
    </Button>
  );
};

export default NavbarAction;
