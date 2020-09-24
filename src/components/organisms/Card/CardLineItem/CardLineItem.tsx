import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants';
import Icon from '../../../atoms/Icon/Icon';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface CardLineItemProps {
  /**
   * font awesome icon
   */
  lineItemIcon?: IconDefinition;
  /**
   * url of the background image
   */
  lineItemChild?: React.ReactNode;
  /**
   * the content to be displayed the line item
   */
  children: React.ReactNode;
}

const CardLineItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const CardLineItem = ({ lineItemIcon, lineItemChild, children }: CardLineItemProps) => {
  return (
    <CardLineItemContainer>
      {children}
      {lineItemIcon ? (
        <Icon variant={lineItemIcon} color={colors.grey} data-automation="ZA.card-line-item" />
      ) : (
        lineItemChild
      )}
    </CardLineItemContainer>
  );
};

export default CardLineItem;
