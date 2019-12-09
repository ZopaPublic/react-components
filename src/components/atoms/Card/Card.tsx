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

const Card = styled.div<ICardProps>`
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

Card.defaultProps = {
  type: 'card',
};

// TODO: Styleguidist to be able to locate styled components. See #147.
export const StyleguidstCard: React.FC<ICardProps> = props => {
  return <Card {...props} />;
};

export default Card;
