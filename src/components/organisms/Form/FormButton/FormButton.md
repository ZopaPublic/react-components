### Summary

`<Form.Button>` is just a small wrapper around the [`<Button>`](#/Components/Atoms/Button) component. It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.Button>` already handles the form submit callback and the disabled attribute for you.

### Example

```tsx
import { Formik, Form } from 'formik';
import { Form as RCForm } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'This field is required';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ firstName: '' }}
  validate={validate}
  onSubmit={values => alert(JSON.stringify(values))}
>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <RCForm.TextField label="First name" name="firstName" />
    </div>
    <RCForm.Button>Submit</RCForm.Button>
  </Form>
</Formik>;
```
