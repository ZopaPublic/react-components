import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Children, cloneElement, isValidElement, useState } from 'react';
import { colors } from '../../../../constants/colors';
import Icon from '../../../atoms/Icon/Icon';
import Link from '../../../atoms/Link/Link';
import FlexCol from '../../../layout/FlexCol/FlexCol';
import FlexContainer from '../../../layout/FlexContainer/FlexContainer';
import FlexRow from '../../../layout/FlexRow/FlexRow';
import { CarouselContext } from '../context/CarouselContext';

export interface CarouselComponentProps {
  children?: React.ReactNode;
  /**
   * Used to specify which slide of the carousel should be initially visible.
   * @default Slide closest to the center: Math.ceil(totalNumberOfSlides / 2)
   */
  initialSlideIndex?: number;
}

const CarouselComponent = ({ children, initialSlideIndex }: CarouselComponentProps) => {
  const slidesCount = Children.count(children);
  const centralSlideIndex = Math.ceil(slidesCount / 2) - 1;
  const [activeSlide, setActiveSlide] = useState(
    initialSlideIndex !== undefined ? initialSlideIndex : centralSlideIndex,
  );
  const [sliderHeight, setSliderHeight] = useState(0);

  const slideForward = () => {
    setActiveSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const slideBackward = () => {
    setActiveSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  return (
    <CarouselContext.Provider value={{ activeSlide, slidesCount, sliderHeight, setSliderHeight }}>
      <FlexContainer gutter={0}>
        <FlexRow>
          <FlexCol xs={1} s={1} m="hidden" align="center" style={{ textAlign: 'right' }}>
            <Link title="previous" onClick={slideBackward}>
              <Icon variant={faChevronLeft} color={colors.grey} />
            </Link>
          </FlexCol>
          <FlexCol xs={10} s={10} m={12} align="center">
            <FlexContainer gutter={0}>
              <FlexRow cols={slidesCount} justify="space-around">
                {Children.toArray(children).map(
                  (child, index) => isValidElement(child) && cloneElement(child, { index }),
                )}
              </FlexRow>
            </FlexContainer>
          </FlexCol>
          <FlexCol xs={1} s={1} m="hidden" align="center">
            <Link title="next" onClick={slideForward}>
              <Icon variant={faChevronRight} color={colors.grey} />
            </Link>
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </CarouselContext.Provider>
  );
};

export default CarouselComponent;
