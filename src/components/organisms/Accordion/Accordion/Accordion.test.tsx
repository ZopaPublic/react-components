import React from 'react';
import { render } from '@testing-library/react';
import { Accordion } from '..';

describe('<Accordion />', () => {
  it('should render standard attributes but not require aria-label', () => {
    const title = 'test-accordion';
    const { queryByTitle } = render(<Accordion title={title} />);
    expect(queryByTitle(title)).toBeTruthy();
  });

  it('should render aria-label in case it is passed', () => {
    const ariaLabel = 'test-accordion';
    const { queryByLabelText } = render(<Accordion aria-label={ariaLabel} />);
    expect(queryByLabelText(ariaLabel)).toBeTruthy();
  });
});
