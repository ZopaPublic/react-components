import React, { FC } from 'react';
import CarouselComponent, { CarouselComponentProps } from './CarouselComponent/CarouselComponent';
import Slide from './Slide/Slide';
import SlideText from './SlideText/SlideText';
import SlideIcon from './SlideIcon/SlideIcon';

interface CarouselStatic {
  Slide: typeof Slide;
  SlideIcon: typeof SlideIcon;
  SlideText: typeof SlideText;
}

export const Carousel: CarouselStatic & FC<CarouselComponentProps> = (props) => <CarouselComponent {...props} />;

Carousel.Slide = Slide;
Carousel.SlideIcon = SlideIcon;
Carousel.SlideText = SlideText;
