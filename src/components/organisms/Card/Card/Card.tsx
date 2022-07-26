import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants';
import { CardImageContainer } from '../CardImage/CardImage';
import CardText from '../CardText/CardText';
import CardLineItem from '../CardLineItem/CardLineItem';
import { AppTheme, useThemeContext } from '../../../styles/Theme';

export type CardLayout = 'horizontal' | 'vertical';
export type CardStyling = 'primary' | 'secondary' | 'brand' | 'action' | 'info';

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

const StyledCard = styled.div<CardProps & { theme: AppTheme }>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${({ theme, styling = 'secondary' }) => theme.card[styling].backgroundStyle};
  border: ${({ theme, styling = 'secondary' }) => theme.card[styling].borderStyle};
  border-radius: ${({ theme, styling = 'secondary' }) => theme.card[styling].borderRadius};
  box-shadow: ${({ theme, styling = 'secondary' }) => theme.card[styling].boxShadowStyle};
  flex-direction: ${({ layout = 'vertical' }) => layoutDirections[layout]};
  & > ${CardImageContainer} {
    flex: 0 1 ${({ layout = 'vertical' }) => layoutImageStyles[layout]};
  }
  & .zrc__card-heading {
    font-size: ${({ theme, styling = 'secondary' }) => theme.card[styling].headingSize};
  }
  & ${CardText} {
    font-size: ${({ theme, styling = 'secondary' }) => theme.card[styling].textSizes};
  }
  ${({ styling }) =>
    styling === 'action'
      ? `&:hover {
        cursor: pointer;
        background-color: ${colors.greyLightest};

        & > ${CardLineItem}:last-of-type { 
          svg {
            color: ${colors.greyDark};
          }
        }
      } 
  }`
      : null}
`;

const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & CardProps) => {
  const theme = useThemeContext();
  return (
    <StyledCard theme={theme} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
