import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Title1 from './Title1';

describe('<Title1 />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Title1 style={{ textAlign: 'center' }}>test</Title1>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
