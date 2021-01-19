import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import React from 'react';
import { Carousel } from '..';

describe('<Carousel.SlideText />', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(
      <Carousel.SlideText>We check your car and dealership so you can buy with confidence</Carousel.SlideText>,
    );
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
