import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateHeader } from './ProductTemplateHeader';

describe('<ProductTemplateHeader />', () => {
  it('renders with all the props', () => {
    const { container } = render(
      <ProductTemplateHeader
        prevStep="/prevStep"
        onBackPressed={jest.fn}
        progress={{ currentStep: 1, totalSteps: 2 }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with progress only', () => {
    const { container } = render(<ProductTemplateHeader progress={{ currentStep: 1, totalSteps: 2 }} />);
    expect(container).toMatchSnapshot();
  });

  it('renders with prevStep only', () => {
    const { container } = render(<ProductTemplateHeader prevStep="/prevStep" />);
    expect(container).toMatchSnapshot();
  });

  it('renders with onBackPressed only', () => {
    const { container } = render(<ProductTemplateHeader onBackPressed={jest.fn} />);
    expect(container).toMatchSnapshot();
  });
});
