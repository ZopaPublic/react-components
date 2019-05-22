import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import AccordionSection from './AccordionSection';

describe('<AccordionSection />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<AccordionSection>Content</AccordionSection>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
