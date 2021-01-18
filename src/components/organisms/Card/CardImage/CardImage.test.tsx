import React from 'react';
import { render } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import Card from '..';

describe('<Card.Image />', () => {
  it('renders with a link', () => {
    const testId = 'card-image-link';
    const { queryByTestId } = render(
      <Card>
        <Card.Image overlayWith={<a href="http://www.zopa.com" data-automation={testId} />} url="" />
      </Card>,
    );
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(
      <Card>
        <Card.Image url="" />
      </Card>,
    );
    const results = await axe(container.innerHTML);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
