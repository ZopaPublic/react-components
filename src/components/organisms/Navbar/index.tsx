import React from 'react';

import Navbar, { NavbarProps } from './Navbar/Navbar';
import NavbarAction from './NavbarAction/NavbarAction';

const NavbarWrapper = (props: NavbarProps) => <Navbar {...props} />;

export default Object.assign(NavbarWrapper, { Action: NavbarAction });

export { navbarLinkStyles } from './NavbarLink/NavbarLink';
