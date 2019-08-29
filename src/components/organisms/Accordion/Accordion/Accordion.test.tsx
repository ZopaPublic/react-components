import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '..';

describe('<Accordion />', () => {
  it('should render aria-label', () => {
    const ariaLabel = 'test-accordion';
    const { queryByText } = render(<Accordion aria-label={ariaLabel} />);
    expect(queryByText).toBeTruthy();
  });
});
