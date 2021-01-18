import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../axe-helper';
import DropdownFiltered from './DropdownFiltered';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

describe('<DropdownFiltered />', () => {
  it('renders the Dropdown with options with no a11y violations', async () => {
    const { container } = render(<DropdownFiltered items={items} label="Label" name="test" />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the DropdownFiltered with options and a default selected value', () => {
    const { container } = render(
      <DropdownFiltered initialSelectedItem={{ value: 'orange' }} items={items} name="test" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
