import React from 'react';
import { render } from '@testing-library/react';
import Facebook from './Facebook';

describe('<Facebook />', () => {
  it('renders the component with props', () => {
    const { container } = render(<Facebook size="40px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
