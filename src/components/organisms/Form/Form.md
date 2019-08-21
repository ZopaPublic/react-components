```js
import { Form } from '@zopauk/react-components';

const initialValues = {
  firstName: '',
  lastName: '',
};
const onSubmit = values => {
  alert(JSON.stringify(values));
};
const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'Field is required';
  }
  if (!values.lastName) {
    errors.lastName = 'Field is required';
  }
  if (!values.terms) {
    errors.terms = 'You need to accept terms and conditions';
  }
  return errors;
};

const FormExample = () => (
  <Form.Provider initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form.TextField label="First name" name="firstName" />
    <Form.TextField label="Last name" name="lastName" />
    <Form.CheckboxField label="Terms and conditions" name="terms" />
    <Form.Button>Submit</Form.Button>
  </Form.Provider>
);

<FormExample />;
```
