import React from 'react';
import { render } from '@testing-library/react';
import Legal from './Legal';
import { mockDate, IMockDate } from '../../../../helpers/test/date';

const fixedDate = new Date('2016-02-28T09:39:59');

describe('<Legal />', () => {
  let date: IMockDate;

  beforeEach(() => {
    date = mockDate(new Date(fixedDate));
    date.startMocking();
  });
  afterEach(() => {
    date.finishMocking();
  });

  it('renders the component', async () => {
    const { container } = render(<Legal />);
    expect(container).toMatchSnapshot();
  });
});
