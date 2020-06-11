import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

import Progress from './Progress';

describe('<Progress /> Props', () => {
  it('renders the component with the step text', () => {
    const { getByText } = render(<Progress totalSteps={5} currentStep={2} withStep={true} />);
    expect(getByText('Step 2 of 5')).toBeTruthy();
  });
  it('renders the component without the step text', () => {
    const { queryByText } = render(<Progress totalSteps={5} currentStep={2} />);
    expect(queryByText('Step 2 of 5')).toBeFalsy();
  });
});

describe('<Progress /> Accessibility', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Progress totalSteps={5} currentStep={2} />);
    expect(container).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
