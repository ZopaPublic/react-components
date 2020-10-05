import React, { useEffect } from 'react';
import Button from '../../../atoms/Button/Button';
import { useTabsContext } from '../hooks/useTabsContext';

interface TabButtonProps {
  title: string;
  tabId: string;
  isDefaultTab?: boolean;
}

export default function TabButton({ title, tabId, isDefaultTab = false }: TabButtonProps) {
  const { activeTab, getTabButtonProps, setDefaultTab } = useTabsContext();
  const tabProps = getTabButtonProps(tabId);

  useEffect(() => {
    isDefaultTab && setDefaultTab(tabId);
  }, []);

  return (
    <Button styling={activeTab === tabId ? 'secondary' : 'primary'} {...tabProps}>
      {title}
    </Button>
  );
}
