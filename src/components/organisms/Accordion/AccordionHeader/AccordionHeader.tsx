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
`;

export interface IAccordionHeader {
  /** determines the position of the chevron icon */
  isOpen: boolean;
  textSize: ITextProps['size'];
}

const AccordionHeader: FunctionComponent<IAccordionHeader> = React.forwardRef<HTMLButtonElement, IAccordionHeader>(
  ({ children, isOpen, textSize = 'medium', ...rest }, ref) => {
    const mapTextToArrowSize = {
      large: '14px',
      medium: '10px',
      small: '8px',
    };

    return (
      <StyledButton ref={ref} {...rest}>
        <TitleContainer>
          <Arrow
            direction={isOpen ? 'down' : 'right'}
            width={mapTextToArrowSize[textSize]}
            height={mapTextToArrowSize[textSize]}
          />
          <Title weight="bold" size={textSize}>
            {children}
          </Title>
        </TitleContainer>
      </StyledButton>
    );
  },
);

export default AccordionHeader;
