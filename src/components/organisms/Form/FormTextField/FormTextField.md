### Summary

`<FormTextField>` is just a thin wrapper around the [`<TextField />`](#/Components/Molecules/TextField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormTextField>` already handles the form submit callback and the disabled attribute for you.

### Example

```tsx
import { Formik, Form } from 'formik';
import { FormTextField, FormButton, Icon, colors } from '@zopauk/react-components';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'This field is required';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ name: '' }}
  validate={validate}
  onSubmit={(values) => alert(JSON.stringify(values))}
>
  <Form>
    <div className="mb-4">
      <FormTextField startIcon={<Icon variant={faCoffee} />} label="First name" name="name" />
    </div>
    <FormButton>Submit</FormButton>
  </Form>
</Formik>;
```
