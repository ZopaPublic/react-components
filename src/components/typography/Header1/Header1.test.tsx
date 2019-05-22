import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Header1 from './Header1';

describe('<Header1 />', () => {
  it('renders the component without props with no a11y violations', async () => {
    const { container } = render(<Header1>I'm an h1 header</Header1>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
  it('renders the component with props', () => {
    const { container } = render(<Header1 style={{ textAlign: 'center' }}>I'm an h1 header</Header1>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
