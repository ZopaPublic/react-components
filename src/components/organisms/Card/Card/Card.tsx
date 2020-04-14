import styled from 'styled-components';
import { typography } from '../../../../constants/typography';
import { colors } from '../../../../constants/colors';
import { CardImageContainer } from '../CardImage/CardImage';
import CardHeading from '../CardHeading/CardHeading';
import CardText from '../CardText/CardText';

export type TCardLayout = 'horizontal' | 'vertical';
export type TCardStyling = 'primary' | 'secondary';

export type TCardProps = {
  layout?: TCardLayout;
  styling?: TCardStyling;
};

const layoutDirections: { [key in TCardLayout]: string } = {
  horizontal: 'row',
  vertical: 'column',
};

const layoutImageStyles: { [key in TCardLayout]: string } = {
  horizontal: '200px',
  vertical: '200px',
};

const headingSizes: { [key in TCardStyling]: string } = {
  secondary: typography.sizes.heading.h6,
  primary: typography.sizes.heading.h5,
};

const textSizes: { [key in TCardStyling]: string } = {
  secondary: typography.sizes.text.small,
  primary: typography.sizes.text.body,
};

const Card = styled.div<TCardProps>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${colors.white};
  border: 1px solid ${colors.greyLighter};
  border-radius: 12px;
  box-shadow: 0 1px 0 0 ${colors.greyLight};
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
`;

export default Card;
