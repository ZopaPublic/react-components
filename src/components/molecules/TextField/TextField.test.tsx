import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../axe-helper';
import TextField from './TextField';

describe('<TextField />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<TextField name="test1" />);
    const { getComputedStyle } = window;
    // Fix warning in console
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  it('renders the component with label', () => {
    const { container } = render(<TextField name="test1" label="Username" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component and isValid set to true', () => {
    const { container } = render(<TextField name="test1" isValid={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with error', () => {
    const { container } = render(<TextField name="test1" errorMessage="Ops !" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with size', () => {
    const { container } = render(<TextField name="test1" inputSize="short" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with error and label and size', () => {
    const { container } = render(
      <TextField name="test1" helpText="Additional info" errorMessage="Ops !" label="yes!" inputSize="long" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with prefix', () => {
    const { container } = render(<TextField name="test1" inputSize="short" prefix="£" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('throws if no name provided', () => {
    console.error = jest.fn();
    expect(() => render(<TextField />)).toThrow('Name must be set in inputProps. Check the docs.');
  });

  it('throws if prefix is longer than one character', () => {
    console.error = jest.fn();
    expect(() => render(<TextField name="test1" prefix="$$" />)).toThrow('Prefixes can only have one character');
  });
});
