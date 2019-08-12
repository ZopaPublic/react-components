import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import * as colors from '../../../../constants/colors';
import Arrow from '../../../icons/Arrow/Arrow';
import Text, { ITextProps } from '../../../atoms/Text/Text';

const StyledButton = styled.button`
  appearance: none;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  padding: 0 4px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    flex-shrink: 0;
  }
`;

const Title = styled(Text)`
  color: ${colors.primary.blue500};
  padding-left: 8px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;

export interface IAccordionHeader {
  /** determines the position of the chevron icon */
  isOpen: boolean;
  textSize: ITextProps['size'];
}

const AccordionHeader: FunctionComponent<IAccordionHeader> = React.forwardRef<HTMLButtonElement, IAccordionHeader>(
  ({ children, isOpen, textSize = 2, ...rest }, ref) => {
    const mapTextToArrowSize = {
      1: '14px',
      2: '10px',
      3: '8px',
    };

    return (
      <StyledButton ref={ref} {...rest}>
        <TitleContainer>
          <Arrow
            direction={isOpen ? 'down' : 'right'}
            width={mapTextToArrowSize[textSize]}
            height={mapTextToArrowSize[textSize]}
          />
          <Title size={textSize}>{children}</Title>
        </TitleContainer>
      </StyledButton>
    );
  },
);

export default AccordionHeader;
