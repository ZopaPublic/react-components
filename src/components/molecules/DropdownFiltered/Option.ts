import { typography } from '../../../constants/typography';
import { colors } from '../../../constants/colors';
import styled, { css } from 'styled-components';

interface IOption extends React.HTMLAttributes<HTMLDivElement> {
  highLighted?: boolean;
  selected?: boolean;
}

const Option = styled.div<IOption>`
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
      background-color: ${colors.actionPlain};
    `};
`;

export default Option;
