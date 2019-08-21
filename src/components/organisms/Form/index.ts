import React from 'react';

import Provider from './FormProvider';
import FormComponent from './Form';
import FormButton from './FormButton';
import FormTextField from './FormTextField';

class Form extends React.Component {
  public static Provider = Provider;
  public static Form = FormComponent;
  public static Button = FormButton;
  public static TextField = FormTextField;
  public render() {
    return null;
  }
}

export default Form;
