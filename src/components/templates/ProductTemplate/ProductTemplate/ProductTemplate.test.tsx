import React from 'react';
import { render } from '@testing-library/react';
import ProductTemplate from '..';

describe('<ProductTemplate />', () => {
  it('renders with all props and', () => {
    const { container } = render(
      <ProductTemplate
        title="Product title"
        subtitle="Product subtitle"
        nextStep="nextStep"
        prevStep="prevStep"
        progress={{ currentStep: 2, totalSteps: 4 }}
      >
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    expect(container).toMatchSnapshot();
  });
});
