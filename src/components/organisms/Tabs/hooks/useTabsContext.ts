import { useContext } from 'react';

import { TabsContext } from './TabsContext';

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error('useTabsContext must be used within Tabs');
  }
  return context;
};
