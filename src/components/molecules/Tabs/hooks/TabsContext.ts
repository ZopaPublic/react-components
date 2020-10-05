import { createContext } from 'react';

import { GetTabButtonProps, GetTabContentProps } from './useTabs';

export interface TabsContext {
  getTabButtonProps: GetTabButtonProps;
  getTabContentProps: GetTabContentProps;
  activeTab: string;
  setDefaultTab: (tabId: string) => void;
}

export const TabsContext = createContext<TabsContext | undefined>(undefined);
