import axe from '../../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';
import 'jest-styled-components';

describe('<TrustpilotLogo />', () => {
  it('renders without a11y violations', async () => {
    const { container } = render(<Logo />);
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
