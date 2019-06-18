import { axe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import Title2 from './Title2';

describe('<Title2 />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Title2 style={{ textAlign: 'center' }}>test</Title2>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
