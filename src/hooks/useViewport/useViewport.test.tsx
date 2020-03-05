import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent, wait } from '@testing-library/react';
import { useViewport } from './useViewport';

describe('useViewport', () => {
  const origWidth = global.innerWidth;
  const origHeight = global.innerHeight;

  beforeEach(() => {
    global.innerWidth = origWidth;
    global.innerHeight = origHeight;
  });

  it('returns the viewport size when called', () => {
    const { result } = renderHook(useViewport);

    expect(result.current.width).toEqual(global.innerWidth);
    expect(result.current.height).toEqual(global.innerHeight);
  });

  it('returns the new viewport size on resizing', async () => {
    const expected = {
      width: 1200,
      height: 1000,
    };

    const { result } = renderHook(useViewport);

    expect(result.current.width).toEqual(origWidth);
    expect(result.current.height).toEqual(origHeight);

    act(() => {
      global.innerWidth = expected.width;
      global.innerHeight = expected.height;

      fireEvent(window, new Event('resize'));
    });

    await wait(
      () => {
        expect(result.current.width).toEqual(expected.width);
        expect(result.current.height).toEqual(expected.height);
      },
      { timeout: 300 },
    );
  });
});
