import { renderHook, act } from '@testing-library/react-hooks';

import { useCopyToClipboard } from './useCopyToClipboard';

jest.useFakeTimers();
jest.mock('copy-to-clipboard');

describe('useAccordion', () => {
  it('should set isCopied to false by default', () => {
    const { result } = renderHook(useCopyToClipboard);
    expect(result.current.isCopied).toEqual(false);
  });

  it('should update isCopied when handleCopy is called', () => {
    const { result } = renderHook(useCopyToClipboard);
    act(() => {
      result.current.handleCopy('test');
    });
    expect(result.current.isCopied).toEqual(true);
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.isCopied).toEqual(false);
  });
});
