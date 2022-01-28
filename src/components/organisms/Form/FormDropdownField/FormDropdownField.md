### Summary

`<FormDropdownField>` is just a thin wrapper around the [`<DropdownField>`](#/Components/Molecules/DropdownField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormDropdownField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```tsx
import { Formik, Form } from 'formik';
import { DropdownField, FormButton } from '@zopauk/react-components';

const validate = (values) => {
  let errors = {};
  if (!values.ref) {
    errors.ref = 'Please pick one';
  }
  return errors;
};

<Formik validateOnMount initialValues={{}} validate={validate} onSubmit={(values) => alert(JSON.stringify(values))}>
  <Form>
    <div className="mb-4">
      <FormDropdownField
        options={[
          {
            label: 'Select an option',
            value: '',
            disabled: true,
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
        name="ref"
      />
    </div>
    <FormButton>Submit</FormButton>
  </Form>
</Formik>;
```
