import React from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import HelpText from '../../atoms/HelpText/HelpText';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import InputText from '../../atoms/InputText/InputText';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';
import styled from 'styled-components';
import { colors } from '../../..';

export interface ITextFieldProps extends IField {
  prefix?: string;
}

const TextFieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const TextField = (props: IField) => {
  const { label, errorMessage, isValid, inputProps, size, helpText, prefix, ...rest } = props;
  const { name } = inputProps;
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
      {...inputProps}
    />
  );
  return (
    <>
      {label && <InputLabel htmlFor={`text-id-${name}`}>{label}</InputLabel>}
      {helpText && <HelpText>{helpText}</HelpText>}
      <SizedContainer size={size} {...rest}>
        {prefix ? <Prefix prefix={prefix}>{input}</Prefix> : input}
      </SizedContainer>
      {errorMessage && <TextFieldError data-automation={`ZA.error-${name}`}>{errorMessage}</TextFieldError>}
    </>
  );
};

interface IPrefixProps extends HTMLSpanElement {
  prefix: string;
}

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
    font-size: 20px;
    color: ${colors.neutral.neutral400};
  }
  
  input {
    padding-left: 24px;
  }
`;

export default TextField;
