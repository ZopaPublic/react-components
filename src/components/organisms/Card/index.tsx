import React, { HTMLAttributes } from 'react';

import CardActions from './CardActions/CardActions';
import CardComponent, { CardProps } from './Card/Card';
import CardContent from './CardContent/CardContent';
import CardHeading from './CardHeading/CardHeading';
import CardImage from './CardImage/CardImage';
import CardText from './CardText/CardText';
import CardLineItem from './CardLineItem/CardLineItem';

type CardStatic = {
  Actions: typeof CardActions;
  Content: typeof CardContent;
  Heading: typeof CardHeading;
  Image: typeof CardImage;
  Text: typeof CardText;
  LineItem: typeof CardLineItem;
};

const Card: CardStatic & CardProps & HTMLAttributes<HTMLDivElement> = (props) => <CardComponent {...props} />;

Card.Actions = CardActions;
Card.Content = CardContent;
Card.Heading = CardHeading;
Card.Image = CardImage;
Card.Text = CardText;
Card.LineItem = CardLineItem;

export default Card;
