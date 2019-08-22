import React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../../constants/colors';
import Dropdown, { DEFAULT_COLOR, Option } from './Dropdown';

describe('<Dropdown />', () => {
  it('renders the Dropdown with options', () => {
    const { container } = render(
      <Dropdown>
        <Option value="first">First value</Option>
        <Option value="second">Second value</Option>
      </Dropdown>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the Dropdown with one option', () => {
    const { container } = render(
      <Dropdown>
        <Option value="first">First value</Option>
      </Dropdown>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the Dropdown with options and a default selected value', () => {
    const { container } = render(
      <Dropdown defaultValue="defaultValue">
        <Option value="otherValue">Other Value</Option>
        <Option value="defaultValue">Default value to be selected</Option>
      </Dropdown>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the Dropdown with options passed through an array.map', () => {
    const options = [{ value: 'value1', text: 'value1' }, { value: 'value2', text: 'value2' }];
    const { container } = render(
      <Dropdown defaultValue="defaultValue">
        <Option value="">Select a value</Option>
        {options.map(({ value, text }) => (
          <Option key={value} value={value}>
            {text}
          </Option>
        ))}
      </Dropdown>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test.each`
    hasError     | expectBorderColor
    ${false}     | ${DEFAULT_COLOR}
    ${undefined} | ${DEFAULT_COLOR}
    ${true}      | ${colors.semantic.error}
  `(
    'renders the border with the "$expectBorderColor" color if the hasError is "$hasError"',
    ({ hasError, expectBorderColor }) => {
      const { container } = render(
        <Dropdown hasError={hasError}>
          <Option value="first">First value</Option>
          <Option value="second">Second value</Option>
        </Dropdown>,
      );
      expect(container.firstChild).toHaveStyleRule('border', expect.stringContaining(expectBorderColor));
    },
  );
});
