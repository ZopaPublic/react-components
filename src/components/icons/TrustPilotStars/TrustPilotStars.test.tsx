import React from 'react';
import { render } from '@testing-library/react';
import TrustPilotStars from './TrustPilotStars';

describe('<TrustPilotStars />', () => {
  it('renders the component with props', () => {
    const { container } = render(<TrustPilotStars width="70px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
