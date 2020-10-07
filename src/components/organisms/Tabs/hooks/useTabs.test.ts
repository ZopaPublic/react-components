import { renderHook } from '@testing-library/react-hooks';

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
});
