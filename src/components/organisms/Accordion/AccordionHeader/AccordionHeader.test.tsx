import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Accordion from '..';

describe('<AccordionHeader />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container, getByTestId } = render(
      <Accordion>
        <Accordion.Header data-testid="header" id="one" index={0} textSize="medium">
          Header
        </Accordion.Header>
        <Accordion.Section id="one" index={0}>
          Content
        </Accordion.Section>
      </Accordion>,
    );
    const results = await axe(container.innerHTML);

    expect(getByTestId('header')).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
