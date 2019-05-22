import React from 'react';

import NavbarDropdown from './NavbarDropdown/NavbarDropdown';
import NavbarLayout from './NavbarLayout/NavbarLayout';
import NavbarLink from './NavbarLink/NavbarLink';

class Navbar extends React.Component {
  public static Layout = NavbarLayout;
  public static Dropdown = NavbarDropdown;
  public static Link = NavbarLink;

  public render() {
    return null;
  }
}

export default Navbar;
