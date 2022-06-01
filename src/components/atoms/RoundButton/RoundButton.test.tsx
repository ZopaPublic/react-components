import React from 'react';
import RoundButton from './RoundButton';
import axe from '../../../../axe-helper';
import { render } from '@testing-library/react';
import { faCog } from '@fortawesome/free-solid-svg-icons';

describe('<RoundButton />', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<RoundButton label="Primary" icon={faCog} />);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });

  it('renders as "primary"', () => {
    const { container } = render(<RoundButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as "secondary"', () => {
    const { container } = render(<RoundButton styling="secondary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders disabled', () => {
    const { container } = render(<RoundButton disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading as "primary"', () => {
    const { container } = render(<RoundButton $loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading as "secondary"', () => {
    const { container } = render(<RoundButton styling="secondary" $loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders loading with disabled attribute', () => {
    const { container } = render(<RoundButton $loading />);
    expect(container.firstChild).toHaveAttribute('disabled');
  });
});
