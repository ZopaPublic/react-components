import styled from 'styled-components';
import { colors, typography } from '../../../../constants';
import { CardImageContainer } from '../CardImage/CardImage';
import CardContent from '../CardContent/CardContent';
import CardHeading from '../CardHeading/CardHeading';
import CardText from '../CardText/CardText';

export type CardLayout = 'horizontal' | 'vertical';
export type CardStyling = 'primary' | 'secondary' | 'brand';

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
  brand: typography.sizes.heading.h6,
};

const textSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.text.small,
  primary: typography.sizes.text.body,
  brand: typography.sizes.text.small,
};

const boxShadowStyle: Record<CardStyling, string> = {
  primary: `0 1px 0 0 ${colors.greyLight}`,
  secondary: `0 1px 0 0 ${colors.greyLight}`,
  brand: `none`,
};

const borderStyle: Record<CardStyling, string> = {
  primary: `1px solid ${colors.greyLighter}`,
  secondary: `1px solid ${colors.greyLighter}`,
  brand: `1px solid ${colors.brand}`,
};

const backgroundStyle: Record<CardStyling, string> = {
  primary: `${colors.white};`,
  secondary: `${colors.white};`,
  brand: `${colors.brandLight};`,
};

const Card = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${colors.white};
  border: ${({ styling = 'secondary' }) => borderStyle[styling]};
  border-radius: 12px;
  box-shadow: ${({ styling = 'secondary' }) => boxShadowStyle[styling]};
  flex-direction: ${({ layout = 'vertical' }) => layoutDirections[layout]};
  & > ${CardImageContainer} {
    flex: 0 1 ${({ layout = 'vertical' }) => layoutImageStyles[layout]};
  }
  & ${CardHeading} {
    font-size: ${({ styling = 'secondary' }) => headingSizes[styling]};
  }
  & ${CardText} {
    font-size: ${({ styling = 'secondary' }) => textSizes[styling]};
  }
  & ${CardContent} {
    background-color: ${({ styling = 'secondary' }) => backgroundStyle[styling]};
  }
`;

export default Card;
