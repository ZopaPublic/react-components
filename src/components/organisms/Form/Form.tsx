import React from 'react';

import Provider from './FormProvider/FormProvider';
import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';

class Form extends React.Component {
  public static Provider = Provider;
  public static Button = FormButton;
  public static TextField = FormTextField;
  public static CheckboxField = FormCheckboxField;
  public render() {
    return null;
  }
}

export default Form;
