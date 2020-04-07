### Summary

`<Form.CheckboxField>` is just a small wrapper around the [`<CheckboxField>`](#/Components/Molecules/CheckboxField) component. It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.CheckboxField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```tsx
import { Formik, Form } from 'formik';
import { Form as RCForm } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.policy) {
    errors.policy = 'You need to accept the policy';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ policy: false }}
  validate={validate}
  onSubmit={values => alert(JSON.stringify(values))}
>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <RCForm.CheckboxField label="I accept the policy" name="policy" />
    </div>
    <RCForm.Button>Submit</RCForm.Button>
  </Form>
</Formik>;
```
