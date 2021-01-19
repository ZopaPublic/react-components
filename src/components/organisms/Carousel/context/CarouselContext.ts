import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface CarouselContext {
  slidesCount: number;
  activeSlide: number;
  sliderHeight: number;
  setSliderHeight: Dispatch<SetStateAction<number>>;
}

const initialContext: CarouselContext = {
  sliderHeight: 0,
  activeSlide: 0,
  slidesCount: 0,
  setSliderHeight: () => console.error('Carousel context not initialized yet.'),
};

export const CarouselContext = createContext<CarouselContext>(initialContext);

export const useCarouselContext = () => useContext(CarouselContext);
