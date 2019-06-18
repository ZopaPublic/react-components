import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import DropdownFiltered from './DropdownFiltered';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

describe('<DropdownFiltered />', () => {
  it('renders the Dropdown with options with no a11y violations', async () => {
    const { container } = render(<DropdownFiltered items={items} label="Label" inputProps={{ name: 'test' }} />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the DropdownFiltered with options and a default selected value', () => {
    const { container } = render(
      <DropdownFiltered defaultSelectedItem={{ value: 'orange' }} items={items} inputProps={{ name: 'test' }} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
