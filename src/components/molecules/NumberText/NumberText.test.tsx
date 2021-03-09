import axe from '../../../../axe-helper';
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

  it('should position the numerical value to the right and vertically align the text in the center', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'right' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(screen.getByText(value)).toHaveStyleRule('order', '2');
  });

  it('should position the numerical value to the left and vertically align the text in the center', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'left' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(screen.getByText(value)).toHaveStyleRule('order', '1');
  });

  it('should position the numerical value at the top and vertically align the text in the center', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'top' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    expect(screen.getByText(value)).toHaveStyleRule('order', '1');
  });

  it('should position the numerical value at the bottom and vertically align the text in the center', () => {
    const value = '100,000';
    const { container } = renderComponent({ numberPosition: 'bottom' });
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    expect(screen.getByText(value)).toHaveStyleRule('order', '2');
  });

  it('renders the fallback option', () => {
    const fallback = 'N/A';
    render(<NumberText title="Overall Balance" fallback={'N/A'} className="mb-6 m:mb-7" />);
    expect(screen.getByText(fallback)).toHaveTextContent('N/A');
  });

  it('renders the value when it is zero', () => {
    const value = '0';
    render(<NumberText title="Overall Balance" value={0} className="mb-6 m:mb-7" />);
    expect(screen.getByText(value)).toHaveTextContent('0');
  });

  it('renders the value when it is negative', () => {
    const value = '-10';
    render(<NumberText title="Overall Balance" value={-10} className="mb-6 m:mb-7" />);
    expect(screen.getByText(value)).toHaveTextContent('-10');
  });

  it('should render the number with semiBold', () => {
    const value = '100,000';
    renderComponent({ numberPosition: 'top', semiBold: true });
    expect(screen.getByText(value)).toHaveStyleRule('font-weight', '600');
  });

  it('renders without a11y violations', async () => {
    const { container } = renderComponent();
    const results = await axe(container.innerHTML);

    expect(results).toHaveNoViolations();
  });
});
