import React, { FC } from 'react';
import CarouselComponent, { CarouselComponentProps } from './Carousel/Carousel';
import Slide from './CarouselSlide/CarouselSlide';
import SlideIcon from './CarouselSlideIcon/CarouselSlideIcon';
import SlideText from './CarouselSlideText/CarouselSlideText';

interface CarouselStatic {
  Slide: typeof Slide;
  SlideIcon: typeof SlideIcon;
  SlideText: typeof SlideText;
}

export const Carousel: CarouselStatic & CarouselComponentProps = (props) => <CarouselComponent {...props} />;

Carousel.Slide = Slide;
Carousel.SlideIcon = SlideIcon;
Carousel.SlideText = SlideText;
