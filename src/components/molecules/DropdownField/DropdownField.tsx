import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { IField } from '../../types';

export interface IDropdownFieldProps extends IField<HTMLSelectElement> {
  /**
   * Size attribute for the rendered HTML `<select>` element
   */
  htmlSelectSize?: InputHTMLAttributes<HTMLSelectElement>['size'];
  name: string;
}

export interface ILabelProps {
  withHelpText?: boolean;
}

const Label = styled(InputLabel)<ILabelProps>`
  ${({ withHelpText }) => withHelpText && `margin-bottom: 0;`}
`;

const FieldError = styled(ErrorMessage)`
  margin-top: 5px;
`;

const HelpText = styled(Text)`
  margin-bottom: 5px;
  display: block;
`;

const DropdownField = forwardRef<HTMLSelectElement, IDropdownFieldProps>(
  ({ label, errorMessage, size, helpText, htmlSelectSize, name, ...rest }, ref) => (
    <>
      {label && (
        <Label withHelpText={!!helpText} htmlFor={`text-id-${name}`}>
          {label}
        </Label>
      )}
      {helpText && <HelpText size="small">{helpText}</HelpText>}
      <SizedContainer size={size}>
        <Dropdown
          id={`text-id-${name}`}
          name={name}
          aria-label={label ? undefined : name}
          size={htmlSelectSize}
          ref={ref}
          {...rest}
        />
      </SizedContainer>
      {errorMessage && <FieldError data-automation={`ZA.error-${name}`}>{errorMessage}</FieldError>}
    </>
  ),
);

export default DropdownField;
