import { useState } from 'react';

export interface TabButtonProps {
  'aria-controls': string;
  'aria-expanded': boolean;
  id: string;
  key: string;
  onClick: () => void;
}

export type GetTabButtonProps = (tabId: string) => TabButtonProps;

export interface TabContentProps {
  'aria-hidden': boolean;
  'aria-labelledby': string;
  id: string;
  key: string;
  role: string;
}

export type GetTabContentProps = (tabId: string) => TabContentProps;

type ActiveTab = string | null;

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState<string>('');

  const getTabButtonProps: GetTabButtonProps = (tabId: string) => ({
    'aria-controls': `${tabId}-content`,
    'aria-expanded': tabId === activeTab,
    id: tabId,
    key: tabId,
    onClick: () => setActiveTab(tabId),
  });

  const getTabContentProps: GetTabContentProps = (tabId) => ({
    'aria-hidden': tabId !== activeTab,
    'aria-labelledby': tabId,
    id: tabId,
    key: tabId,
    role: 'region',
  });

  return {
    setDefaultTab: (tabId: string) => setActiveTab(tabId),
    getTabContentProps,
    getTabButtonProps,
    activeTab,
  };
};
