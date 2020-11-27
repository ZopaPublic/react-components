import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ProductTemplate from '..';

describe('<ProductTemplate />', () => {
  it('renders with all props and content', () => {
    const mockOnBackPressed = jest.fn();
    const { container, getByLabelText } = render(
      <ProductTemplate
        title="Product title"
        subtitle="Product subtitle"
        prevStep="prevStep"
        onBackPressed={mockOnBackPressed}
        progress={{ currentStep: 2, totalSteps: 4 }}
        contentWidth={10}
      >
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    fireEvent.click(getByLabelText('Back'));
    expect(mockOnBackPressed).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  it('renders without ProductTemplateHeader if no prevStep, onBackPressed or progress props supplied', () => {
    const { queryByTestId } = render(
      <ProductTemplate title="Product title" subtitle="Product subtitle">
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    expect(queryByTestId('ZA.ProductTemplateHeader')).toBeNull();
  });
});
