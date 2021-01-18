import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import { Accordion } from '..';

describe('<AccordionHeader />', () => {
  it('fires onClick handler', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Accordion aria-label="test-accordion">
        <Accordion.Header onClick={onClick} data-automation="header" id="one" index={0} textSize="body">
          Header
        </Accordion.Header>
      </Accordion>,
    );
    fireEvent.click(getByTestId('header'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the component with no a11y violations', async () => {
    const { container, getByTestId } = render(
      <Accordion aria-label="test-accordion">
        <Accordion.Header data-automation="header" id="one" index={0} textSize="body">
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
