import { createContext } from 'react';

import { GetTabButtonHtmlProps, GetTabContentProps } from './useTabs';

export interface TabsContext {
  getTabButtonHTMLProps: GetTabButtonHtmlProps;
  getTabContentProps: GetTabContentProps;
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export const TabsContext = createContext<TabsContext | undefined>(undefined);
