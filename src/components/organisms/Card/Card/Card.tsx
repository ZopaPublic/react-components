import styled from 'styled-components';
import { colors, typography } from '../../../../constants';
import { CardImageContainer } from '../CardImage/CardImage';
import CardContent from '../CardContent/CardContent';
import CardHeading from '../CardHeading/CardHeading';
import CardText from '../CardText/CardText';

export type CardLayout = 'horizontal' | 'vertical';
export type CardStyling = 'primary' | 'secondary' | 'brand' | 'success' | 'action' | 'alert' | 'warning' | 'info';

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
  success: typography.sizes.heading.h6,
  action: typography.sizes.heading.h6,
  alert: typography.sizes.heading.h6,
  warning: typography.sizes.heading.h6,
  info: typography.sizes.heading.h6,
};

const textSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.text.small,
  primary: typography.sizes.text.body,
  brand: typography.sizes.text.small,
  success: typography.sizes.text.small,
  action: typography.sizes.text.small,
  alert: typography.sizes.text.small,
  warning: typography.sizes.text.small,
  info: typography.sizes.text.small,
};

const boxShadowStyle: Record<CardStyling, string> = {
  primary: `0 1px 0 0 ${colors.greyLight}`,
  secondary: `0 1px 0 0 ${colors.greyLight}`,
  brand: `none`,
  success: `none`,
  action: `none`,
  alert: `none`,
  warning: `none`,
  info: `none`,
};

const borderStyle: Record<CardStyling, string> = {
  primary: `1px solid ${colors.greyLighter}`,
  secondary: `1px solid ${colors.greyLighter}`,
  brand: `1px solid ${colors.brand}`,
  success: `1px solid ${colors.success}`,
  action: `1px solid ${colors.actionPlain}`,
  alert: `1px solid ${colors.alert}`,
  warning: `1px solid ${colors.warning}`,
  info: `none`,
};

const backgroundStyle: Record<CardStyling, string> = {
  primary: `${colors.white};`,
  secondary: `${colors.white};`,
  brand: `${colors.brandLight};`,
  success: `${colors.successLight};`,
  action: `${colors.actionLight};`,
  alert: `${colors.alertLight};`,
  warning: `${colors.warningLight};`,
  info: `${colors.greyLightest};`,
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
