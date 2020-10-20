import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateNavigation } from './ProductTemplateNavigation';

describe('<ProductTemplateNavigation />', () => {
  it('renders with a string prevStep', () => {
    const { container } = render(<ProductTemplateNavigation prevStep="/prevStep" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with a component prevStep', () => {
    const { container } = render(<ProductTemplateNavigation prevStep={<>A custom component</>} />);
    expect(container).toMatchSnapshot();
  });
});
