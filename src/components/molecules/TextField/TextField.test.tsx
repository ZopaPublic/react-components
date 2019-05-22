import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import TextField from './TextField';

describe('<TextField />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<TextField inputProps={{ name: 'test1' }} />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders the component with label', () => {
    const { container } = render(<TextField inputProps={{ name: 'test1' }} label="Username" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component and isValid set to true', () => {
    const { container } = render(<TextField inputProps={{ name: 'test1' }} isValid={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with error', () => {
    const { container } = render(<TextField inputProps={{ name: 'test1' }} errorMessage="Ops !" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with size', () => {
    const { container } = render(<TextField inputProps={{ name: 'test1' }} size="short" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with error and label and size', () => {
    const { container } = render(
      <TextField
        inputProps={{ name: 'test1' }}
        helpText="Additional info"
        errorMessage="Ops !"
        label="yes!"
        size="long"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
