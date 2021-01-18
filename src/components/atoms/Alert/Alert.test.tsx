import axe from '../../../../axe-helper';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from './Alert';

describe('Alert', () => {
  it('renders the component with no props and no a11y violations', async () => {
    const { container } = render(<Alert>Alert Content</Alert>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it.each`
    severity
    ${'info'}
    ${'alert'}
    ${'warning'}
    ${'success'}
  `('renders with specific severity: $severity', ({ severity }) => {
    const { container } = render(<Alert severity={severity}>Alert Content</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render the component with a cross icon and it is clickable', () => {
    const onRequestClose = jest.fn();
    const { getByTestId } = render(<Alert onRequestClose={onRequestClose}>Alert Content</Alert>);
    const crossIcon = getByTestId('ZA.alert-cross-icon');
    fireEvent.click(crossIcon);
    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  it('should not render the cross icon if onRequestClose is not provided', () => {
    const { queryByTestId } = render(<Alert>Alert Content</Alert>);
    expect(queryByTestId('ZA.alert-cross-icon')).toBeNull();
  });
});
