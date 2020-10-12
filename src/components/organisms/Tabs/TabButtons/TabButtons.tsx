import React, { useEffect, FC, ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';

import { DropdownOption } from '../../../..';
import { useViewport } from '../../../../hooks/useViewport';
import { grid, colors } from '../../../../constants';
import Dropdown from '../../../atoms/Dropdown/Dropdown';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import { useTabsContext } from '../hooks/useTabsContext';
import TabButton, { TabButtonProps } from '../TabButton/TabButton';

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

const StyledDropdown = styled(Dropdown)`
  width: 100%;
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
        <StyledDropdown
          data-automation={dataAutomation}
          defaultValue={activeTab ?? defaultTab}
          onChange={handleOnChange}
        >
          {tabButtons.map((tabButton) => (
            <DropdownOption key={tabButton.tabId} value={tabButton.tabId}>
              {tabButton.title}
            </DropdownOption>
          ))}
        </StyledDropdown>
      ) : (
        <ButtonsContainer className="p-2">
          {tabButtons.map((tabButton) => (
            <FlexCol m="fill" key={tabButton.tabId}>
              <TabButton data-automation={dataAutomation} tabId={tabButton.tabId} title={tabButton.title} />
            </FlexCol>
          ))}
        </ButtonsContainer>
      )}
    </>
  );
};
export default TabButtons;
