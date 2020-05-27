import React, { FC } from 'react';

import Navbar, { NavbarProps } from './Navbar/Navbar';
import NavbarAction from './NavbarAction/NavbarAction';

interface NavbarStatic {
  Action: typeof NavbarAction;
}

const NavbarWrapper: NavbarStatic & FC<NavbarProps> = props => <Navbar {...props} />;

NavbarWrapper.Action = NavbarAction;

export default NavbarWrapper;
export { NavbarLinkStyles } from './NavbarLink/NavbarLink';
