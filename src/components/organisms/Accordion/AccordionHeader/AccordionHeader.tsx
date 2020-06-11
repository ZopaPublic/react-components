import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../constants';
import Text from '../../../atoms/Text/Text';
import { useAccordionContext } from '../hooks';

export interface AccordionHeader extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  id: string;
  index: number;
  textSize?: 'body' | 'small';
  onClick?: (isActive: boolean) => void;
}
const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  width: 100%;
  margin-bottom: ${spacing[1]};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  background-color: ${colors.greyLightest};
  width: 100%;
  justify-content: space-between;
  padding: ${spacing[4]};
`;

const Title = styled(Text)`
  color: ${colors.greyDarkest};
`;

const Cross = styled.span<{ active: boolean }>`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  // This background creates the ➖
  background: linear-gradient(to bottom, transparent 35%, ${colors.grey} 35%, ${colors.grey} 65%, transparent 65%)
    ${({ active }) =>
      !active &&
      // This adds the vertical stick to create ✚
      `, linear-gradient(to right, transparent 35%, ${colors.grey} 35%, ${colors.grey} 65%, transparent 65%)`};
`;

const AccordionHeader: FC<AccordionHeader> = ({ children, id, index, textSize = 'body', onClick, ...rest }) => {
  const { getHeaderProps, isActiveSection } = useAccordionContext();
  const { ref, onClick: contextOnClick, ...headerPropsRest } = getHeaderProps(id, index);

  const handleClick = () => {
    onClick && onClick(isActiveSection(index));
    contextOnClick();
  };

  return (
    <StyledButton ref={ref} onClick={handleClick} {...headerPropsRest} {...rest}>
      <TitleContainer>
        <Title weight="bold" size={textSize}>
          {children}
        </Title>
        <Cross active={isActiveSection(index)} />
      </TitleContainer>
    </StyledButton>
  );
};

export default AccordionHeader;
