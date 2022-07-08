import React from 'react';

import TabsContainer, { TabsProps } from './TabsContainer/TabsContainer';
import TabContent from './TabContent/TabContent';
import TabButtons from './TabButtons/TabButtons';

const TabsMain = (props: TabsProps) => <TabsContainer {...props} />;

export const Tabs = Object.assign(TabsMain, { Content: TabContent, Buttons: TabButtons });

export * from './hooks';
