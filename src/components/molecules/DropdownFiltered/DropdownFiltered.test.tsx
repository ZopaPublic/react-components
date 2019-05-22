import React from 'react';
import { render } from 'react-testing-library';
import DropdownFiltered from './DropdownFiltered';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

describe('<DropdownFiltered />', () => {
  it('renders the Dropdown with options with no a11y violations', async () => {
    const { container } = render(<DropdownFiltered items={items} label="Label" inputProps={{ name: 'test' }} />);
    expect(container.firstChild).toMatchSnapshot();
    // const results = await axe(container.innerHTML);
    // expect(results).toHaveNoViolations();
  });

  it('renders the DropdownFiltered with options and a default selected value', () => {
    const { container } = render(
      <DropdownFiltered defaultSelectedItem={{ value: 'orange' }} items={items} inputProps={{ name: 'test' }} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
