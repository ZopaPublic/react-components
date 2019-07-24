import React from 'react';
import { render } from '@testing-library/react';
import Arrow from './Arrow';

describe('<Arrow />', () => {
  const directions = ['down', 'up', 'left', 'right', 45, '225'];
  directions.forEach(direction => {
    it(`renders the component pointing ${direction}`, () => {
      const { container } = render(<Arrow color="black" direction={direction} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
