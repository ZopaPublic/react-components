import React from 'react';
import { render } from '@testing-library/react';
import { Accordion } from '..';

describe('<Accordion />', () => {
  it('should render aria-label', () => {
    const ariaLabel = 'test-accordion';
    const { queryByLabelText } = render(<Accordion aria-label={ariaLabel} />);
    expect(queryByLabelText(ariaLabel)).toBeTruthy();
  });
});
