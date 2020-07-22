import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import InputCheckbox from './RadioField';

xdescribe('<RadioField />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<InputCheckbox label="hello" name="test1" value="1" />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the component with no icon and no a11y violations', async () => {
    const { container } = render(<InputCheckbox label="hello" name="test1" value="1" hideIcon />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
