import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateProgress } from './ProductTemplateProgress';

describe('<ProductTemplateProgress />', () => {
  it('renders with all the props', () => {
    const { container } = render(
      <ProductTemplateProgress
        nextStepUrl="/nextStep"
        prevStepUrl="/prevStep"
        progress={{ currentStep: 1, totalSteps: 2 }}
      >
        All the children
      </ProductTemplateProgress>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with no prevStep', () => {
    const { container } = render(
      <ProductTemplateProgress nextStepUrl="/nextStep" progress={{ currentStep: 1, totalSteps: 2 }}>
        All the children
      </ProductTemplateProgress>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with no progress', () => {
    const { container } = render(
      <ProductTemplateProgress nextStepUrl="/nextStep">All the children</ProductTemplateProgress>,
    );
    expect(container).toMatchSnapshot();
  });
});
