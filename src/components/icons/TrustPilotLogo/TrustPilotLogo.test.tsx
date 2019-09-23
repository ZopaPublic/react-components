import React from 'react';
import { render } from '@testing-library/react';
import TrustPilotLogo from './TrustPilotLogo';

describe('<TrustPilotLogo />', () => {
  it('renders the component with props', () => {
    const { container } = render(<TrustPilotLogo width="70px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
