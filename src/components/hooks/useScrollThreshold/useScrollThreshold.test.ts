import { renderHook } from '@testing-library/react-hooks';
import useScrollTeshhold from './useScrollThreshold';

describe('HOOK: useScrollTeshhold', () => {
  let origAddEventListener: () => void, origScrollY: number, origRAF: () => void;

  beforeEach(() => {
    origAddEventListener = global.document.addEventListener;
    origRAF = global.requestAnimationFrame;
    origScrollY = global.scrollY;

    global.document.addEventListener = jest.fn();
    global.requestAnimationFrame = (cb: () => void) => cb();
  });

  afterEach(() => {
    global.document.addEventListener = origAddEventListener;
    global.requestAnimationFrame = origRAF;
    global.scrollY = origScrollY;
  });

  it('registers a scroll listener when called', () => {
    renderHook(useScrollTeshhold);
    expect(global.document.addEventListener).toHaveBeenCalledTimes(1);
    expect(global.document.addEventListener.mock.calls[0]).toMatchSnapshot();
  });

  it.each`
    scrollY | treshold | isAbove
    ${0}    | ${10}    | ${false}
    ${20}   | ${10}    | ${true}
    ${10}   | ${10}    | ${false}
  `('user scrolled:  $scrollY, treshold was: $treshold, notifies above: $isAbove', ({ scrollY, treshold, isAbove }) => {
    global.scrollY = scrollY;

    const {
      result: { current: isOverTheTreshold },
    } = renderHook(() => useScrollTeshhold(treshold));

    expect(isOverTheTreshold).toBe(isAbove);
  });
});
