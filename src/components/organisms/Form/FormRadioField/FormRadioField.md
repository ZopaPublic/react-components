`<Form.RadioField>` is just a small wrapper around the [`<RadioField />`](#/Components/Molecules/RadioField) component. It is meant to be used **ONLY** inside [`<Form.Provider>`](#/Organisms/Form/FormProvider) along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.RadioField>` already handles valid/invalid state, onChange, and onBlur callback.

```js
import { Form } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.employmentType) {
    errors.employmentType = 'You need to pick one';
  }
  return errors;
};

<Form.Provider
  initialValues={{ employmentType: '' }}
  validate={validate}
  onSubmit={values => alert(JSON.stringify(values))}
>
  <div style={{ marginBottom: '16px' }}>
    <Form.RadioField label="Employed" name="employmentType" value="employed" />
    <Form.RadioField label="Unemployed" name="employmentType" value="unemployed" />
  </div>
  <Form.Button disabled={false}>Submit</Form.Button>
</Form.Provider>;
```
