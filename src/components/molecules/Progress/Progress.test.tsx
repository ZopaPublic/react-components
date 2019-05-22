import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Progress from './Progress';

describe('<Progress />', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Progress totalSteps={5} currentStep={2} />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
