import React, { FC } from 'react';

import Navbar, { INavbarProps } from './Navbar/Navbar';
import NavbarDropdown from './NavbarDropdown/NavbarDropdown';
import NavbarLink from './NavbarLink/NavbarLink';

interface INavbarStatic {
  Dropdown: typeof NavbarDropdown;
  Link: typeof NavbarLink;
}

const NavbarWrapper: INavbarStatic & FC<INavbarProps> = props => <Navbar {...props} />;

NavbarWrapper.Dropdown = NavbarDropdown;
NavbarWrapper.Link = NavbarLink;

export default NavbarWrapper;
