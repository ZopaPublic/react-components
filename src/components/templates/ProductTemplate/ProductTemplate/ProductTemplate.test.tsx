import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import ProductTemplate from '..';
import axe from '../../../../../axe-helper';

describe('<ProductTemplate />', () => {
  it('renders with all props and content', () => {
    const mockOnBackPressed = jest.fn();
    const { container } = render(
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
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getByLabelText('Back'));
    expect(mockOnBackPressed).toHaveBeenCalled();
  });

  it.only('renders with no a11y violations', async () => {
    const mockOnBackPressed = jest.fn();
    const { container } = render(
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
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders without ProductTemplateHeader if no prevStep, onBackPressed or progress props supplied', () => {
    render(
      <ProductTemplate title="Product title" subtitle="Product subtitle">
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    expect(screen.queryByTestId('ZA.ProductTemplateHeader')).toBeNull();
  });

  it('renders without title', () => {
    render(
      <ProductTemplate prevStep="prevStep" progress={{ currentStep: 2, totalSteps: 4 }} contentWidth={10}>
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    expect(screen.queryByRole('h1')).toBeNull();
  });

  it('renders without prevstep', () => {
    render(
      <ProductTemplate
        title="Product title"
        subtitle="Product subtitle"
        progress={{ currentStep: 2, totalSteps: 4 }}
        contentWidth={10}
      >
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    expect(screen.queryByLabelText('Back')).toBeNull();
  });

  it('renders without progress', () => {
    render(
      <ProductTemplate title="Product title" subtitle="Product subtitle" prevStep="prevStep" contentWidth={10}>
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    const navigationElement = screen.getByTestId('ZA.ProductTemplateNavigation');
    expect(navigationElement).toBeInTheDocument();
  });

  it('renders with neither prevstep nor progress', () => {
    render(
      <ProductTemplate title="Product title" subtitle="Product subtitle" contentWidth={10}>
        <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
      </ProductTemplate>,
    );
    const navigationElement = screen.queryByTestId('ZA.ProductTemplateNavigation');
    expect(navigationElement).toBeNull();
  });
});
