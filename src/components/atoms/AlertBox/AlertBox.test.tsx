import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import AlertBox from './AlertBox';

describe('<AlertBox />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<AlertBox />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
