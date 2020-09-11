import React, { FC, useState } from 'react';
import Card from '../../organisms/Card';
import { colors } from '../../../constants';
import Spinner from '../../atoms/Spinner/Spinner';
import Icon from '../../atoms/Icon/Icon';
import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface ActionCardProps {
  children: any;
  id: string;
  icon: IconDefinition;
  loading: boolean;
  handleClick: (id: string) => void;
}

const ActionCardIcon = (selected: string, cardId: string, icon: IconDefinition, loading?: boolean) => {
  return loading && selected === cardId ? <Spinner size="small" /> : <Icon variant={icon} color={colors.grey} />;
};

const StyledActionCard = styled(Card)`
  /* &:hover {
    cursor: pointer;
  } */
`;

const StyledActionCardContent = styled(Card.Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  &:hover {
    cursor: pointer;
    svg {
      color: ${colors.greyDark};
    }
    background-color: ${colors.greyLightest};
  }
`;

const ActionCard: FC<ActionCardProps> = ({ children, id, icon = faChevronRight, loading, handleClick }) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const handleOnClick = () => {
    setSelectedId(id);
    handleClick(id);
  };
  return (
    <StyledActionCard onClick={handleOnClick}>
      <StyledActionCardContent>
        <div>{children}</div>
        {ActionCardIcon(selectedId, id, icon, loading)}
      </StyledActionCardContent>
    </StyledActionCard>
  );
};

export default ActionCard;
