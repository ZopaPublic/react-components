import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('<Spinner />', () => {
  it('renders the component', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with props', () => {
    const { container } = render(<Spinner size="38px" borderWidth="4px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
