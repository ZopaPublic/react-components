import React, { FC } from 'react';

import CardComponent, { TCardProps } from './Card/Card';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardActions from './CardActions';
import CardHeading from './CardHeading';
import CardText from './CardText';

type TCardStatic = {
  Image: typeof CardImage;
  Content: typeof CardContent;
  Actions: typeof CardActions;
  Heading: typeof CardHeading;
  Text: typeof CardText;
};

const Card: TCardStatic & FC<TCardProps> = props => <CardComponent {...props} />;

Card.Image = CardImage;
Card.Content = CardContent;
Card.Actions = CardActions;
Card.Heading = CardHeading;
Card.Text = CardText;

export default Card;
