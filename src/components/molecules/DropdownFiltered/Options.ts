import styled from 'styled-components';
import { colors } from '../../../constants';
import { AppTheme } from '../../styles/Theme';

export interface OptionsListProps {
  optionsListMaxHeight?: string;
}

const Options = styled.div<OptionsListProps & { theme: AppTheme }>`
  z-index: 1;
  width: 100%;
  background: ${colors.white};
  border: ${({ theme }) => theme.input.searchInput.border};
  border-top: 0;
  position: absolute;
  overflow: auto;
  border-radius: ${({ theme }) => theme.input.searchInput.options.borderRadius};
  max-height: ${({ optionsListMaxHeight = 'initial' }) => optionsListMaxHeight};
  box-shadow: ${({ theme }) => theme.input.searchInput.boxShadow};
`;

export default Options;
