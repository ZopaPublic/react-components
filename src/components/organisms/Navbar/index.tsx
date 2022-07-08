import React from 'react';

import Navbar, { NavbarProps } from './Navbar/Navbar';
import NavbarAction from './NavbarAction/NavbarAction';

interface NavbarStatic {
  Action: typeof NavbarAction;
}

const NavbarWrapper: NavbarStatic & NavbarProps = (props) => <Navbar {...props} />;

NavbarWrapper.Action = NavbarAction;

export default NavbarWrapper;
export { navbarLinkStyles } from './NavbarLink/NavbarLink';
