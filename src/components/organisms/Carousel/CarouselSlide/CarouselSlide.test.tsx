import { faCar } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import React from 'react';
import { Carousel } from '..';

describe('<Carousel.Slide />', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(
      <Carousel>
        <Carousel.Slide>
          <Carousel.SlideIcon variant={faCar} />
          <Carousel.SlideText>We check your car and dealership so you can buy with confidence</Carousel.SlideText>
        </Carousel.Slide>
      </Carousel>,
    );
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
