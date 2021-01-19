import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import InputText from './InputText';

describe('<InputText />', () => {
  it('renders the component with the required props', () => {
    const { container } = render(<InputText name="name" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with focus', () => {
    const { container } = render(<InputText name="name" />);
    fireEvent.focus(container);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with isValid set as true', () => {
    const { container } = render(<InputText name="name" isValid={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with error', () => {
    const { container } = render(<InputText name="name" hasError={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component disabled', () => {
    const { container } = render(<InputText name="name" disabled={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with an icon on the left', () => {
    const { container, queryByTestId } = render(
      <InputText name="name" startIcon={<span data-automation="start-icon" />} />,
    );
    expect(queryByTestId('start-icon')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with an icon on the right', () => {
    const { container, queryByTestId } = render(
      <InputText name="name" endIcon={<span data-automation="end-icon" />} />,
    );
    expect(queryByTestId('end-icon')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
