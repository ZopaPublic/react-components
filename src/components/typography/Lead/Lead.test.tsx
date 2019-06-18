import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Lead from './Lead';

describe('<Lead />', () => {
  it('renders the component without props with no a11y violations', async () => {
    const { container } = render(<Lead />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
  it('renders the component with props', () => {
    const { container } = render(<Lead style={{ textAlign: 'center' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
