import styled from 'styled-components';
import React from 'react';
import { spacing } from '../../../constants/spacing';
import { useThemeContext } from '../../styles/Theme';

interface ScrollableAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
}

const ScrollableAreaStyles = styled.div<ScrollableAreaProps>`
  max-height: ${({ maxHeight = '400px' }) => maxHeight};
  overflow-y: ${({ overflowY = 'scroll' }) => overflowY};
  padding-right: ${spacing[4]};

  // custom styles for scrollbar, Firefox doesn't support it (styles will default)
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollableArea.scrollBarTrack.background};
    border-radius: ${({ theme }) => theme.scrollableArea.scrollBarTrack.borderRadius};
  }

  &::-webkit-scrollbar-track {
    margin-bottom: ${spacing[6]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.scrollableArea.scrollBarThumb.borderRadius};
    border: ${({ theme }) => theme.scrollableArea.scrollBarThumb.border};
    background-color: ${({ theme }) => theme.scrollableArea.scrollBarThumb.bgColor};
  }
`;

const ScrollableArea = React.forwardRef<HTMLDivElement, ScrollableAreaProps>(({ children, ...rest }, ref) => {
  const theme = useThemeContext();
  return (
    <ScrollableAreaStyles {...rest} theme={theme} ref={ref}>
      {children}
    </ScrollableAreaStyles>
  );
});

export default ScrollableArea;
