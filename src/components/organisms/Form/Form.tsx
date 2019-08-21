import React from 'react';

import Provider from './FormProvider/FormProvider';
import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';
import FormRadioField from './FormRadioField/FormRadioField';
import FormDropdownField from './FormDropdownField/FormDropdownField';

class Form extends React.Component {
  public static Provider = Provider;
  public static Button = FormButton;
  public static TextField = FormTextField;
  public static CheckboxField = FormCheckboxField;
  public static RadioField = FormRadioField;
  public static DropdownField = FormDropdownField;

  public render() {
    return null;
  }
}

export default Form;
