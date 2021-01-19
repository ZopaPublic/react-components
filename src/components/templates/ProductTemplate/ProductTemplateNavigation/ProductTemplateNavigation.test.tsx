import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
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

  it('invokes onBackPressed callback', () => {
    const mockOnBackPressed = jest.fn();
    render(<ProductTemplateNavigation onBackPressed={mockOnBackPressed} />);
    fireEvent.click(screen.getByLabelText('Back'));
    expect(mockOnBackPressed).toHaveBeenCalled();
  });
});
