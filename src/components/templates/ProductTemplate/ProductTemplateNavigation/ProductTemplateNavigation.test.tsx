import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateNavigation } from './ProductTemplateNavigation';

describe('<ProductTemplateNavigation />', () => {
  it('renders with all the props', () => {
    const { container } = render(<ProductTemplateNavigation prevStep="/prevStep" />);
    expect(container).toMatchSnapshot();
  });
});
