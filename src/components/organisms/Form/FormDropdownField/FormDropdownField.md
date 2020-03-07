### Summary

`<Form.DropdownField>` is just a small wrapper around the [`<DropdownField>`](#/Components/Molecules/DropdownField) component. It is meant to be used **ONLY** inside [`<Form>`](#/Organisms/Form/Form) along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.DropdownField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```ts
import { Form } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.referral) {
    errors.referral = 'Please pick one';
  }
  return errors;
};

<Form initialValues={{ referral: '' }} validate={validate} onSubmit={values => alert(JSON.stringify(values))}>
  <div style={{ marginBottom: '16px' }}>
    <Form.DropdownField label="How did you hear about us?" name="referral">
      <option disabled value="">
        select an option
      </option>
      <option value="newspaper">Newspaper</option>
      <option value="socialMedia">Social media</option>
    </Form.DropdownField>
  </div>
  <Form.Button>Submit</Form.Button>
</Form>;
```
