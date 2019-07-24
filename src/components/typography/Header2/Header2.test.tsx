import React from 'react';
import { render } from '@testing-library/react';
import Header2 from './Header2';

describe('<Header2 />', () => {
  it('renders the component without props', () => {
    const { container } = render(<Header2>I'm an h2 header</Header2>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the component with props', () => {
    const { container } = render(<Header2 style={{ textAlign: 'center' }}>I'm an h2 header</Header2>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
