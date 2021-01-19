import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../axe-helper';
import CheckboxField from './CheckboxField';

describe('<CheckboxField />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<CheckboxField label={'hello'} name="test1" />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the component with no control icon and no a11y violations', async () => {
    const { container } = render(<CheckboxField label={'hello'} name="test1" hideControl />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
