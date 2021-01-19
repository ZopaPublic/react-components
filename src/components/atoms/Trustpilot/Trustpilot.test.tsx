import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Trustpilot from './Trustpilot';
import 'jest-styled-components';

describe('<Trustpilot />', () => {
  it('renders without a11y violations', async () => {
    const { container } = render(<Trustpilot />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
