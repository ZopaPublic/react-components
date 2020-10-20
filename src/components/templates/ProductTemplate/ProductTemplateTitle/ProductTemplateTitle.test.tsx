import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateTitle } from './ProductTemplateTitle';

describe('<ProductTemplateTitle />', () => {
  it('renders with all the props', () => {
    const { container } = render(
      <ProductTemplateTitle
        title="ProductTemplateTitle title"
        subtitle="ProductTemplateTitle subtitle"
        dataAutomation="automation"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correct sized title on desktop', () => {
    const { container } = render(<ProductTemplateTitle title="ProductTemplateTitle title" />);
    expect(container).toMatchSnapshot();
  });

  it('renders correct sized title on small screens', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 320 });
    const { container } = render(<ProductTemplateTitle title="ProductTemplateTitle title" />);
    expect(container).toMatchSnapshot();
  });
});
