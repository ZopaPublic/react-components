### Summary

`<Form.DropdownFilteredField>` is just a small wrapper around the [`<DropdownFiltered>`](#/Components/Molecules/DropdownFiltered) component. It is meant to be used **ONLY** inside [`<Form>`](#/Organisms/Form/Form) along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.DropdownFilteredField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```js
import { Form } from '@zopauk/react-components';

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

<Form initialValues={{ nationality: '' }} validate={validate} onSubmit={values => alert(JSON.stringify(values))}>
  <Form.Form>
    <div style={{ marginBottom: '16px' }}>
      <Form.DropdownFilteredField
        name="nationality"
        inputProps={{ placeholder: 'Select a nationality...' }}
        items={nationalities}
        label="Nationality"
      />
    </div>
    <Form.Button>Submit</Form.Button>
  </Form.Form>
</Form>;
```
