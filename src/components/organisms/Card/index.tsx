import React, { HTMLAttributes } from 'react';

import CardActions from './CardActions/CardActions';
import CardComponent, { CardProps } from './Card/Card';
import CardContent from './CardContent/CardContent';
import CardHeading from './CardHeading/CardHeading';
import CardImage from './CardImage/CardImage';
import CardText from './CardText/CardText';
import CardLineItem from './CardLineItem/CardLineItem';

const Card = (props: CardProps & HTMLAttributes<HTMLDivElement>) => <CardComponent {...props} />;

export default Object.assign(Card, {
  Actions: CardActions,
  Content: CardContent,
  Heading: CardHeading,
  Image: CardImage,
  Text: CardText,
  LineItem: CardLineItem,
});
