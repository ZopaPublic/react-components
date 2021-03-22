import styled from 'styled-components';

import { colors } from '../../../constants/colors';
import { spacing } from '../../../constants/spacing';

interface ScrollableAreaProps {
  maxHeight?: string;
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
}

const ScrollableArea = styled.div<ScrollableAreaProps>`
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
    background: ${colors.greyLighter};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-bottom: ${spacing[6]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    border: 2px solid ${colors.brand};
    background-color: ${colors.brand};
  }
`;

export default ScrollableArea;
