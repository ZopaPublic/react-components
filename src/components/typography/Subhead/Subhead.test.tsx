import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Subhead from './Subhead';

describe('<Subhead />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Subhead>test</Subhead>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
