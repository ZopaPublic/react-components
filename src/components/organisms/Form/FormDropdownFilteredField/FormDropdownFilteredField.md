### Summary

`<FormDropdownFilteredField>` is just a thin wrapper around the [`<DropdownFiltered>`](#/Components/Molecules/DropdownFiltered) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormDropdownFilteredField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```tsx
import { Formik, Form } from 'formik';
import { FormDropdownFilteredField, FormButton } from '@zopauk/react-components';

const nationalities = [
  { alpha2: 'GB', value: 'British' },
  { alpha2: 'AO', value: 'Angolan' },
  { alpha2: 'AI', value: 'Anguillan' },
  { alpha2: 'AG', value: 'Antiguan/Barbudan' },
];

const validate = values => {
  let errors = {};
  if (!values.nationality) {
    errors.nationality = 'Please pick one';
  }
  return errors;
};

<Formik
  validateOnMount
  initialValues={{ nationality: '' }}
  validate={validate}
  onSubmit={values => alert(JSON.stringify(values))}
>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <FormDropdownFilteredField
        name="nationality"
        inputProps={{ placeholder: 'Select a nationality...' }}
        items={nationalities}
        label="Nationality"
      />
    </div>
    <FormButton>Submit</FormButton>
  </Form>
</Formik>;
```
