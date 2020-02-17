import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import InputText from '../../atoms/InputText/InputText';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { typography } from '../../../constants/typography';
import { colors } from '../../../constants/colors';
import { IField, IInput } from '../../types';

export interface ITextFieldProps extends IField, IInput {
  prefix?: string;
}

export interface IPrefixProps {
  prefix: string;
}

const TextFieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const TextFieldLabel = styled(InputLabel)`
  margin-bottom: 5px;
`;

const Prefix = styled.span<IPrefixProps>`
  position: relative;
  display: block;
  
  &::before {
    content: '${({ prefix }: IPrefixProps) => prefix}';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: ${typography.sizes.text.base};
    color: ${colors.neutral.dark};
  }
  
  input {
    padding-left: 24px;
  }
`;

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ label, errorMessage, isValid, name, inputSize, helpText, prefix, ...rest }, ref) => {
    if (!name) {
      throw Error('Name must be set in inputProps. Check the docs.');
    }

    if (prefix && prefix.length > 1) {
      throw Error('Prefixes can only have one character');
    }

    const input = (
      <InputText
        id={`text-id-${name}`}
        type="text"
        hasError={!!errorMessage}
        isValid={isValid}
        aria-label={label ? undefined : name}
        ref={ref}
        {...rest}
      />
    );

    return (
      <>
        {label && <TextFieldLabel htmlFor={`text-id-${name}`}>{label}</TextFieldLabel>}
        {helpText && <Text size="small">{helpText}</Text>}
        <SizedContainer size={inputSize}>{prefix ? <Prefix prefix={prefix}>{input}</Prefix> : input}</SizedContainer>
        {errorMessage && <TextFieldError data-automation={`ZA.error-${name}`}>{errorMessage}</TextFieldError>}
      </>
    );
  },
);

export default TextField;
