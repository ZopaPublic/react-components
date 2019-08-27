import React, { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../../constants/colors';
import Arrow from '../../../icons/Arrow/Arrow';
import Text, { ITextProps } from '../../../atoms/Text/Text';

import { useAccordionContext } from '../context';

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
  color: ${colors.base.secondary};
  padding-left: 8px;
`;

export interface IAccordionHeader {
  id: string;
  index: number;
  textSize: ITextProps['size'];
}

const mapTextToArrowSize = {
  large: '14px',
  medium: '10px',
  small: '8px',
};

const AccordionHeader: FC<IAccordionHeader> = ({ children, id, index, textSize = 'medium', ...rest }) => {
  const { getHeaderProps, isActiveSection } = useAccordionContext();
  const { ref, ...headerPropsRest } = getHeaderProps(id, index);
  return (
    <StyledButton ref={ref} {...headerPropsRest} {...rest}>
      <TitleContainer>
        <Arrow
          direction={isActiveSection(index) ? 'down' : 'right'}
          width={mapTextToArrowSize[textSize]}
          height={mapTextToArrowSize[textSize]}
        />
        <Title weight="bold" size={textSize}>
          {children}
        </Title>
      </TitleContainer>
    </StyledButton>
  );
};

export default AccordionHeader;
