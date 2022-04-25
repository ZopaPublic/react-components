import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import { CardLayout, CardStyling } from './Card';
import Card from '..';

const layouts: CardLayout[] = ['vertical', 'horizontal'];
const stylings: CardStyling[] = ['primary', 'secondary', 'brand', 'info'];

describe('<Card />', () => {
  layouts.forEach((layout) => {
    it(`renders with ${layout} layout`, () => {
      const { container } = render(<Card layout={layout} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  stylings.forEach((styling) => {
    it(`renders with ${styling} styling`, () => {
      const { container } = render(<Card styling={styling} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('renders no a11y violations', async () => {
    const { container } = render(<Card />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
