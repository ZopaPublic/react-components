import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../constants';
import Heading from '../../../atoms/Heading/Heading';
import { useAccordionContext } from '../context';

export interface AccordionHeader extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children?: React.ReactNode;
  id: string;
  index: number;
  textSize?: 'body' | 'small';
  onClick?: (isActive: boolean) => void;
}
const StyledButton = styled.button`
  appearance: none;
  color: ${colors.greyDarkest};
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  width: 100%;
  margin-bottom: ${spacing[1]};
  text-align: left;
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

const Cross = styled.span<{ active: boolean }>`
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  position: absolute;
  right: 16px;
  top: 40%;
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

const AccordionHeader = ({ children, id, index, textSize = 'body', onClick, ...rest }: AccordionHeader) => {
  const { getHeaderProps, isActiveSection } = useAccordionContext();
  const { ref, onClick: contextOnClick, ...headerPropsRest } = getHeaderProps(id, index);

  const handleClick = () => {
    onClick && onClick(isActiveSection(index));
    contextOnClick();
  };

  return (
    <Heading as="h3" size="h6">
      <StyledButton type="button" ref={ref} onClick={handleClick} {...headerPropsRest} {...rest}>
        <TitleContainer>
          {children}
          <Cross active={isActiveSection(index)} />
        </TitleContainer>
      </StyledButton>
    </Heading>
  );
};

export default AccordionHeader;
