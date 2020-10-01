import React from 'react';
import { render } from '@testing-library/react';
import { ProductTemplateProgress } from './ProductTemplateProgress';

describe('<ProductTemplateProgress />', () => {
  it('renders with all the props', () => {
    const { container } = render(<ProductTemplateProgress progress={{ currentStep: 1, totalSteps: 2 }} />);
    expect(container).toMatchSnapshot();
  });
});
