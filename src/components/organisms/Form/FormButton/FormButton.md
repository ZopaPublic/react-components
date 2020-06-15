### Summary

`<FormButton>` is just a thin wrapper around the [`<Button>`](#/Components/Atoms/Button) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormButton>` already handles the form submit callback and the disabled attribute for you.

### Example

```tsx
import { Formik, Form } from 'formik';
import { FormTextField, FormButton } from '@zopauk/react-components';

const validate = (values) => {
  let errors = {};
  if (!values.yourName) {
    errors.yourName = 'This field is required';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ yourName: '' }}
  validate={validate}
  onSubmit={(values) => alert(JSON.stringify(values))}
>
  <Form>
    <div className="mb-4">
      <FormTextField label="Your name" name="yourName" />
    </div>
    <FormButton>Submit</FormButton>
  </Form>
</Formik>;
```
