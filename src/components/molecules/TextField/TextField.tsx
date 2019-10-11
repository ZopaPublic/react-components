import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import Label from '../../atoms/Label/Label';
import InputText from '../../atoms/InputText/InputText';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { typography } from '../../../constants/typography';
import { colors } from '../../../constants/colors';
import { IField } from '../../types';

export interface ITextFieldProps extends IField, HTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

const TextFieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const TextField = (props: ITextFieldProps) => {
  const { label, errorMessage, isValid, inputProps, size, helpText, prefix } = props;
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
      {label && <Label htmlFor={`text-id-${name}`}>{label}</Label>}
      {helpText && <Text size="small">{helpText}</Text>}
      <SizedContainer size={size}>{prefix ? <Prefix prefix={prefix}>{input}</Prefix> : input}</SizedContainer>
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
    font-size: ${typography.sizes.text.base};
    color: ${colors.neutral.dark};
  }
  
  input {
    padding-left: 24px;
  }
`;

export default TextField;
