import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import Fieldset from './Fieldset';

describe('<Fieldset />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Fieldset />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
