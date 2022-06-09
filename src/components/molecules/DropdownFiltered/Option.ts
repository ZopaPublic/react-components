import { colors, typography } from '../../../constants';
import styled, { css } from 'styled-components';
import { AppTheme } from '../../styles/Theme';

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  highLighted?: boolean;
  selected?: boolean;
}

const Option = styled.div<OptionProps & { theme: AppTheme }>`
  cursor: pointer;
  padding: 8px;
  line-height: 32px;
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: ${typography.sizes.text.body};
  font-weight: 600;
  color: ${colors.greyDarkest};
  ${({ selected, highLighted }) =>
    (selected || highLighted) &&
    css`
      color: ${({ theme }) => theme.input.searchInput.options.hover.color};
      background-color: ${({ theme }) => theme.input.searchInput.options.hover.backgroundColor};
    `};
`;

export default Option;
