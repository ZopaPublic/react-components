import React, { Fragment } from 'react';

import { NavbarLinkProps } from '../NavbarLink/NavbarLink';
import Navbar from '../';

export interface NavigationItem {
  label: string;
  href?: string;
  qadata?: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: NavigationItem[];
}

export interface NavbarLinksList {
  links?: NavigationItem[];
  renderLink?: (item: NavigationItem, index: number, props?: any) => React.ReactNode;
}

export interface NavbarLinksListLinkProps extends NavbarLinkProps {
  'data-automation'?: string;
}

export interface NavbarLinksListLink {
  item: NavigationItem;
  index: number;
  props: NavbarLinksListLinkProps;
}

const NavbarLinksListLink = ({ item: { label, href, onClick }, index, props }: NavbarLinksListLink) => (
  <Navbar.Link key={`navbar-link-${index}`} href={href} onClick={onClick} {...props}>
    {label}
  </Navbar.Link>
);

const NavbarLinksList: React.FC<NavbarLinksList> = ({
  links,
  renderLink = (item: NavigationItem, index: number, props) => (
    <NavbarLinksListLink item={item} index={index} props={props} />
  ),
}) => (
  <>
    {links &&
      links.map((item: NavigationItem, index: number) =>
        !!item.children ? (
          <Navbar.Dropdown
            key={`dropdown-${index}`}
            id={`navbar-dropdown-${index}`}
            label={item.label}
            items={item.children!}
            renderItem={({ item, getItemProps }) =>
              renderLink(item, index, {
                ...getItemProps(),
                isDropdownLink: true,
                'data-automation': item.qadata ?? `ZA.${item.qadata}`,
              })
            }
          />
        ) : (
          <Fragment key={`link-${index}`}>{renderLink(item, index)}</Fragment>
        ),
      )}
  </>
);

export default NavbarLinksList;
