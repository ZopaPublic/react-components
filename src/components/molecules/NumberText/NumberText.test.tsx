import { axe } from 'jest-axe';
import React from 'react';
import { render, screen } from '@testing-library/react';

import NumberText from './NumberText';

import 'jest-styled-components';

const renderComponent = (props = {}) =>
  render(<NumberText title="Overall Balance" value={100000} {...props} className="mb-6 m:mb-7" />);

describe('<NumberText />', () => {
  it('renders without errors', async () => {
    const { container } = renderComponent({
      formatterOptions: {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('should position the numerical value to the right', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'right' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
    expect(screen.getByText(value)).toHaveStyleRule('order', '2');
  });

  it('should position the numerical value to the left', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'left' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
    expect(screen.getByText(value)).toHaveStyleRule('order', '1');
  });

  it('should position the numerical value to the right', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'top' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(screen.getByText(value)).toHaveStyleRule('order', '1');
  });

  it('should position the numerical value to the left', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'bottom' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(screen.getByText(value)).toHaveStyleRule('order', '2');
  });

  it('renders without  a11y violations', async () => {
    const { container } = renderComponent();
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
  });
});
