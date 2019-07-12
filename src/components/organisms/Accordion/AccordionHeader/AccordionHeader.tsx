import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import * as colors from '../../../../constants/colors';
import Arrow from '../../../icons/Arrow/Arrow';

type TTextSize = 'lead' | 'regular';
interface ITitleStyleProps {
  textSize?: TTextSize;
}

const sizes = {
  regular: '16px',
  lead: '20px',
};

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

const Title = styled.span<ITitleStyleProps>`
  color: ${colors.primary.blue500};
  padding-left: 12px;
  font-size: ${({ textSize }) => sizes[textSize]};
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;

export interface IAccordionHeader {
  /** determines the position of the chevron icon */
  isOpen: boolean;
  textSize?: TTextSize;
}

const AccordionHeader: FunctionComponent<IAccordionHeader> = React.forwardRef<HTMLButtonElement, IAccordionHeader>(
  ({ children, isOpen, textSize = 'lead', ...rest }, ref) => (
    <StyledButton ref={ref} {...rest}>
      <TitleContainer>
        <Arrow direction={isOpen ? 'down' : 'right'} />
        <Title textSize={textSize}>{children}</Title>
      </TitleContainer>
    </StyledButton>
  ),
);

export default AccordionHeader;
