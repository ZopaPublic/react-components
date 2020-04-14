import React, { FC } from 'react';

import CardComponent, { TCardProps } from './Card/Card';
import CardActions from './CardActions/CardActions';
import CardContent from './CardContent/CardContent';
import CardImage from './CardImage';
import CardHeading from './CardHeading/CardHeading';
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
