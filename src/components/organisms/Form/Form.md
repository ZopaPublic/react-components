```js
import { Form, Text } from '@zopauk/react-components';

const initialValues = {
  firstName: '',
  lastName: '',
  nationality: '',
  terms: false,
  type: '',
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
  if (!values.type) {
    errors.terms = 'You need to pick one';
  }
  return errors;
};

const FormExample = () => (
  <Form.Provider initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form.TextField label="First name" name="firstName" />
    <Form.TextField label="Last name" name="lastName" />
    <Form.DropdownField label="Nationality" name="nationality">
      <option value="spain">Spain</option>
      <option value="uk">UK</option>
    </Form.DropdownField>
    <Text fw="bold">Type</Text>
    <Form.RadioField label="Investor" name="type" value="investor" />
    <Form.RadioField label="Borrower" name="type" value="borrower" />
    <Text fw="bold">Terms and conditions</Text>
    <Form.CheckboxField label="I accept" name="terms" />
    <Form.Button>Submit</Form.Button>
  </Form.Provider>
);

<FormExample />;
```
