import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Accordion />);
    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
