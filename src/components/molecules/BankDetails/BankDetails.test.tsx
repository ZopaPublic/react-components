import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../../axe-helper';

import BankDetails from './BankDetails';

describe('BankDetails', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<BankDetails copyText="1234">12-34</BankDetails>);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
