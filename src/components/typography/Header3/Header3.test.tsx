import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Header3 from './Header3';

describe('<Header3 />', () => {
  it('renders the component without props with no a11y violations', async () => {
    const { container } = render(<Header3>I'm an h3 header</Header3>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
  it('renders the component with props', () => {
    const { container } = render(<Header3 style={{ textAlign: 'center' }}>I'm an h3 header</Header3>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
