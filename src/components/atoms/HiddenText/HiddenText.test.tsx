import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import HiddenText from './HiddenText';

describe('<HiddenText />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<HiddenText>Hidden text test</HiddenText>);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
