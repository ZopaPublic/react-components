import React from 'react';
import styled from 'styled-components';
import * as colors from '../../../constants/colors';
import { maxMedia } from '../../../helpers/responsiveness';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: TCardTypes;
  borderColor?: string;
  backgroundColor?: string;
  display?: string;
}

export type TCardTypes = 'card' | 'linkCard' | 'button';

const borderRadius: { [index in TCardTypes]: string } = {
  button: '1000px',
  card: '4px',
  linkCard: '8px',
};

const SCard = styled.div<ICardProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor, backgroundColor }) => borderColor || backgroundColor};
  border-radius: ${({ type }) => borderRadius[type]};
  border-style: solid;
  border-width: 2px;
  display: ${({ display = 'block' }) => display};
  padding: 2em;

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
