import CarouselComponent from './Carousel/Carousel';
import Slide from './CarouselSlide/CarouselSlide';
import SlideIcon from './CarouselSlideIcon/CarouselSlideIcon';
import SlideText from './CarouselSlideText/CarouselSlideText';

export const Carousel = Object.assign(CarouselComponent, {
  Slide: Slide,
  SlideIcon: SlideIcon,
  SlideText: SlideText,
});
