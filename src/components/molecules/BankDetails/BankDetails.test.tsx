import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import 'jest-styled-components';

import BankDetails from './BankDetails';
import axe from '../../../../axe-helper';

const mockFn = jest.fn();
let mockIsCopied = false;

jest.mock('react-use-clipboard', () => {
  return () => [mockIsCopied, mockFn];
});

describe('<BankDetails />', () => {
  it('renders the fallback option', () => {
    render(<BankDetails copyText={'123456789'}>Test</BankDetails>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('renders the fallback option', () => {
    render(<BankDetails>Test</BankDetails>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.queryByText('Copy')).not.toBeInTheDocument();
  });

  it('should call setCopied when copy button is clicked', () => {
    render(<BankDetails copyText={'123456789'}>Test</BankDetails>);
    act(() => {
      fireEvent.click(screen.getByText('Copy'));
    });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should disable the button when isCopied is true', () => {
    mockIsCopied = true;
    render(<BankDetails copyText={'123456789'}>Test</BankDetails>);
    expect(screen.getByText('Copied')).toBeInTheDocument();
  });

  it('renders the component with no props and no a11y violations', async () => {
    jest.useRealTimers();
    const { container } = render(
      <BankDetails copyText="1234" className="mb-4">
        12-34
      </BankDetails>,
    );
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
