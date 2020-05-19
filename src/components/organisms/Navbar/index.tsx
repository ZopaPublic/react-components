import React, { FC } from 'react';

import Navbar, { INavbarProps } from './Navbar/Navbar';
import NavbarDropdown from './NavbarDropdown/NavbarDropdown';
import NavbarLink from './NavbarLink/NavbarLink';
import NavbarLinkList from './NavbarLinksList/NavbarLinksList';
import NavbarAction from './NavbarAction/NavbarAction';

interface INavbarStatic {
  Dropdown: typeof NavbarDropdown;
  Link: typeof NavbarLink;
  LinksList: typeof NavbarLinkList;
  Action: typeof NavbarAction;
}

const NavbarWrapper: INavbarStatic & FC<INavbarProps> = props => <Navbar {...props} />;

NavbarWrapper.Dropdown = NavbarDropdown;
NavbarWrapper.Link = NavbarLink;
NavbarWrapper.LinksList = NavbarLinkList;
NavbarWrapper.Action = NavbarAction;

export default NavbarWrapper;
