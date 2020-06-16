import React from 'react';

import NavbarDropdown, { ItemProps } from '../NavbarDropdown/NavbarDropdown';
import { NavigationItem, NavbarLinksListProps } from '../Navbar/Navbar';
import styled from 'styled-components';
import { colors, spacing } from '../../../../constants';
import { minMedia } from '../../../../helpers/responsiveness';

export interface RenderItemProps {
  item: NavigationItem;
  getItemProps: () => ItemProps;
}

const NavbarDropdownWrapper = styled.div`
  display: inline-block;
  border-bottom: 1px solid ${colors.greyLighter};
  padding: ${spacing[3]} ${spacing[4]} ${spacing[3]} ${spacing[4]};

  &:last-child {
    border-bottom: 0;
  }

  ${minMedia.desktop`
    border-bottom: 0;
  `}
`;

const NavbarLinksList: React.FC<NavbarLinksListProps> = ({ links, renderLink }) => (
  <>
    {links &&
      links.map((item: NavigationItem, index: number) =>
        !!item.children ? (
          <NavbarDropdownWrapper key={`dropdown-${index}`}>
            <NavbarDropdown
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
          </NavbarDropdownWrapper>
        ) : (
          <NavbarDropdownWrapper key={`link-${index}`}>{renderLink && renderLink(item, index)}</NavbarDropdownWrapper>
        ),
      )}
  </>
);

export default NavbarLinksList;
