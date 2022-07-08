import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTabsContext } from '../hooks/useTabsContext';

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
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

const TabContent: TabContentProps = ({ children, contentFor, ...rest }) => {
  const { activeTab, getTabContentProps } = useTabsContext();
  const contentProps = getTabContentProps(contentFor);
  return (
    <ContentContainer activeTab={activeTab} {...contentProps} {...rest}>
      {children}
    </ContentContainer>
  );
};

export default TabContent;
