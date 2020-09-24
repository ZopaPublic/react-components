import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants';
import Icon from '../../../atoms/Icon/Icon';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface CardIconProps {
  /**
   * url of the background image
   */
  icon?: IconDefinition;
  /**
   * url of the background image
   */
  children?: React.ReactNode;
  /**
   * url of the background image
   */
  content?: React.ReactNode;
}

const CardLineItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const CardLineItem = ({ icon, content, children }: CardIconProps) => {
  return (
    <CardLineItemContainer>
      {children}
      {icon ? <Icon variant={icon} color={colors.grey} data-automation="ZA.card-icon" /> : content}
    </CardLineItemContainer>
  );
};

export default CardLineItem;
