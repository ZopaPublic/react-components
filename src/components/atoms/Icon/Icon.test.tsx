import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

describe('<Icon />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(<Icon variant={faCoffee} />);
    const results = await axe(container.innerHTML);

    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
