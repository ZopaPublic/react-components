import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTabsContext } from '../hooks/useTabsContext';

interface TabContentProps {
  children: ReactNode;
  contentFor: string;
}

interface TabContentStyleProps {
  activeTab: string;
}
const ContentContainer = styled.div<TabContentStyleProps>`
  display: none;
  &[id="${({ activeTab }) => activeTab}"]{
    display: block;
  };
`;

export default function TabContent({ children, contentFor }: TabContentProps) {
  const { activeTab, getTabContentProps } = useTabsContext();
  const contentProps = getTabContentProps(contentFor);
  return (
    <ContentContainer activeTab={activeTab} {...contentProps}>
      {children}
    </ContentContainer>
  );
}
