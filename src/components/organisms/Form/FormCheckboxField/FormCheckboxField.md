### Summary

`<Form.CheckboxField>` is just a small wrapper around the [`<CheckboxField>`](#/Components/Molecules/CheckboxField) component. It is meant to be used **ONLY** inside [`<Form>`](#/Organisms/Form/Form) along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.CheckboxField>` already handles valid/invalid state, onChange, and onBlur callback.

### Example

```js
import { Form } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.policy) {
    errors.policy = 'You need to accept the policy';
  }
  return errors;
};

<Form initialValues={{ policy: false }} validate={validate} onSubmit={values => alert(JSON.stringify(values))}>
  <Form.Form>
    <div style={{ marginBottom: '16px' }}>
      <Form.CheckboxField label="I accept the policy" name="policy" />
    </div>
    <Form.Button>Submit</Form.Button>
  </Form.Form>
</Form>;
```
