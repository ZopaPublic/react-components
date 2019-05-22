import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<ErrorMessage>Ops error !</ErrorMessage>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
