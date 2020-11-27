import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ProductTemplateHeader } from './ProductTemplateHeader';

describe('<ProductTemplateHeader />', () => {
  it('renders with all the props', () => {
    const mockOnBackPressed = jest.fn();
    const { container, getByLabelText } = render(
      <ProductTemplateHeader
        prevStep="/prevStep"
        onBackPressed={mockOnBackPressed}
        progress={{ currentStep: 1, totalSteps: 2 }}
      />,
    );
    fireEvent.click(getByLabelText('Back'));
    expect(mockOnBackPressed).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  it('renders with progress only', () => {
    const { getByTestId } = render(<ProductTemplateHeader progress={{ currentStep: 1, totalSteps: 2 }} />);
    const header = getByTestId('ZA.ProductTemplateHeader');
    expect(header?.children).toHaveLength(1);
  });

  it('renders with prevStep only', () => {
    const { getByLabelText } = render(<ProductTemplateHeader prevStep="/prevStep" />);
    expect(getByLabelText('Back')).toHaveAttribute('href', '/prevStep');
  });

  it('renders with onBackPressed only and fires callback onclick', () => {
    const mockOnBackPressed = jest.fn();
    const { getByLabelText } = render(<ProductTemplateHeader onBackPressed={mockOnBackPressed} />);
    const backButton = getByLabelText('Back');
    expect(backButton).not.toHaveAttribute('href');
    fireEvent.click(backButton);
    expect(mockOnBackPressed).toHaveBeenCalled();
  });
});
