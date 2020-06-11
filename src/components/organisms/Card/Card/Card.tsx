import styled, { css } from 'styled-components';
import { typography } from '../../../../constants/typography';
import { colors } from '../../../../constants/colors';
import { CardImageContainer } from '../CardImage/CardImage';
import CardHeading from '../CardHeading/CardHeading';
import CardText from '../CardText/CardText';

export type CardLayout = 'horizontal' | 'vertical';
export type CardStyling = 'primary' | 'secondary';

export interface CardProps {
  /**
   * Determines the layout of the card
   * @default `vertical`
   */
  layout?: CardLayout;
  /**
   * Determines the styling of the card
   * @default `secondary`
   */
  styling?: CardStyling;
}

const layoutDirections: Record<CardLayout, string> = {
  horizontal: 'row',
  vertical: 'column',
};

const layoutImageStyles: Record<CardLayout, string> = {
  horizontal: '200px',
  vertical: '200px',
};

const headingSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.heading.h6,
  primary: typography.sizes.heading.h5,
};

const textSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.text.small,
  primary: typography.sizes.text.body,
};

const Card = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${colors.white};
  border: 1px solid ${colors.greyLighter};
  border-radius: 12px;
  box-shadow: 0 1px 0 0 ${colors.greyLight};
  flex-direction: ${({ layout = 'vertical' }) =>
    css`
      ${layoutDirections[layout]}
    `};
  & > ${CardImageContainer} {
    flex: 0 1
      ${({ layout = 'vertical' }) =>
        css`
          ${layoutImageStyles[layout]}
        `};
  }
  & ${CardHeading} {
    font-size: ${({ styling = 'secondary' }) =>
      css`
        ${headingSizes[styling]}
      `};
  }
  & ${CardText} {
    font-size: ${({ styling = 'secondary' }) =>
      css`
        ${textSizes[styling]}
      `};
  }
`;

export default Card;
