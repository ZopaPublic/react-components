import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../../constants';
import Button, { ButtonProps } from '../../../atoms/Button/Button';
import { useTabsContext } from '../hooks/useTabsContext';

export interface TabButtonProps extends ButtonProps {
  title: string;
  tabId: string;
  afterOnClick?: () => void;
}

interface StyledButtonProps {
  activeTab: string;
  tabId: string;
}

const StyledButton = styled(Button).attrs({ className: 'py-2' })<StyledButtonProps>`
  box-shadow: inset 0 12px ${colors.greyLightest}, inset 0 -12px ${colors.greyLightest}, inset 1px 0 ${colors.greyLight};
  flex-grow: 1;
  width: 100%;

  &:first-child {
    box-shadow: none;
  }

  &:hover,
  :focus {
    box-shadow: none;
    & + button {
      box-shadow: none;
    }
  }

  ${({ activeTab, tabId }) =>
    activeTab === tabId &&
    css`
      background: ${colors.white};
      box-shadow: none;

      & + button {
        box-shadow: none;
      }
    `}
`;

const TabButton = ({ title, tabId, afterOnClick }: TabButtonProps) => {
  const { activeTab, getTabButtonHTMLProps } = useTabsContext();
  const tabProps = getTabButtonHTMLProps(tabId, afterOnClick);

  return (
    <StyledButton activeTab={activeTab} tabId={tabId} styling="link" {...tabProps}>
      {title}
    </StyledButton>
  );
};

export default TabButton;
