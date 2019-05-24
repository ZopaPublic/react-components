import React from 'react';
import { render } from 'react-testing-library';
import { axe } from 'jest-axe';
import CheckboxField from './CheckboxField';

describe('<CheckboxField />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<CheckboxField label={'hello'} inputProps={{ name: 'test1' }} />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
