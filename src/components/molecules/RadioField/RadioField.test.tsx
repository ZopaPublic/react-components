import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import InputCheckbox from './RadioField';

describe('<RadioField />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<InputCheckbox label={'hello'} inputProps={{ name: 'test1', value: 1 }} />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
