import React from 'react';
import { render } from '@testing-library/react';
import ProductTemplate from '..';

describe('<ProductTemplate />', () => {
  it('renders with title and children but without subtitle', () => {
    const { container } = render(<ProductTemplate title="ProductTemplate title">All the children</ProductTemplate>);
    expect(container).toMatchSnapshot();
  });
});
