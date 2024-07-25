import React from 'react';
import styled from 'styled-components';
import { grid } from '../../../../constants';
import { ButtonProps } from '../../Button/Button';
import { AppThemeProps } from '../../../styles/Theme';

interface InputRangeThemeProps extends AppThemeProps {}

const ButtonWrapper = styled.div`
  padding: 12px;
  @media (min-width: ${grid.breakpoints.m}px) {
    padding: 16px;
  }
`;

const StyledButton = styled.button<InputRangeThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }: InputRangeThemeProps) => theme.inputRange.borderRadius};
  width: 32px;
  height: 32px;
  padding: 0;

  @media (min-width: ${grid.breakpoints.m}px) {
    width: 50px;
    height: 50px;
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledButton {...props} />
    </ButtonWrapper>
  );
};
