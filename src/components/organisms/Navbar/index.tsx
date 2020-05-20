import React, { FC } from 'react';

import Navbar, { NavbarProps } from './Navbar/Navbar';
import NavbarDropdown from './NavbarDropdown/NavbarDropdown';
import NavbarLink from './NavbarLink/NavbarLink';

interface NavbarStatic {
  Dropdown: typeof NavbarDropdown;
  Link: typeof NavbarLink;
}

const NavbarWrapper: NavbarStatic & FC<NavbarProps> = props => <Navbar {...props} />;

NavbarWrapper.Dropdown = NavbarDropdown;
NavbarWrapper.Link = NavbarLink;

export default NavbarWrapper;
