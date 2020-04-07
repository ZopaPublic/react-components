### Summary

`<FormDropdownField>` is just a small wrapper around the [`<DropdownField>`](#/Components/Molecules/DropdownField) component. It is meant to be used **ONLY** iinside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<FormDropdownField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```tsx
import { Formik, Form } from 'formik';
import { DropdownField, FormButton } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.referral) {
    errors.referral = 'Please pick one';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ referral: 'newspaper' }}
  validate={validate}
  onSubmit={values => alert(JSON.stringify(values))}
>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <FormDropdownField
        options={[
          {
            label: 'Select an option',
            value: '',
          },
          {
            label: 'Newspaper',
            value: 'newspaper',
          },
          {
            label: 'Social media',
            value: 'socialMedia',
          },
        ]}
        label="How did you hear about us?"
        name="referral"
      />
    </div>
    <FormButton>Submit</FormButton>
  </Form>
</Formik>;
```
