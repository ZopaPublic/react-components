import React from 'react';

import { NavbarLinkProps } from '../NavbarLink/NavbarLink';
import Navbar from '../';

export interface NavigationItem {
  label: string;
  href?: string;
  qadata?: string;
  children?: NavigationItem[];
}

export interface NavbarLinksList {
  links?: NavigationItem[];
  renderDropdown?: (item: NavigationItem, index: number) => React.ReactNode;
  renderLink?: (item: NavigationItem, index: number, props?: any) => React.ReactNode;
}

interface NavbarLinksListLinkProps extends NavbarLinkProps {
  'data-automation'?: string;
}

export interface NavbarLinksListLink {
  item: NavigationItem;
  index: number;
  props: NavbarLinksListLinkProps;
}

const NavbarLinksListLink = ({ item: { label, href }, index, props }: NavbarLinksListLink) => {
  return (
    <Navbar.Link key={`navbar-link-${index}`} href={href} {...props}>
      {label}
    </Navbar.Link>
  );
};

const NavbarLinksList: React.FC<NavbarLinksList> = ({
  links,
  renderLink = (item: NavigationItem, index: number, props) => (
    <NavbarLinksListLink item={item} index={index} props={props} />
  ),
  renderDropdown = (item: NavigationItem, index: number) => (
    <Navbar.Dropdown
      id={`navbar-dropdown-${index}`}
      ariaLabel={item.label}
      items={item.children!}
      renderOpener={({ open, getOpenerProps }) => {
        return (
          <NavbarLinksListLink
            item={item}
            index={index}
            props={{
              href: '#',
              ...getOpenerProps(),
              withChevron: true,
              open,
              'data-automation': item.qadata ?? `ZA.${item.qadata}`,
            }}
          />
        );
      }}
      renderItem={({ item, getItemProps }) => {
        return renderLink(item, index, {
          ...getItemProps(),
          isDropdownLink: true,
          'data-automation': item.qadata ?? `ZA.${item.qadata}`,
        });
      }}
    />
  ),
}) => {
  return (
    <>
      {links &&
        links.map((item: NavigationItem, index: number) => {
          return !!item.children ? (
            <span key={`dropdown-${index}`}>{renderDropdown(item, index)}</span>
          ) : (
            <span key={`link-${index}`}>{renderLink(item, index)}</span>
          );
        })}
    </>
  );
};

export default NavbarLinksList;
