import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateHeader } from './ProductTemplateHeader';

describe('<ProductTemplateHeader />', () => {
  it('renders with all the props', () => {
    const { container } = render(
      <ProductTemplateHeader prevStep="/prevStep" progress={{ currentStep: 1, totalSteps: 2 }} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with some props', () => {
    const { container } = render(<ProductTemplateHeader progress={{ currentStep: 1, totalSteps: 2 }} />);
    expect(container).toMatchSnapshot();
  });
});
