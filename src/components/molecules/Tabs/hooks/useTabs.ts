import { useState } from 'react';

export interface TabButtonHtmlProps {
  'aria-controls': string;
  'aria-expanded': boolean;
  id: string;
  key: string;
  onClick: () => void;
}

export type GetTabButtonHtmlProps = (tabId: string) => TabButtonHtmlProps;

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

  const getTabButtonHTMLProps: GetTabButtonHtmlProps = (tabId: string) => ({
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
    setActiveTab: (tabId: string) => setActiveTab(tabId),
    getTabContentProps,
    getTabButtonHTMLProps,
    activeTab,
  };
};
