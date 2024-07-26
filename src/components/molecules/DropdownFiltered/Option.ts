import { colors, typography } from '../../../constants';
import styled, { css } from 'styled-components';
import { AppThemeProps } from '../../styles/Theme';

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  highLighted?: boolean;
  selected?: boolean;
}
interface OptionThemeProps extends AppThemeProps, OptionProps {}

const Option = styled.div<OptionThemeProps>`
  cursor: pointer;
  padding: 8px;
  line-height: ${({ theme }: OptionThemeProps) => theme.typography.lineHeight.body ?? '32px'};
  font-family: ${({ theme }: OptionThemeProps) => theme.typography.primary};
  font-size: ${typography.sizes.text.body};
  font-weight: ${({ theme }: OptionThemeProps) => theme.typography.weights.regular ?? '600'};
  color: ${colors.greyDarkest};
  ${({ selected, highLighted }) =>
    (selected || highLighted) &&
    css`
      color: ${({ theme }: OptionThemeProps) => theme.input.searchInput.options.hover.color};
      background-color: ${({ theme }) => theme.input.searchInput.options.hover.backgroundColor};
    `};
`;

export default Option;
