import { faCar } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import React from 'react';
import { Carousel } from '..';

describe('<Carousel.SlideIcon />', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<Carousel.SlideIcon variant={faCar} />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
