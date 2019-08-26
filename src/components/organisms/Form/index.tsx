import React, { FC, HTMLAttributes } from 'react';

import { IUseFormProps } from '../../hooks/useForm/useForm';

import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';
import FormRadioField from './FormRadioField/FormRadioField';
import FormDropdownField from './FormDropdownField/FormDropdownField';
import FormDropdownFilteredField from './FormDropdownFilteredField/FormDropdownFilteredField';
import Form from './Form/Form';

interface IFormStatic {
  Button?: typeof FormButton;
  TextField?: typeof FormTextField;
  CheckboxField?: typeof FormCheckboxField;
  RadioField?: typeof FormRadioField;
  DropdownField?: typeof FormDropdownField;
  DropdownFilteredField?: typeof FormDropdownFilteredField;
}

const FormWrapper: IFormStatic & FC<HTMLAttributes<HTMLFormElement> & IUseFormProps> = props => <Form {...props} />;

FormWrapper.Button = FormButton;
FormWrapper.TextField = FormTextField;
FormWrapper.CheckboxField = FormCheckboxField;
FormWrapper.RadioField = FormRadioField;
FormWrapper.DropdownField = FormDropdownField;
FormWrapper.DropdownFilteredField = FormDropdownFilteredField;

export default FormWrapper;
