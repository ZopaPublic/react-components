import React, { Fragment } from 'react';

import NavbarDropdown, { ItemProps } from '../NavbarDropdown/NavbarDropdown';
import { NavigationItem, NavbarLinksListProps } from '../Navbar/Navbar';

export interface RenderItemProps {
  item: NavigationItem;
  getItemProps: () => ItemProps;
}

const NavbarLinksList: React.FC<NavbarLinksListProps> = ({ links, renderLink }) => (
  <>
    {links &&
      links.map((item: NavigationItem, index: number) =>
        !!item.children ? (
          <NavbarDropdown
            key={`dropdown-${index}`}
            id={`navbar-dropdown-${index}`}
            label={item.label}
            items={item.children!}
            renderItem={({ item, getItemProps }: RenderItemProps) =>
              renderLink &&
              renderLink(item, index, {
                ...getItemProps(),
                isDropdownLink: true,
              })
            }
          />
        ) : (
          <Fragment key={`link-${index}`}>{renderLink && renderLink(item, index)}</Fragment>
        ),
      )}
  </>
);

export default NavbarLinksList;
