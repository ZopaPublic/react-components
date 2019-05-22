import React from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import HelpText from '../../atoms/HelpText/HelpText';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import InputText from '../../atoms/InputText/InputText';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';

const TextField = (props: IField) => {
  const { label, errorMessage, isValid, inputProps, size, helpText, ...rest } = props;
  const { name } = inputProps;
  if (!name) {
    throw Error('Name must be set in inputProps. Check the docs.');
  }
  return (
    <SizedContainer size={size} {...rest}>
      {label && <InputLabel htmlFor={`text-id-${name}`}>{label}</InputLabel>}
      {helpText && <HelpText>{helpText}</HelpText>}
      <InputText
        id={`text-id-${name}`}
        type="text"
        hasError={!!errorMessage}
        isValid={isValid}
        aria-label={label ? undefined : name}
        {...inputProps}
      />
      {errorMessage && <ErrorMessage data-automation={`ZA.error-${name}`}>{errorMessage}</ErrorMessage>}
    </SizedContainer>
  );
};

export default TextField;
