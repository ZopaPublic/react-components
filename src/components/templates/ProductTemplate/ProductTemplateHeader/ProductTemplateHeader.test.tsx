import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateHeader } from './ProductTemplateHeader';

describe('<ProductTemplateHeader />', () => {
  it('renders with all the props', () => {
    const { container } = render(
      <ProductTemplateHeader
        title="ProductTemplateHeader title"
        subtitle="ProductTemplateHeader subtitle"
        dataAutomation="automation"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with no subtitle and data-automation', () => {
    const { container } = render(<ProductTemplateHeader title="ProductTemplateHeader title" />);
    expect(container).toMatchSnapshot();
  });

  it('renders correct sized header on desktop', () => {
    const { container } = render(<ProductTemplateHeader title="ProductTemplateHeader title" />);
    expect(container).toMatchSnapshot();
  });

  it('renders correct sized header on small screens', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 320 });
    const { container } = render(<ProductTemplateHeader title="ProductTemplateHeader title" />);
    expect(container).toMatchSnapshot();
  });
});
