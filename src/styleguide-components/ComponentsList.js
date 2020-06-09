import React from 'react';
import Link from './SidebarLink';
import styled from 'styled-components';

const LinkSpan = styled.span`
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    color: #00b9a7;
    cursor: pointer;
  }
`;

const HeadingLinkSpan = styled.span`
  color: ghostwhite;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.5px;
  margin-top: 12px;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 16px;
`;

const Item = styled.li`
  display: block;
  margin-bottom: 2px;
  line-height: 1.6;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSection }) => isSection && 'margin-top: 12px'}
`;

export function ComponentsListRenderer({ items }) {
  items = items.filter((item) => item.name);

  if (!items.length) {
    return null;
  }
  return (
    <List>
      {items.map(({ heading, name, href, content }) => {
        const isSection = !content || !content.props.items.length;
        return (
          <Item key={href} isSection={!isSection}>
            <Link href={href}>{heading ? <HeadingLinkSpan>{name}</HeadingLinkSpan> : <LinkSpan>{name}</LinkSpan>}</Link>
            {content}
          </Item>
        );
      })}
    </List>
  );
}

export default ComponentsListRenderer;
