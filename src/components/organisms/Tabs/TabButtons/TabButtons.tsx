import React, { useEffect, FC, ChangeEvent } from 'react';
import { useTabsContext } from '../hooks/useTabsContext';
import { useViewport } from '../../../../hooks/useViewport';
import Dropdown from '../../../atoms/Dropdown/Dropdown';
import { grid } from '../../../../constants';
import TabButton, { TabButtonProps } from '../TabButton/TabButton';
import { DropdownOption } from '../../../..';

interface TabButtonsProps {
  tabButtons: TabButtonProps[];
  defaultTab?: string;
}

const TabButtons: FC<TabButtonsProps> = ({ tabButtons, defaultTab }) => {
  const { width = 0 } = useViewport();

  const { setActiveTab } = useTabsContext();

  useEffect(() => {
    defaultTab && setActiveTab(defaultTab);
  }, []);

  return (
    <>
      {tabButtons.length > 2 && width <= grid.breakpoints.s ? (
        <Dropdown
          defaultValue={defaultTab}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setActiveTab(event.target.value)}
        >
          {tabButtons.map((tabButton: TabButtonProps) => (
            <DropdownOption key={tabButton.tabId} value={tabButton.tabId}>
              {tabButton.title}
            </DropdownOption>
          ))}
        </Dropdown>
      ) : (
        tabButtons.map((tabButton: TabButtonProps) => (
          <TabButton key={tabButton.tabId} tabId={tabButton.tabId} title={tabButton.title} />
        ))
      )}
    </>
  );
};
export default TabButtons;
