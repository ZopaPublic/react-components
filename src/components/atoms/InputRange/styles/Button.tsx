import React from 'react';
import styled from 'styled-components';
import { grid } from '../../../../constants';
import { ButtonProps } from '../../Button/Button';
import { AppThemeProps, useThemeContext } from '../../../styles/Theme';

interface InputRangeThemeProps extends AppThemeProps {}

const ButtonWrapper = styled.div`
  padding: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.paddingMobile};

  @media (min-width: ${grid.breakpoints.m}px) {
    padding: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.padding};
  }
`;

const StyledButton = styled.button<InputRangeThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.borderRadius};
  width: 32px;
  height: 32px;
  padding: 0;

  ${({ theme }) => theme.inputRange?.button.buttonStyle}


  @media (min-width: ${grid.breakpoints.m}px) {
    width: 50px;
    height: 50px;
  }
`;

export const Button = (props: ButtonProps) => {
  const theme = useThemeContext();

  return (
    <ButtonWrapper>
      <StyledButton {...props} theme={theme} />
    </ButtonWrapper>
  );
};
