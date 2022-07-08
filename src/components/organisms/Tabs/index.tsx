import React from 'react';

import TabsContainer, { TabsProps } from './TabsContainer/TabsContainer';
import TabContent from './TabContent/TabContent';
import TabButtons from './TabButtons/TabButtons';

interface TabsStatic {
  Content: typeof TabContent;
  Buttons: typeof TabButtons;
}

export const Tabs: TabsStatic & TabsProps = (props) => <TabsContainer {...props} />;

Tabs.Content = TabContent;
Tabs.Buttons = TabButtons;

export * from './hooks';
