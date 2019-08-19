import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import { maxMedia } from '../../../helpers/responsiveness';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Type of card to render
   * @default card
   */
  type?: TCardTypes;
  /**
   * @default colors.base.white
   */
  borderColor?: string;
  /**
   * @default colors.base.white
   */
  backgroundColor?: string;
  /**
   * CSS display property
   * @default block
   */
  display?: string;
}

export type TCardTypes = 'card' | 'linkCard';

const borderRadius: { [index in TCardTypes]: string } = {
  card: '4px',
  linkCard: '8px',
};

const SCard = styled.div<ICardProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor, backgroundColor }) => borderColor || backgroundColor};
  border-radius: ${({ type }) => borderRadius[type as TCardTypes]};
  border-style: solid;
  border-width: 2px;
  display: ${(props: ICardProps) => props.display || 'block'};
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
  backgroundColor: colors.base.white,
  borderColor: colors.base.white,
  type: 'card',
};

export default Card;
