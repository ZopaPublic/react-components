import { colors, typography } from '../../../constants';
import styled, { css } from 'styled-components';

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  highLighted?: boolean;
  selected?: boolean;
}

const Option = styled.div<OptionProps>`
  cursor: pointer;
  padding: 8px;
  line-height: 32px;
  font-size: ${typography.sizes.text.body};
  font-weight: 600;
  color: ${colors.greyDarkest};
  ${({ selected, highLighted }) =>
    (selected || highLighted) &&
    css`
      color: ${colors.white};
      background-color: ${colors.brand};
    `};
`;

export default Option;
