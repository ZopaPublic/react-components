import axe from '../../../../axe-helper';
import React from 'react';
import { render } from '@testing-library/react';
import { getGlobalStyleTags } from '../../../helpers/test/styles';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  it('renders the component with no a11y violations', async () => {
    const { container } = render(
      <Tooltip content="I prefer 🍕 over 🍰 ...">
        <span>💁🏻‍♂️</span>
      </Tooltip>,
    );

    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('allows to set global styles', () => {
    render(<Tooltip.Styles />);

    const [globalModalStyles] = getGlobalStyleTags();
    expect(globalModalStyles).toMatchSnapshot();
  });
});
