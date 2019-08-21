import React from 'react';

import Provider from './FormProvider/FormProvider';
import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';
import FormRadioField from './FormRadioField/FormRadioField';

class Form extends React.Component {
  public static Provider = Provider;
  public static Button = FormButton;
  public static TextField = FormTextField;
  public static CheckboxField = FormCheckboxField;
  public static RadioField = FormRadioField;
  public render() {
    return null;
  }
}

export default Form;
