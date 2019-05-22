import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Title3 from './Title3';

describe('<Title3 />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Title3 style={{ textAlign: 'center' }}>test</Title3>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
