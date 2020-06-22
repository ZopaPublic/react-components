import React, { FC } from 'react';

import Navbar, { NavbarProps } from './Navbar/Navbar';
import NavbarAction from './NavbarAction/NavbarAction';
import { OpenProvider } from './OpenProvider';

interface NavbarStatic {
  Action: typeof NavbarAction;
}

const NavbarWrapper: NavbarStatic & FC<NavbarProps> = (props) => (
  <OpenProvider>
    <Navbar {...props} />
  </OpenProvider>
);

NavbarWrapper.Action = NavbarAction;

export default NavbarWrapper;
export { navbarLinkStyles } from './NavbarLink/NavbarLink';
