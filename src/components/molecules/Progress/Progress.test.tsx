import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

import Progress from './Progress';

describe('<Progress />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Progress totalSteps={5} currentStep={2} />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
  it('renders the component with the step text', () => {
    const { queryAllByText } = render(<Progress totalSteps={5} currentStep={2} />);
    expect(queryAllByText('Step 2 of 5')).toBeTruthy();
    expect(queryAllByText('Step 2 of 5')).toHaveLength(2);
  });
  it('renders the component without the step text', () => {
    const { queryAllByText } = render(<Progress totalSteps={5} currentStep={2} withStep={false} />);
    expect(queryAllByText('Step 2 of 5')).toHaveLength(1);
  });
});
