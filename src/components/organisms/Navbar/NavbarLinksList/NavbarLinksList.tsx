import React from 'react';

import { INavbarLinkProps } from '../NavbarLink/NavbarLink';
import Navbar from '../';

export interface INavigationItem {
  label: string;
  href?: string;
  qadata?: string;
  children?: INavigationItem[];
}

export interface INavbarLinksList {
  links?: INavigationItem[];
  renderDropdown?: (item: INavigationItem, index: number) => React.ReactNode;
  renderLink?: (item: INavigationItem, index: number, props?: any) => React.ReactNode;
}

interface INavbarLinksListLinkProps extends INavbarLinkProps {
  'data-automation'?: string;
}

export interface INavbarLinksListLink {
  item: INavigationItem;
  index: number;
  props: INavbarLinksListLinkProps;
}

const NavbarLinksListLink = ({ item: { label, href }, index, props }: INavbarLinksListLink) => {
  return (
    <Navbar.Link key={`navbar-link-${index}`} href={href} {...props}>
      {label}
    </Navbar.Link>
  );
};

const NavbarLinksList: React.FC<INavbarLinksList> = ({
  links,
  renderLink = (item: INavigationItem, index: number, props) => (
    <NavbarLinksListLink item={item} index={index} props={props} />
  ),
  renderDropdown = (item: INavigationItem, index: number) => (
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
        links.map((item: INavigationItem, index: number) => {
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
