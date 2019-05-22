import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import AccordionHeader from './AccordionHeader';

describe('<AccordionHeader />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<AccordionHeader isOpen={true}>Content</AccordionHeader>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
