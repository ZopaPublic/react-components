import React, { useEffect, ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import { useViewport } from '../../../../hooks/useViewport';
import { grid, colors } from '../../../../constants';
import Dropdown, { Option as DropdownOption } from '../../../atoms/Dropdown/Dropdown';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import { useTabsContext } from '../hooks/useTabsContext';
import TabButton, { TabButtonProps } from '../TabButton/TabButton';

export interface TabButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
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

const TabButtons = ({
  tabButtons,
  defaultTab,
  'data-automation': dataAutomation,
  className,
  ...rest
}: TabButtonsProps) => {
  const { width = 0 } = useViewport();
  const { setActiveTab, activeTab } = useTabsContext();
  const handleOnChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setActiveTab(event.target.value);
    const currentTab = tabButtons.find((button) => button.tabId === event.target.value);
    currentTab?.afterOnClick && currentTab.afterOnClick();
  }, []);

  useEffect(() => {
    defaultTab && setActiveTab(defaultTab);
  }, []);

  return (
    <>
      {tabButtons.length > 2 && width <= grid.breakpoints.s ? (
        <div {...rest}>
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
        </div>
      ) : (
        <ButtonsContainer className={classnames('p-2', className || '')} {...rest}>
          {tabButtons.map((tabButton) => (
            <FlexCol m="fill" key={tabButton.tabId}>
              <TabButton
                data-automation={dataAutomation}
                tabId={tabButton.tabId}
                title={tabButton.title}
                afterOnClick={tabButton.afterOnClick}
              />
            </FlexCol>
          ))}
        </ButtonsContainer>
      )}
    </>
  );
};
export default TabButtons;
