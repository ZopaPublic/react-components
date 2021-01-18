import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Help from './Help';

describe('<Help />', () => {
  it('renders the default Help component with no a11y violations', async () => {
    const { container } = render(<Help />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML, { rules: { 'heading-order': { enabled: false } } });
    expect(results).toHaveNoViolations();
  });
});
