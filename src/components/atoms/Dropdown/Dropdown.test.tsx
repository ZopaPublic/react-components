import React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../../constants';
import Dropdown, { Option } from './Dropdown';

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
    const options = [
      { value: 'value1', text: 'value1' },
      { value: 'value2', text: 'value2' },
    ];
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
    ${false}     | ${colors.grey}
    ${undefined} | ${colors.grey}
    ${true}      | ${colors.alert}
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

  test.each`
    isValid      | expectBorderColor
    ${false}     | ${colors.grey}
    ${undefined} | ${colors.grey}
    ${true}      | ${colors.success}
  `(
    'renders the border with the "$expectBorderColor" color if the isValid is "$isValid"',
    ({ isValid, expectBorderColor }) => {
      const { container } = render(
        <Dropdown isValid={isValid}>
          <Option value="first">First value</Option>
          <Option value="second">Second value</Option>
        </Dropdown>,
      );
      expect(container.firstChild).toHaveStyleRule('border', expect.stringContaining(expectBorderColor));
    },
  );
});
