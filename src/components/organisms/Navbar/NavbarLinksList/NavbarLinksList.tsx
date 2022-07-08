import React from 'react';

import NavbarDropdown, { RenderItemProps } from '../NavbarDropdown/NavbarDropdown';
import { NavigationItem, NavbarLinksListProps } from '../Navbar/Navbar';
import styled from 'styled-components';
import { colors, spacing } from '../../../../constants';
import { minMedia } from '../../../../helpers/responsiveness';

const SingleLink = styled.li`
  display: inline-block;
  border-bottom: 1px solid ${colors.greyLighter};
  margin-bottom: ${spacing[3]};
  padding-bottom: ${spacing[2]};

  ${minMedia.desktop`
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  `}

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const NavbarLinksList = ({ links, renderLink, setOpen }: NavbarLinksListProps) => {
  return (
    <>
      {links &&
        links.map((item: NavigationItem, index: number) =>
          item.children ? (
            <NavbarDropdown
              key={`dropdown-${index}`}
              id={`navbar-dropdown-${index}`}
              label={item.label}
              items={item.children!}
              data-automation={item['data-automation']}
              renderItem={({ item, getItemProps, close }: RenderItemProps) =>
                renderLink &&
                renderLink(item, index, {
                  ...getItemProps(),
                  isDropdownLink: true,
                  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    close();
                    setOpen(false);
                    item.onClick && item.onClick(e);
                  },
                })
              }
            />
          ) : (
            <SingleLink key={`link-${index}`}>
              {renderLink &&
                renderLink(item, index, {
                  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    setOpen(false);
                    item.onClick && item.onClick(e);
                  },
                })}
            </SingleLink>
          ),
        )}
    </>
  );
};

export default NavbarLinksList;
