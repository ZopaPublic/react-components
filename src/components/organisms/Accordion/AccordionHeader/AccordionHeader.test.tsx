import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Accordion } from '..';

describe('<AccordionHeader />', () => {
  it('fires onClick handler', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Accordion aria-label="test-accordion">
        <Accordion.Header onClick={onClick} data-testid="header" id="one" index={0} textSize="base">
          Header
        </Accordion.Header>
      </Accordion>,
    );
    fireEvent.click(getByTestId('header'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls the curried click handler and the function it returns', () => {
    const returnFunc = jest.fn();
    const curriedOnClick = jest.fn().mockReturnValue(returnFunc);
    const { getByTestId } = render(
      <Accordion aria-label="test-accordion">
        <Accordion.Header onClick={curriedOnClick} data-testid="header" id="one" index={0} textSize="base">
          Header
        </Accordion.Header>
      </Accordion>,
    );
    fireEvent.click(getByTestId('header'));
    expect(curriedOnClick).toHaveBeenCalledTimes(1);
    expect(returnFunc).toHaveBeenCalledTimes(1);
  });

  it('renders the component with no a11y violations', async () => {
    const { container, getByTestId } = render(
      <Accordion aria-label="test-accordion">
        <Accordion.Header data-testid="header" id="one" index={0} textSize="base">
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
