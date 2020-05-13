import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export interface IOptionsListProps {
  optionsListMaxHeight?: string;
}

const Options = styled.div<IOptionsListProps>`
  z-index: 1;
  width: 100%;
  background: ${colors.white};
  border: 2px solid ${colors.actionPlain};
  border-top: 0;
  position: absolute;
  overflow: auto;
  border-radius: 0 0 6px 6px;
  max-height: ${({ optionsListMaxHeight = 'auto' }) => optionsListMaxHeight};
  box-shadow: 0 2px 1px 2px rgba(28, 33, 57, 0.15);
`;

export default Options;
