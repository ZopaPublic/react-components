import React, { FC, HTMLAttributes, MouseEvent } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import Arrow from '../../../icons/Arrow/Arrow';
import Text from '../../../atoms/Text/Text';
import { useAccordionContext } from '../hooks';

export interface IAccordionHeader extends HTMLAttributes<HTMLButtonElement> {
  id: string;
  index: number;
  textSize?: 'base' | 'small';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => ((willBecomeActive: boolean) => void) | void;
}

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
  align-items: baseline;
  text-align: left;

  svg {
    flex-shrink: 0;
  }
`;

const Title = styled(Text)`
  color: ${colors.base.secondary};
  padding-left: 8px;
`;

const mapTextToArrowSize = {
  base: '10px',
  small: '8px',
};

const AccordionHeader: FC<IAccordionHeader> = ({ children, id, index, textSize = 'base', onClick, ...rest }) => {
  const { getHeaderProps, isActiveSection } = useAccordionContext();
  const { ref, onClick: contextOnClick, ...headerPropsRest } = getHeaderProps(id, index);

  const willBecomeActive = !isActiveSection(index);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const curried = onClick && onClick(e);

    if (curried) {
      curried(willBecomeActive);
    }

    contextOnClick();
  };

  return (
    <StyledButton ref={ref} onClick={handleClick} {...headerPropsRest} {...rest}>
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
