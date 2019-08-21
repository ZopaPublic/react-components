```js
import { Form } from '@zopauk/react-components';

const initialValues = {
  firstName: '',
  lastName: '',
};
const onSubmit = values => {
  alert(values);
};
const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'Field is required';
  }
  if (!values.lastName) {
    errors.lastName = 'Field is required';
  }
  return errors;
};

const FormExample = () => (
  <Form.Provider initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form.Form>
      <Form.TextField label="First name:" name="firstName" />
      <Form.TextField label="Last name:" name="lastName" />
      <Form.Button>Submit</Form.Button>
    </Form.Form>
  </Form.Provider>
);

<FormExample />;
```
