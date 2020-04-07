### Summary

`<Form.DropdownField>` is just a small wrapper around the [`<DropdownField>`](#/Components/Molecules/DropdownField) component. It is meant to be used **ONLY** iinside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.DropdownField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```tsx
import { Formik, Form } from 'formik';
import { Form as RCForm } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.referral) {
    errors.referral = 'Please pick one';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ referral: '' }}
  validate={validate}
  onSubmit={values => alert(JSON.stringify(values))}
>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <RCForm.DropdownField label="How did you hear about us?" name="referral">
        <option disabled value="">
          select an option
        </option>
        <option value="newspaper">Newspaper</option>
        <option value="socialMedia">Social media</option>
      </RCForm.DropdownField>
    </div>
    <RCForm.Button>Submit</RCForm.Button>
  </Form>
</Formik>;
```
