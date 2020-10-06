import React, { FC } from 'react';

import TabsContainer, { TabsProps } from './Tabs/Tabs';
import TabContent from './TabContent/TabContent';
import TabButtons from './TabButtons/TabButtons';

interface TabsStatic {
  Content: typeof TabContent;
  Buttons: typeof TabButtons;
}

export const Tabs: TabsStatic & FC<TabsProps> = (props) => <TabsContainer {...props} />;

Tabs.Content = TabContent;
Tabs.Buttons = TabButtons;

export * from './hooks';
