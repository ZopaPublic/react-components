import { useState } from 'react';

export interface TabButtonHtmlProps {
  'aria-controls': string;
  'aria-expanded': boolean;
  id: string;
  key: string;
  onClick: () => void;
}

export type GetTabButtonHtmlProps = (tabId: string, afterOnClick?: () => void) => TabButtonHtmlProps;

export interface TabContentProps {
  'aria-hidden': boolean;
  'aria-labelledby': string;
  id: string;
  key: string;
  role: string;
}

export type GetTabContentProps = (tabId: string) => TabContentProps;

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState<string>('');

  const getTabButtonHTMLProps: GetTabButtonHtmlProps = (tabId: string, afterOnClick?: () => void) => {
    return {
      'aria-controls': `${tabId}-content`,
      'aria-expanded': tabId === activeTab,
      id: tabId,
      key: tabId,
      onClick: () => {
        setActiveTab(tabId);
        afterOnClick && afterOnClick();
      },
    };
  };

  const getTabContentProps: GetTabContentProps = (tabId) => ({
    'aria-hidden': tabId !== activeTab,
    'aria-labelledby': tabId,
    id: `${tabId}-content`,
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
