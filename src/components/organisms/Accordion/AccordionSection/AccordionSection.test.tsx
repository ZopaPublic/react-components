import axe from '../../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import { Accordion } from '..';

describe('<AccordionSection />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container, getByTestId } = render(
      <Accordion aria-label="test-accordion">
        <Accordion.Header id="one" index={0} textSize="small">
          Header
        </Accordion.Header>
        <Accordion.Section data-automation="section" id="one" index={0}>
          Content
        </Accordion.Section>
      </Accordion>,
    );
    expect(getByTestId('section')).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
