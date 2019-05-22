import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import * as colors from '../../../../constants/colors';
import Arrow from '../../../icons/Arrow/Arrow';

const StyledButton = styled.button`
  appearance: none;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  padding: 0 4px;
`;

const TitleContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.primary.blue500};
  svg {
    flex-shrink: 0;
  }
`;

const Title = styled.span`
  color: ${colors.primary.blue500};
  padding-left: 12px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;

export interface IAccordionHeader {
  /** determines the position of the chevron icon */
  isOpen: boolean;
}

const AccordionHeader: FunctionComponent<IAccordionHeader> = React.forwardRef<HTMLButtonElement, IAccordionHeader>(
  ({ children, isOpen, ...rest }, ref) => (
    <StyledButton ref={ref} {...rest}>
      <TitleContainer>
        <Arrow direction={isOpen ? 'down' : 'right'} />
        <Title>{children}</Title>
      </TitleContainer>
    </StyledButton>
  ),
);

export default AccordionHeader;
