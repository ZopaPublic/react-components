import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Children, cloneElement, FC, isValidElement, useState } from 'react';
import { colors, FlexCol, FlexContainer, FlexRow, Icon, Link } from '../../../..';

export type CarouselComponentProps = {
  initialSlide?: number;
};

const CarouselComponent: FC<CarouselComponentProps> = ({ children, initialSlide }) => {
  const slidesCount = Children.count(children);
  const [activeSlide, setActiveSlide] = useState(initialSlide || Math.floor(slidesCount / 2));

  const slideForward = () => {
    setActiveSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const slideBackward = () => {
    setActiveSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  return (
    <FlexContainer gutter={0}>
      <FlexRow>
        <FlexCol xs={1} m="hidden" align="center" style={{ textAlign: 'right' }}>
          <Link onClick={slideBackward}>
            <Icon variant={faChevronLeft} color={colors.grey} />
          </Link>
        </FlexCol>
        <FlexCol xs={10} m={12} align="center">
          <FlexContainer>
            <FlexRow cols={slidesCount}>
              {Children.toArray(children).map(
                (child, index) => isValidElement(child) && cloneElement(child, { index, slidesCount, activeSlide }),
              )}
            </FlexRow>
          </FlexContainer>
        </FlexCol>
        <FlexCol xs={1} m="hidden" align="center">
          <Link onClick={slideForward}>
            <Icon variant={faChevronRight} color={colors.grey} />
          </Link>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
};

export default CarouselComponent;
