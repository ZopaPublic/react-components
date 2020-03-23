import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../constants/colors';
import { minMedia } from '../../../helpers/responsiveness';

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
  border-style: solid;
  border-width: 2px;
  border-radius: 0;
  padding: 2em 1em;
  display: ${({ display = 'block' }) => display};
  ${({ type }) =>
    type === 'linkCard'
      ? css`
          cursor: pointer;
          user-select: none;
        `
      : undefined}

  ${minMedia.tablet`
      padding: 2em;
      ${({ type }: ICardProps) =>
        css`
          border-radius: ${borderRadius[type as TCardTypes]};
        `};
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
