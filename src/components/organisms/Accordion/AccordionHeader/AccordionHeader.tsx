import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../constants';
import Text from '../../../atoms/Text/Text';
import { useAccordionContext } from '../context';

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
  position: relative;
  padding: ${spacing[4]} 43px ${spacing[4]} ${spacing[4]};
`;

const Title = styled(Text)`
  color: ${colors.greyDarkest};
`;

const Cross = styled.span<{ active: boolean }>`
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  position: absolute;
  right: 16px;
  top: 20px;
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${colors.grey};
  }
  &:before {
    width: 100%;
    height: 3px;
  }
  &:after {
    height: ${({ active }) => (active ? '0' : '100%')};
    width: 3px;
  }
`;

const AccordionHeader: FC<AccordionHeader> = ({ children, id, index, textSize = 'body', onClick, ...rest }) => {
  const { getHeaderProps, isActiveSection } = useAccordionContext();
  const { ref, onClick: contextOnClick, ...headerPropsRest } = getHeaderProps(id, index);

  const handleClick = () => {
    onClick && onClick(isActiveSection(index));
    contextOnClick();
  };

  return (
    <StyledButton type="button" ref={ref} onClick={handleClick} {...headerPropsRest} {...rest}>
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
