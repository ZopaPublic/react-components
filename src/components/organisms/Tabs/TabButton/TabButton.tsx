import React from 'react';
import Button, { ButtonProps } from '../../../atoms/Button/Button';
import { useTabsContext } from '../hooks/useTabsContext';
import styled, { css } from 'styled-components';
import { colors } from '../../../../constants';

export interface TabButtonProps extends ButtonProps {
  title: string;
  tabId: string;
}

interface StyledButtonProps {
  activetab: string;
  tabid: string;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  border-radius: 4px;
  box-shadow: inset 0 12px ${colors.greyLightest}, inset 0 -12px ${colors.greyLightest}, inset 1px 0 ${colors.greyLight};
  flex-grow: 1;

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

  ${({ activetab, tabid }) =>
    activetab === tabid &&
    css`
      background: ${colors.white};
      box-shadow: none;

      & + button {
        box-shadow: none;
      }
    `}
`;

const TabButton = ({ title, tabId }: TabButtonProps) => {
  const { activeTab, getTabButtonHTMLProps } = useTabsContext();
  const tabProps = getTabButtonHTMLProps(tabId);

  return (
    <StyledButton activetab={activeTab} tabid={tabId} styling="link" {...tabProps}>
      {title}
    </StyledButton>
  );
};

export default TabButton;
