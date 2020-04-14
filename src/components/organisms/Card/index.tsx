import React, { FC } from 'react';

import CardActions from './CardActions/CardActions';
import CardComponent, { TCardProps } from './Card/Card';
import CardContent from './CardContent/CardContent';
import CardHeading from './CardHeading/CardHeading';
import CardImage from './CardImage/CardImage';
import CardText from './CardText/CardText';

type TCardStatic = {
  Actions: typeof CardActions;
  Content: typeof CardContent;
  Heading: typeof CardHeading;
  Image: typeof CardImage;
  Text: typeof CardText;
};

const Card: TCardStatic & FC<TCardProps> = props => <CardComponent {...props} />;

Card.Actions = CardActions;
Card.Content = CardContent;
Card.Heading = CardHeading;
Card.Image = CardImage;
Card.Text = CardText;

export default Card;
