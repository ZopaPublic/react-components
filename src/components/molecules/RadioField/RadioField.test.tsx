import React from 'react';
import { render } from 'react-testing-library';
import { axe } from 'jest-axe';
import InputCheckbox from './RadioField';

describe('<RadioField />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<InputCheckbox label={'hello'} inputProps={{ name: 'test1', value: 1 }} />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
