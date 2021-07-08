import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react';
import { useViewport } from './useViewport';
import { ViewportProvider } from './ViewportProvider';
import Text from '../../components/atoms/Text/Text';

describe('useViewport', () => {
  const origWidth = global.innerWidth;
  const origHeight = global.innerHeight;

  beforeEach(() => {
    global.innerWidth! = origWidth;
    global.innerHeight! = origHeight;
  });

  it('returns the viewport size when called', () => {
    const { result } = renderHook(useViewport);

    expect(result.current.width).toEqual(global.innerWidth);
    expect(result.current.height).toEqual(global.innerHeight);
  });

  it('returns the new viewport size on resizing', async () => {
    jest.useFakeTimers();

    const expected = {
      width: 1200,
      height: 1000,
    };

    const { result } = renderHook(useViewport);

    expect(result.current.width).toEqual(origWidth);
    expect(result.current.height).toEqual(origHeight);

    act(() => {
      global.innerWidth! = expected.width;
      global.innerHeight! = expected.height;

      fireEvent(window, new Event('resize'));
    });

    jest.advanceTimersByTime(300);

    expect(result.current.width).toEqual(expected.width);
    expect(result.current.height).toEqual(expected.height);
  });

  describe('Event listeners...', () => {
    const origAddEventListener = window.addEventListener;

    beforeEach(() => {
      window.addEventListener = jest.fn();
    });

    afterEach(() => {
      window.addEventListener = origAddEventListener;
    });

    it('registers listeners for each instance (default)', () => {
      render(
        <>
          <Component />
          <Component />
        </>,
      );

      const resizeListeners = filterListeners((window.addEventListener as jest.Mock).mock.calls);

      expect(resizeListeners.length).toEqual(2);
    });

    it('registers 1 listener for multiple instances with context', () => {
      render(
        <ViewportProvider>
          <Component />
          <Component />
        </ViewportProvider>,
      );

      const resizeListeners = filterListeners((window.addEventListener as jest.Mock).mock.calls);

      expect(resizeListeners.length).toEqual(1);
    });

    function filterListeners(calls: any[]) {
      return calls.filter(([eventType]) => eventType === 'resize');
    }

    function Component() {
      const { width = 0 } = useViewport();
      return <Text size="lead">{width > 500 ? '🍅 Tomato' : '🥔 Potato'}</Text>;
    }
  });
});
