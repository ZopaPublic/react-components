import React from 'react';
import { render } from 'react-testing-library';
import { axe } from 'jest-axe';
import AccordionHeader from './AccordionHeader';

describe('<AccordionHeader />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<AccordionHeader isOpen={true}>Content</AccordionHeader>);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
