import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../axe-helper';
import DropdownField from './DropdownField';

describe('<DropdownField />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(
      <DropdownField
        label="Your cool dropdown ❤"
        errorMessage="You need to choose something!"
        inputSize="short"
        name="dropdown-field-default"
      >
        <option value="first" key="first">
          First value
        </option>
        <option value="second" key="second">
          Second value
        </option>
        <option value="third" key="third">
          Third value
        </option>
      </DropdownField>,
    );

    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
