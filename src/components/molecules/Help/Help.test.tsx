import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Help from './Help';

describe('<Help />', () => {
  it('renders the default Help component with no a11y violations', async () => {
    const { container } = render(<Help email="savings@zopa.com" />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
