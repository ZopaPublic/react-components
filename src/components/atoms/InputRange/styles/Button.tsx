import React from 'react';
import styled from 'styled-components';
import grid from '../../../../constants/grid';
import { IButtonProps, buttonStyle } from '../../Button/Button';

const ButtonWrapper = styled.div`
  padding: 12px;
  @media (min-width: ${grid.breakpoints.m}px) {
    padding: 16px;
  }
`;

const SButton = styled.button`
  ${buttonStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;

  @media (min-width: ${grid.breakpoints.m}px) {
    width: 50px;
    height: 50px;
  }
`;

export const Button = (props: IButtonProps) => {
  return (
    <ButtonWrapper>
      <SButton {...props} />
    </ButtonWrapper>
  );
};
