import { renderHook, act } from '@testing-library/react-hooks';

import { useTabs } from './useTabs';

describe('useTabs', () => {
  it('should render correct button and content props', () => {
    const { result } = renderHook(useTabs);

    const button = result.current.getTabButtonHTMLProps('id');
    const content = result.current.getTabContentProps('id');

    expect(button).toMatchSnapshot();
    expect(content).toMatchSnapshot();
  });

  it('should render matching button and content attributes', () => {
    const { result } = renderHook(useTabs);

    const content = result.current.getTabContentProps('another-id');
    const button = result.current.getTabButtonHTMLProps('another-id');

    expect(button.id).toEqual(content['aria-labelledby']);
    expect(button['aria-controls']).toEqual(content['id']);
  });

  it('should change the activeTab on click', () => {
    const { result } = renderHook(useTabs);

    const { onClick: firstTabButtonClick } = result.current.getTabButtonHTMLProps('one');

    expect(result.current.activeTab).toEqual('');

    act(() => {
      firstTabButtonClick();
    });

    expect(result.current.activeTab).toEqual('one');
    const { onClick: secondTabButtonClick } = result.current.getTabButtonHTMLProps('two');
    expect(result.current.activeTab).toEqual('one');

    act(() => {
      secondTabButtonClick();
    });

    expect(result.current.activeTab).toEqual('two');
  });

  it('should change the activeTab and call afterOnClick if present on click', () => {
    const { result } = renderHook(useTabs);
    const afterOnClick = jest.fn();

    const { onClick: firstTabButtonClick } = result.current.getTabButtonHTMLProps('one', afterOnClick);

    expect(result.current.activeTab).toEqual('');

    act(() => {
      firstTabButtonClick();
    });

    expect(result.current.activeTab).toEqual('one');

    const { onClick: secondTabButtonClick } = result.current.getTabButtonHTMLProps('two', afterOnClick);
    expect(result.current.activeTab).toEqual('one');
    expect(afterOnClick).toHaveBeenCalledTimes(1);

    act(() => {
      secondTabButtonClick();
    });

    expect(result.current.activeTab).toEqual('two');
    expect(afterOnClick).toHaveBeenCalledTimes(2);
  });
});
