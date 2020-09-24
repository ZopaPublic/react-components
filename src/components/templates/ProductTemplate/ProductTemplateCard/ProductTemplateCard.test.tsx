import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateCard } from './ProductTemplateCard';

describe('<ProductTemplateCard />', () => {
  it('renders with all the props', () => {
    const { container } = render(<ProductTemplateCard>All the children</ProductTemplateCard>);
    expect(container).toMatchSnapshot();
  });
});
