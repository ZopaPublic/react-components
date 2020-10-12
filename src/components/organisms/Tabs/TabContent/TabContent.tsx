import React, { ReactNode, FC } from 'react';
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
  &[id="${({ activeTab }) => `${activeTab}-content`}"]{
    display: block;
  };
`;

const TabContent: FC<TabContentProps> = ({ children, contentFor }) => {
  const { activeTab, getTabContentProps } = useTabsContext();
  const contentProps = getTabContentProps(contentFor);
  return (
    <ContentContainer activeTab={activeTab} {...contentProps}>
      {children}
    </ContentContainer>
  );
};

export default TabContent;
