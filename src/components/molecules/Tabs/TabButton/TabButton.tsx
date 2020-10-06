import React, { useEffect } from 'react';
import Button from '../../../atoms/Button/Button';
import { useTabsContext } from '../hooks/useTabsContext';

export interface TabButtonProps {
  title: string;
  tabId: string;
  isDefaultTab?: boolean;
}

const TabButton = ({ title, tabId, isDefaultTab = false }: TabButtonProps) => {
  const { activeTab, getTabButtonHTMLProps, setActiveTab } = useTabsContext();
  const tabProps = getTabButtonHTMLProps(tabId);

  useEffect(() => {
    isDefaultTab && setActiveTab(tabId);
  }, []);

  return (
    <Button styling={activeTab === tabId ? 'secondary' : 'primary'} {...tabProps}>
      {title}
    </Button>
  );
};

export default TabButton;
