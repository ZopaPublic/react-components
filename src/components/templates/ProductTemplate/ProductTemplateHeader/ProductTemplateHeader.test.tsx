import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { ProductTemplateHeader } from './ProductTemplateHeader';

describe('<ProductTemplateHeader />', () => {
  it('renders with all the props', () => {
    const mockOnBackPressed = jest.fn();
    const { container } = render(
      <ProductTemplateHeader
        prevStep="/"
        onBackPressed={mockOnBackPressed}
        progress={{ currentStep: 1, totalSteps: 2 }}
      />,
    );
    expect(screen.getByText('Back').closest('a')).toHaveAttribute('href', '/');
    fireEvent.click(screen.getByLabelText('Back'));
    expect(mockOnBackPressed).toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });

  it('renders with progress only', () => {
    render(<ProductTemplateHeader progress={{ currentStep: 1, totalSteps: 2 }} />);
    const header = screen.getByTestId('ZA.ProductTemplateHeader');
    expect(header).toBeInTheDocument();
  });

  it('renders with prevStep only', () => {
    render(<ProductTemplateHeader prevStep="/prevStep" />);
    expect(screen.getByLabelText('Back')).toHaveAttribute('href', '/prevStep');
  });

  it('renders with onBackPressed only and fires callback onclick', () => {
    const mockOnBackPressed = jest.fn();
    render(<ProductTemplateHeader onBackPressed={mockOnBackPressed} />);
    const backButton = screen.getByLabelText('Back');
    expect(backButton).not.toHaveAttribute('href');
    fireEvent.click(backButton);
    expect(mockOnBackPressed).toHaveBeenCalled();
  });
});
