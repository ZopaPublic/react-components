import styled from 'styled-components';
import { spacing } from '../../../../constants';

export type CardLineItemAlignment = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';

export interface CardLineItemProps {
  align?: CardLineItemAlignment;
}

export interface CardLineItem extends React.HTMLAttributes<HTMLDivElement>, CardLineItemProps {}

const CardLineItem = styled.div<CardLineItem>`
  padding: ${spacing[4]};
  align-self: ${({ align = 'center' }) => align};
`;

export default CardLineItem;
