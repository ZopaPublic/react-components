import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { maxMedia } from '../../../helpers/responsiveness';

export interface ICardProps {
  type?: TCardTypes;
  display?: 'block' | 'none' | 'inline-block';
}

export type TCardTypes = 'card' | 'linkCard';

const borderRadius: { [index in TCardTypes]: string } = {
  card: '4px',
  linkCard: '8px',
};

const SCard = styled.div<ICardProps>`
  background-color: ${colors.neutral.white};
  border-color: ${colors.neutral.white};
  border-radius: ${({ type }) => borderRadius[type as TCardTypes]};
  border-style: solid;
  border-width: 2px;
  display: ${({ display = 'block' }) => display};
  padding: 2em;

  ${({ type }) =>
    type === 'linkCard'
      ? `
    cursor: pointer;
    user-select: none;
  `
      : undefined}

  ${maxMedia.tablet`
    border-radius: 0;
    padding-left: 1em;
    padding-right: 1em;
  `};
`;

const Card: React.FunctionComponent<ICardProps> = props => {
  return <SCard {...props} />;
};

Card.defaultProps = {
  type: 'card',
};

export default Card;
