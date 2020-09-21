import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateCard } from './ProductTemplateCard';

describe('<ProductTemplateCard />', () => {
  it('renders with all the props', () => {
    const { container } = render(
      <ProductTemplateCard
        title="ProductTemplateCard title"
        notification={<>Notification</>}
        subtitle="ProductTemplateCard subtitle"
      >
        All the children
      </ProductTemplateCard>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with no props', () => {
    const { container } = render(<ProductTemplateCard>All the children</ProductTemplateCard>);
    expect(container).toMatchSnapshot();
  });

  it('renders correct sized header on desktop', () => {
    const { container } = render(
      <ProductTemplateCard title="ProductTemplateCard title">All the children</ProductTemplateCard>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correct sized header on small screens', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 320 });
    const { container } = render(
      <ProductTemplateCard title="ProductTemplateCard title">All the children</ProductTemplateCard>,
    );
    expect(container).toMatchSnapshot();
  });
});
