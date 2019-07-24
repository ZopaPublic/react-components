import React from 'react';
import { render } from '@testing-library/react';
import Chevron from './Chevron';

describe('<Chevron />', () => {
  const directions = ['down', 'up', 'left', 'right', 45, '225'];
  directions.forEach(direction => {
    it(`renders the component pointing ${direction}`, () => {
      const { container } = render(<Chevron color="black" direction={direction} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
