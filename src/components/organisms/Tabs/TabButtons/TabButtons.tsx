import React, { useEffect, FC, ChangeEvent } from 'react';
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
  dataAutomation?: string;
}

const ButtonsContainer = styled.div`
  background: ${colors.greyLightest};
`;

const TabButtons: FC<TabButtonsProps> = ({ tabButtons, defaultTab, dataAutomation }) => {
  const { width = 0 } = useViewport();

  const { setActiveTab, activeTab } = useTabsContext();

  useEffect(() => {
    defaultTab && setActiveTab(defaultTab);
  }, []);

  return (
    <>
      {tabButtons.length > 2 && width <= grid.breakpoints.s ? (
        <Dropdown
          data-automation={dataAutomation}
          defaultValue={activeTab ?? defaultTab}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setActiveTab(event.target.value)}
        >
          {tabButtons.map((tabButton: TabButtonProps) => (
            <DropdownOption key={tabButton.tabId} value={tabButton.tabId}>
              {tabButton.title}
            </DropdownOption>
          ))}
        </Dropdown>
      ) : (
        <ButtonsContainer className="p-2">
          {tabButtons.map((tabButton: TabButtonProps) => (
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
