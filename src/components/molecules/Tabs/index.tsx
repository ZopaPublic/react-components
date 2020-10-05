import React, { FC } from 'react';

import TabsContainer, { TabsProps } from './Tabs/Tabs';
import TabContent from './TabContent/TabContent';
import TabButton from './TabButton/TabButton';

interface TabsStatic {
  Content: typeof TabContent;
  Button: typeof TabButton;
}

const Tabs: TabsStatic & FC<TabsProps> = (props) => <TabsContainer {...props} />;

Tabs.Content = TabContent;
Tabs.Button = TabButton;

export * from './hooks';
export default Tabs;
