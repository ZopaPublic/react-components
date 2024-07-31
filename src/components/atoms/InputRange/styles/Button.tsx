import React from 'react';
import styled from 'styled-components';
import { grid } from '../../../../constants';
import { ButtonProps } from '../../Button/Button';
import { AppThemeProps, useThemeContext } from '../../../styles/Theme';

interface InputRangeThemeProps extends AppThemeProps {}

const ButtonWrapper = styled.div<InputRangeThemeProps>`
  padding: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.paddingMobile};
  @media (min-width: ${grid.breakpoints.m}px) {
    padding: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.padding};
  }
`;

const StyledButton = styled.button<InputRangeThemeProps>`
  ${({ theme }) => theme.inputRange?.button.buttonStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.borderRadius};
  width: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.mobileWidth};
  height: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.mobileHeight};
  padding: 0;

  @media (min-width: ${grid.breakpoints.m}px) {
    width: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.width};
    height: ${({ theme }: InputRangeThemeProps) => theme.inputRange?.button.height};
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
