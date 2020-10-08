import React, { useEffect, FC, ChangeEvent, useCallback } from 'react';
import { useTabsContext } from '../hooks/useTabsContext';
import { useViewport } from '../../../../hooks/useViewport';
import Dropdown from '../../../atoms/Dropdown/Dropdown';
import { grid, colors } from '../../../../constants';
import TabButton, { TabButtonProps } from '../TabButton/TabButton';
import { DropdownOption } from '../../../..';
import styled from 'styled-components';

interface TabButtonsProps {
  tabButtons: TabButtonProps[];
  defaultTab?: string;
  'data-automation'?: string;
}

const ButtonsContainer = styled.div`
  background: ${colors.greyLightest};
  display: flex;
  justify-content: space-evenly;
`;

const TabButtons: FC<TabButtonsProps> = ({ tabButtons, defaultTab, 'data-automation': dataAutomation }) => {
  const { width = 0 } = useViewport();
  const { setActiveTab, activeTab } = useTabsContext();
  const handleOnChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => setActiveTab(event.target.value), []);

  useEffect(() => {
    defaultTab && setActiveTab(defaultTab);
  }, []);

  return (
    <>
      {tabButtons.length > 2 && width <= grid.breakpoints.s ? (
        <Dropdown data-automation={dataAutomation} defaultValue={activeTab ?? defaultTab} onChange={handleOnChange}>
          {tabButtons.map((tabButton) => (
            <DropdownOption key={tabButton.tabId} value={tabButton.tabId}>
              {tabButton.title}
            </DropdownOption>
          ))}
        </Dropdown>
      ) : (
        <ButtonsContainer className="p-2">
          {tabButtons.map((tabButton) => (
            <TabButton
              data-automation={dataAutomation}
              key={tabButton.tabId}
              tabId={tabButton.tabId}
              title={tabButton.title}
            />
          ))}
        </ButtonsContainer>
      )}
    </>
  );
};
export default TabButtons;
